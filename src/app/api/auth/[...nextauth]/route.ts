import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';
import { initDatabase } from '@/lib/init-db';

// Call init function once
initDatabase().catch(console.error);

// Use the authOptions from lib/auth.ts instead of duplicating configuration
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 