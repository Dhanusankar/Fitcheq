const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

/**
 * Reset and apply Prisma migrations in the correct order
 */
async function resetMigrations() {
  try {
    console.log('Starting Prisma migration reset and reapplication...');

    // Step 1: Create a fresh migrations directory
    const migrationsDir = path.join(__dirname, '..', 'prisma', 'migrations');
    if (fs.existsSync(migrationsDir)) {
      console.log('Backing up existing migrations directory...');
      const backupDir = path.join(__dirname, '..', 'prisma', 'migrations_backup_' + Date.now());
      fs.renameSync(migrationsDir, backupDir);
      fs.mkdirSync(migrationsDir);
    }
    
    // Step 2: Create a backup of the current schema.prisma file
    const schemaPath = path.join(__dirname, '..', 'prisma', 'schema.prisma');
    const schemaBackupPath = path.join(__dirname, '..', 'prisma', 'schema.prisma.backup');
    fs.copyFileSync(schemaPath, schemaBackupPath);
    console.log('Created backup of schema.prisma');

    // Step 3: Temporarily modify schema.prisma to remove uuid_ossp extension if it's causing issues
    const schemaContent = fs.readFileSync(schemaPath, 'utf8');
    
    // Check if schema uses uuid_ossp extension
    if (schemaContent.includes('extensions = [uuid_ossp')) {
      console.log('Detected uuid_ossp extension in schema.prisma');
      console.log('Temporarily modifying schema to use pgcrypto extension...');
      
      // Create a temporary schema without the uuid_ossp extension
      const modifiedSchema = schemaContent
        .replace('extensions = [uuid_ossp(schema: "public")]', 'extensions = [pgcrypto(schema: "public")]')
        .replace('previewFeatures = ["postgresqlExtensions"]', 'previewFeatures = ["postgresqlExtensions"]');
      
      fs.writeFileSync(schemaPath, modifiedSchema);
    }

    // Step 4: Drop the database and recreate it
    console.log('Dropping and recreating database...');
    try {
      // Reset the database completely
      execSync('npx prisma migrate reset --force', { stdio: 'inherit' });
    } catch (error) {
      console.error('Error resetting the database, will create a new migration instead:', error.message);
    }

    // Step 5: Create a fresh migration
    console.log('Creating a new initial migration...');
    execSync('npx prisma migrate dev --name initial', { stdio: 'inherit' });
    
    // Step 6: Generate the Prisma client
    console.log('Generating Prisma client...');
    execSync('npx prisma generate', { stdio: 'inherit' });

    // Step 7: Restore original schema if it was modified
    if (schemaContent.includes('extensions = [uuid_ossp')) {
      console.log('Restoring original schema.prisma...');
      fs.writeFileSync(schemaPath, schemaContent);
      
      console.log('Re-generating Prisma client with original schema...');
      execSync('npx prisma generate', { stdio: 'inherit' });
      
      console.log('NOTE: For full UUID functionality, please install the pgcrypto extension in PostgreSQL:');
      console.log('1. Connect to your PostgreSQL database');
      console.log('2. Run: CREATE EXTENSION IF NOT EXISTS "pgcrypto";');
    }

    console.log('Migration reset and reapplication completed successfully!');
    return { success: true };
  } catch (error) {
    console.error('Error resetting migrations:', error.message);
    return { success: false, error: error.message };
  }
}

// Run the function
resetMigrations()
  .then(result => {
    if (result.success) {
      console.log('Script completed successfully');
      process.exit(0);
    } else {
      console.error('Script failed:', result.error);
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('Unhandled error:', error);
    process.exit(1);
  }); 