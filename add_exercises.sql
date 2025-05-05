-- Insert Strength exercises (Intermediate difficulty)
INSERT INTO exercises (name, category, description, muscle_groups, equipment, difficulty)
VALUES 
  ('Barbell Bench Press', 'Strength', 'Lie on a bench, grip the barbell with hands slightly wider than shoulder-width, lower the bar to your chest, and press back up.', ARRAY['Chest', 'Triceps', 'Shoulders'], ARRAY['Barbell', 'Bench'], 'Intermediate'),
  
  ('Barbell Squat', 'Strength', 'Place a barbell on your upper back, feet shoulder-width apart, bend knees and hips to lower your body, then stand back up.', ARRAY['Quadriceps', 'Hamstrings', 'Glutes', 'Lower Back'], ARRAY['Barbell'], 'Intermediate'),
  
  ('Dumbbell Row', 'Strength', 'Place one knee and hand on a bench, hold a dumbbell in the other hand, and pull it up to your ribcage.', ARRAY['Back', 'Biceps', 'Shoulders'], ARRAY['Dumbbells', 'Bench'], 'Intermediate'),
  
  ('Barbell Deadlift', 'Strength', 'Stand with feet hip-width apart, bend at the hips and knees to grip the barbell, then stand up by driving through the heels.', ARRAY['Lower Back', 'Hamstrings', 'Glutes', 'Traps'], ARRAY['Barbell'], 'Intermediate'),
  
  ('Dumbbell Shoulder Press', 'Strength', 'Sit on a bench with back support, hold dumbbells at shoulder height, and press them overhead.', ARRAY['Shoulders', 'Triceps'], ARRAY['Dumbbells', 'Bench'], 'Intermediate'),
  
  ('Incline Bench Press', 'Strength', 'Lie on an incline bench, grip the barbell, lower it to your upper chest, and press back up.', ARRAY['Upper Chest', 'Shoulders', 'Triceps'], ARRAY['Barbell', 'Bench'], 'Intermediate'),
  
  ('Barbell Bent Over Row', 'Strength', 'Bend at hips until torso is nearly parallel to floor, grasp barbell with overhand grip, and pull it to lower chest.', ARRAY['Back', 'Biceps', 'Shoulders'], ARRAY['Barbell'], 'Intermediate'),
  
  ('Dumbbell Lunges', 'Strength', 'Hold dumbbells at sides, step forward with one leg and lower your body until both knees are bent at 90 degrees.', ARRAY['Quadriceps', 'Hamstrings', 'Glutes'], ARRAY['Dumbbells'], 'Intermediate'),
  
  ('Bench Dips', 'Strength', 'Sit on edge of bench, place hands beside hips, slide hips forward off bench, and bend elbows to lower body.', ARRAY['Triceps', 'Chest', 'Shoulders'], ARRAY['Bench'], 'Intermediate'),
  
  ('Resistance Band Pull-Aparts', 'Strength', 'Hold a resistance band with arms extended, then pull the band apart by moving your arms outward.', ARRAY['Upper Back', 'Shoulders', 'Rear Deltoids'], ARRAY['Resistance Bands'], 'Intermediate');

-- Insert Cardio exercises (Intermediate difficulty)
INSERT INTO exercises (name, category, description, muscle_groups, equipment, difficulty)
VALUES 
  ('Treadmill Running', 'Cardio', 'Run on treadmill at moderate to high intensity, adjusting incline and speed as needed.', ARRAY['Quadriceps', 'Hamstrings', 'Calves', 'Core'], ARRAY['Treadmill'], 'Intermediate'),
  
  ('Stationary Bike Intervals', 'Cardio', 'Alternate between periods of high intensity and recovery on a stationary bike.', ARRAY['Quadriceps', 'Hamstrings', 'Calves'], ARRAY['Bicycle'], 'Intermediate'),
  
  ('Jump Rope', 'Cardio', 'Jump rope continuously, varying speed and style for increased challenge.', ARRAY['Calves', 'Shoulders', 'Core'], ARRAY['Bodyweight'], 'Intermediate'),
  
  ('Burpees', 'Cardio', 'Start standing, drop to a squat, kick feet back to plank, return to squat, and jump up.', ARRAY['Full Body'], ARRAY['Bodyweight'], 'Intermediate'),
  
  ('Mountain Climbers', 'Cardio', 'Start in a plank position and alternate bringing knees to chest in a running motion.', ARRAY['Core', 'Shoulders', 'Hip Flexors'], ARRAY['Bodyweight'], 'Intermediate'),
  
  ('Box Jumps', 'Cardio', 'Jump onto a raised platform, stand fully, then step or jump back down.', ARRAY['Quadriceps', 'Hamstrings', 'Calves', 'Glutes'], ARRAY['Bodyweight'], 'Intermediate'),
  
  ('Barbell Complex', 'Cardio', 'Perform a series of barbell exercises back-to-back without rest.', ARRAY['Full Body'], ARRAY['Barbell'], 'Intermediate');

-- Insert Core exercises (Intermediate difficulty)
INSERT INTO exercises (name, category, description, muscle_groups, equipment, difficulty)
VALUES 
  ('Bodyweight Plank', 'Core', 'Hold a push-up position with weight on forearms, keeping body straight.', ARRAY['Abdominals', 'Lower Back'], ARRAY['Bodyweight'], 'Intermediate'),
  
  ('Russian Twists', 'Core', 'Sit on floor with knees bent, lean back slightly, twist torso side to side.', ARRAY['Obliques', 'Abdominals'], ARRAY['Bodyweight'], 'Intermediate'),
  
  ('Hanging Leg Raises', 'Core', 'Hang from a pull-up bar and raise legs until parallel to ground.', ARRAY['Lower Abdominals', 'Hip Flexors'], ARRAY['Pull-up Bar'], 'Intermediate'),
  
  ('Ab Rollout', 'Core', 'Kneel on floor holding ab wheel, roll forward as far as possible, then pull back.', ARRAY['Abdominals', 'Lower Back', 'Shoulders'], ARRAY['Bodyweight'], 'Intermediate'),
  
  ('Side Plank', 'Core', 'Lie on side with forearm on ground, lift hips to create straight line from head to feet.', ARRAY['Obliques', 'Hip Abductors'], ARRAY['Bodyweight'], 'Intermediate'),
  
  ('Medicine Ball Slams', 'Core', 'Lift medicine ball overhead, then slam it down to the ground with force.', ARRAY['Abdominals', 'Shoulders', 'Back'], ARRAY['Dumbbells'], 'Intermediate'),
  
  ('Swiss Ball Crunch', 'Core', 'Lie back on a Swiss ball with feet on floor, hands behind head, and crunch upward.', ARRAY['Abdominals'], ARRAY['Bench'], 'Intermediate'),
  
  ('Resistance Band Woodchoppers', 'Core', 'Attach band to high point, stand sideways, pull handle down across body in chopping motion.', ARRAY['Obliques', 'Shoulders'], ARRAY['Resistance Bands'], 'Intermediate');

-- Insert some Beginner exercises
INSERT INTO exercises (name, category, description, muscle_groups, equipment, difficulty)
VALUES 
  ('Bodyweight Squat', 'Strength', 'Stand with feet shoulder-width apart, lower body by bending knees and hips, then return to standing.', ARRAY['Quadriceps', 'Hamstrings', 'Glutes'], ARRAY['Bodyweight'], 'Beginner'),
  
  ('Push-ups', 'Strength', 'Start in plank position, lower body until chest nearly touches floor, then push back up.', ARRAY['Chest', 'Triceps', 'Shoulders'], ARRAY['Bodyweight'], 'Beginner'),
  
  ('Walking Lunges', 'Strength', 'Step forward into a lunge position, then bring the back foot forward to step into another lunge.', ARRAY['Quadriceps', 'Hamstrings', 'Glutes'], ARRAY['Bodyweight'], 'Beginner'),
  
  ('Seated Bicycle Crunches', 'Core', 'Sit on floor, lean back slightly, and alternate touching elbow to opposite knee.', ARRAY['Abdominals', 'Obliques'], ARRAY['Bodyweight'], 'Beginner'),
  
  ('Treadmill Walking', 'Cardio', 'Walk on treadmill at moderate pace, adjusting incline for added challenge.', ARRAY['Lower Body'], ARRAY['Treadmill'], 'Beginner');

-- Insert some Advanced exercises
INSERT INTO exercises (name, category, description, muscle_groups, equipment, difficulty)
VALUES 
  ('Weighted Pull-ups', 'Strength', 'Perform pull-ups with additional weight attached to your body.', ARRAY['Back', 'Biceps', 'Shoulders'], ARRAY['Pull-up Bar'], 'Advanced'),
  
  ('Barbell Clean and Jerk', 'Strength', 'Lift barbell from floor to shoulders in one motion, then press overhead.', ARRAY['Full Body'], ARRAY['Barbell'], 'Advanced'),
  
  ('Muscle-ups', 'Strength', 'Perform a pull-up that transitions into a dip on top of the bar.', ARRAY['Back', 'Chest', 'Triceps', 'Shoulders'], ARRAY['Pull-up Bar'], 'Advanced'),
  
  ('Dragon Flag', 'Core', 'Lie on bench, grasp behind head, raise straight body up supported only by shoulders.', ARRAY['Full Core'], ARRAY['Bench'], 'Advanced'),
  
  ('High-Intensity Interval Sprint', 'Cardio', 'Alternate between maximum effort sprints and active recovery periods.', ARRAY['Full Body'], ARRAY['Treadmill'], 'Advanced'); 