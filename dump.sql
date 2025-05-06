--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: exercise_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.exercise_logs (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    exercise_id uuid,
    exercise_name character varying(255),
    sets integer,
    reps integer,
    weight numeric(6,2),
    duration integer,
    intensity character varying(50),
    notes text,
    completed_at date DEFAULT CURRENT_DATE NOT NULL,
    created_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.exercise_logs OWNER TO postgres;

--
-- Name: exercises; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.exercises (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    category character varying(50) NOT NULL,
    description text,
    muscle_groups text[],
    equipment text[],
    difficulty character varying(50),
    created_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.exercises OWNER TO postgres;

--
-- Name: meal_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meal_logs (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    meal_id uuid,
    meal_name character varying(255),
    portion numeric(4,2),
    calories integer,
    protein numeric(6,2),
    carbs numeric(6,2),
    fats numeric(6,2),
    meal_time character varying(50),
    notes text,
    consumed_at date DEFAULT CURRENT_DATE NOT NULL,
    created_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.meal_logs OWNER TO postgres;

--
-- Name: meal_plan_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meal_plan_items (
    id uuid NOT NULL,
    meal_plan_id uuid NOT NULL,
    meal_id uuid,
    name character varying(255) NOT NULL,
    meal_time character varying(50) NOT NULL,
    calories integer,
    protein numeric(6,2),
    carbs numeric(6,2),
    fats numeric(6,2),
    completed boolean DEFAULT false,
    completion_date timestamp(6) with time zone,
    day_number integer,
    portion numeric(4,2),
    notes text,
    created_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.meal_plan_items OWNER TO postgres;

--
-- Name: meal_plans; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meal_plans (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    date date,
    workout_plan_id uuid,
    created_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP,
    daily_calories integer DEFAULT 2000
);


ALTER TABLE public.meal_plans OWNER TO postgres;

--
-- Name: meals; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meals (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    category character varying(50),
    calories integer,
    protein numeric(6,2),
    carbs numeric(6,2),
    fats numeric(6,2),
    image_url text,
    description text,
    food_items jsonb,
    created_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.meals OWNER TO postgres;

--
-- Name: progress_tracking; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.progress_tracking (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    workout_plan_id uuid,
    week_number integer NOT NULL,
    exercises_completed integer DEFAULT 0,
    exercises_total integer DEFAULT 0,
    meals_completed integer DEFAULT 0,
    meals_total integer DEFAULT 0,
    start_date date NOT NULL,
    end_date date NOT NULL,
    created_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.progress_tracking OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    age integer,
    gender character varying(50),
    weight numeric(5,2),
    height numeric(5,2),
    bmi numeric(4,2),
    fitness_goal character varying(50),
    dietary_preference character varying(255),
    dietary_restrictions text[],
    avatar_url text,
    created_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP,
    age_range character varying(20) DEFAULT 'adult'::character varying NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: water_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.water_logs (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    amount_ml integer NOT NULL,
    logged_at date DEFAULT CURRENT_DATE NOT NULL,
    created_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.water_logs OWNER TO postgres;

--
-- Name: water_tracking; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.water_tracking (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    amount_ml integer NOT NULL,
    tracked_date date DEFAULT CURRENT_DATE NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.water_tracking OWNER TO postgres;

--
-- Name: weight_logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.weight_logs (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    weight numeric(5,2) NOT NULL,
    logged_at date DEFAULT CURRENT_DATE NOT NULL,
    created_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.weight_logs OWNER TO postgres;

--
-- Name: workout_plan_exercises; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.workout_plan_exercises (
    id uuid NOT NULL,
    workout_plan_id uuid NOT NULL,
    exercise_id uuid,
    exercise_name character varying(255),
    day_of_week integer,
    sets integer,
    reps integer,
    weight numeric(6,2),
    duration integer,
    created_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP,
    completed boolean DEFAULT false,
    completion_date timestamp(6) with time zone,
    actual_sets integer,
    actual_reps integer,
    actual_weight numeric(6,2),
    actual_duration integer,
    notes text,
    updated_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.workout_plan_exercises OWNER TO postgres;

--
-- Name: workout_plans; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.workout_plans (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    goal character varying(50),
    frequency integer,
    duration_weeks integer,
    active boolean DEFAULT true,
    created_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp(6) with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.workout_plans OWNER TO postgres;

--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
ab5f45e9-8864-4ed9-8ec2-4475f9e93ae0	8d9037a4b87c38d2e50b63875e07b39bfb70108f9e6cc60598f98139d18a76c9	2025-04-24 23:33:04.295983-05	20250425043303_initial	\N	\N	2025-04-24 23:33:03.933483-05	1
\.


--
-- Data for Name: exercise_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.exercise_logs (id, user_id, exercise_id, exercise_name, sets, reps, weight, duration, intensity, notes, completed_at, created_at) FROM stdin;
01f8c3ae-5882-444c-927e-ffd90262dbb6	264edb21-7ff4-4525-9091-712cc5d050e6	22e4c954-0f1e-4c0a-8ec2-d620ba3388a8	Barbell Clean and Jerk	2	1	20.00	\N	\N	\N	2025-04-29	2025-04-29 14:17:13.631422-05
b818b999-2b58-472b-bc3b-e7a1cf3b79c4	264edb21-7ff4-4525-9091-712cc5d050e6	b6de198d-4d40-4cd3-ba85-b9a0adc6019e	Barbell Squat	2	3	12.00	\N	\N	\N	2025-04-29	2025-04-29 14:19:36.36297-05
a2814fd7-3b8d-4575-8c69-8b4eaa2768bb	264edb21-7ff4-4525-9091-712cc5d050e6	4762513d-818f-49cc-980b-301ff0b37431	Bodyweight Squat	3	10	\N	\N	\N	Marked as completed	2025-04-29	2025-04-29 14:27:37.557278-05
042992a7-097d-451d-bb06-a2e4e04afc0a	264edb21-7ff4-4525-9091-712cc5d050e6	4762513d-818f-49cc-980b-301ff0b37431	Bodyweight Squat	3	10	12.00	5	\N	Exercise completed with custom data	2025-04-29	2025-04-29 14:27:52.602147-05
6f7de4bb-20e9-4bca-82b2-36f09840420f	264edb21-7ff4-4525-9091-712cc5d050e6	89ea9b62-3a6c-4422-a849-9b04445111b3	Resistance Band Rows	3	10	\N	\N	\N	Marked as completed	2025-04-29	2025-04-29 14:28:29.450771-05
8946d34d-b96b-47d5-925d-64d2e9a07c6c	264edb21-7ff4-4525-9091-712cc5d050e6	89ea9b62-3a6c-4422-a849-9b04445111b3	Resistance Band Rows	3	10	15.00	20	\N	Exercise completed with custom data	2025-04-29	2025-04-29 14:29:04.356738-05
4413e2ee-905e-4074-bf5b-8d8cee1594ba	264edb21-7ff4-4525-9091-712cc5d050e6	6c03e14a-d5d5-4338-b364-26eef0036963	Basic Plank	3	15	\N	\N	\N	Marked as completed	2025-04-29	2025-04-29 14:35:47.826576-05
a940ae66-5ef2-47fc-9294-33bc238f3936	264edb21-7ff4-4525-9091-712cc5d050e6	6c03e14a-d5d5-4338-b364-26eef0036963	Basic Plank	3	15	56.00	5	\N	Exercise completed with custom data	2025-04-29	2025-04-29 14:35:58.304163-05
84c4734b-ffc7-44dc-ab84-97c92ed9c9eb	264edb21-7ff4-4525-9091-712cc5d050e6	be2d0f2f-a1de-4198-9c76-11bd8214bea2	Treadmill Walking	\N	\N	\N	20	\N	Marked as completed	2025-04-29	2025-04-29 14:36:02.951573-05
f601afc0-0bad-40f3-801e-9bf548543482	264edb21-7ff4-4525-9091-712cc5d050e6	6c03e14a-d5d5-4338-b364-26eef0036963	Basic Plank	3	15	56.00	10	\N	Exercise completed with custom data	2025-04-29	2025-04-29 14:36:45.847325-05
0e705470-a8e2-4f9f-8895-11576e2f5397	264edb21-7ff4-4525-9091-712cc5d050e6	be2d0f2f-a1de-4198-9c76-11bd8214bea2	Treadmill Walking	\N	\N	26.00	20	\N	Exercise completed with custom data	2025-04-29	2025-04-29 14:37:00.573728-05
98703f34-aaf5-47ac-8b93-1c5100ba729f	264edb21-7ff4-4525-9091-712cc5d050e6	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	3	15	\N	\N	\N	Marked as completed	2025-04-29	2025-04-29 14:37:06.996085-05
a5f55214-ee14-4eb9-9c09-f79a95ccc752	264edb21-7ff4-4525-9091-712cc5d050e6	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	3	15	14.00	25	\N	Exercise completed with custom data	2025-04-29	2025-04-29 14:37:15.811971-05
\.


--
-- Data for Name: exercises; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.exercises (id, name, category, description, muscle_groups, equipment, difficulty, created_at) FROM stdin;
4762513d-818f-49cc-980b-301ff0b37431	Bodyweight Squat	Strength	Stand with feet shoulder-width apart, lower body by bending knees and hips, then return to standing.	{Quadriceps,Hamstrings,Glutes}	{Bodyweight}	Beginner	2025-04-24 23:34:10.195-05
4a802777-6b7a-4f30-a065-95edbc5828a1	Push-ups	Strength	Start in plank position, lower body until chest nearly touches floor, then push back up.	{Chest,Triceps,Shoulders}	{Bodyweight}	Beginner	2025-04-24 23:34:10.209-05
407a05bd-d244-475e-a680-929b27b9f51f	Walking Lunges	Strength	Step forward into a lunge position, then bring the back foot forward to step into another lunge.	{Quadriceps,Hamstrings,Glutes}	{Bodyweight}	Beginner	2025-04-24 23:34:10.223-05
b7a6c92f-a1cc-4be3-94a0-452bea02e93c	Barbell Bench Press	Strength	Lie on a bench, grip the barbell with hands slightly wider than shoulder-width, lower the bar to your chest, and press back up.	{Chest,Triceps,Shoulders}	{Barbell,Bench}	Intermediate	2025-04-24 23:34:10.228-05
b6de198d-4d40-4cd3-ba85-b9a0adc6019e	Barbell Squat	Strength	Place a barbell on your upper back, feet shoulder-width apart, bend knees and hips to lower your body, then stand back up.	{Quadriceps,Hamstrings,Glutes,"Lower Back"}	{Barbell}	Intermediate	2025-04-24 23:34:10.235-05
2eebe150-220f-441b-b674-3a5a8a05dcfb	Dumbbell Row	Strength	Place one knee and hand on a bench, hold a dumbbell in the other hand, and pull it up to your ribcage.	{Back,Biceps,Shoulders}	{Dumbbells,Bench}	Intermediate	2025-04-24 23:34:10.242-05
39abc370-f4d6-448d-a30c-758a32497816	Weighted Pull-ups	Strength	Perform pull-ups with additional weight attached to your body.	{Back,Biceps,Shoulders}	{"Pull-up Bar"}	Advanced	2025-04-24 23:34:10.247-05
22e4c954-0f1e-4c0a-8ec2-d620ba3388a8	Barbell Clean and Jerk	Strength	Lift barbell from floor to shoulders in one motion, then press overhead.	{"Full Body"}	{Barbell}	Advanced	2025-04-24 23:34:10.251-05
be2d0f2f-a1de-4198-9c76-11bd8214bea2	Treadmill Walking	Cardio	Walk on treadmill at moderate pace, adjusting incline for added challenge.	{"Lower Body"}	{Treadmill}	Beginner	2025-04-24 23:34:10.263-05
e531e2bd-152a-4fdd-acb0-f64ba0c1769e	Stationary Bike Easy Ride	Cardio	Pedal at a comfortable pace with light resistance.	{Quadriceps,Hamstrings,Calves}	{Bicycle}	Beginner	2025-04-24 23:34:10.268-05
8ab97894-2b53-4203-b4e3-7f96dccd8830	Treadmill Running	Cardio	Run on treadmill at moderate to high intensity, adjusting incline and speed as needed.	{Quadriceps,Hamstrings,Calves,Core}	{Treadmill}	Intermediate	2025-04-24 23:34:10.276-05
ac65694c-9b7a-4fd3-8c54-ff2adbfe5adf	Jump Rope	Cardio	Jump rope continuously, varying speed and style for increased challenge.	{Calves,Shoulders,Core}	{Bodyweight}	Intermediate	2025-04-24 23:34:10.28-05
e686c5a1-dd06-4a02-b625-7a4e325025c4	Stationary Bike Intervals	Cardio	Alternate between periods of high intensity and recovery on a stationary bike.	{Quadriceps,Hamstrings,Calves}	{Bicycle}	Intermediate	2025-04-24 23:34:10.285-05
72c7b0d5-2e2d-46aa-9715-e04392a99685	High-Intensity Interval Sprint	Cardio	Alternate between maximum effort sprints and active recovery periods.	{"Full Body"}	{Treadmill}	Advanced	2025-04-24 23:34:10.292-05
59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	Core	Sit on floor, lean back slightly, and alternate touching elbow to opposite knee.	{Abdominals,Obliques}	{Bodyweight}	Beginner	2025-04-24 23:34:10.298-05
6c03e14a-d5d5-4338-b364-26eef0036963	Basic Plank	Core	Hold push-up position with weight on forearms, keeping body straight.	{Abdominals,"Lower Back"}	{Bodyweight}	Beginner	2025-04-24 23:34:10.308-05
b8111e25-24e5-4245-adb9-0e5c9848c8db	Bodyweight Plank	Core	Hold a push-up position with weight on forearms, keeping body straight for extended periods.	{Abdominals,"Lower Back"}	{Bodyweight}	Intermediate	2025-04-24 23:34:10.314-05
9931f3a7-3a2e-494e-a73b-b0eb796986a1	Russian Twists	Core	Sit on floor with knees bent, lean back slightly, twist torso side to side.	{Obliques,Abdominals}	{Bodyweight}	Intermediate	2025-04-24 23:34:10.324-05
eecb3458-c940-4585-8af6-ca334ee7829d	Hanging Leg Raises	Core	Hang from a pull-up bar and raise legs until parallel to ground.	{"Lower Abdominals","Hip Flexors"}	{"Pull-up Bar"}	Intermediate	2025-04-24 23:34:10.332-05
8039ff0c-0890-4578-b7d7-1a04ebb94c6b	Dragon Flag	Core	Lie on bench, grasp behind head, raise straight body up supported only by shoulders.	{"Full Core"}	{Bench}	Advanced	2025-04-24 23:34:10.359-05
89ea9b62-3a6c-4422-a849-9b04445111b3	Resistance Band Rows	Strength	Anchor resistance band at chest height, step back to create tension, pull band toward chest.	{Back,Biceps}	{"Resistance Bands"}	Beginner	2025-04-24 23:34:10.417-05
6af7da2d-d43c-4546-8d06-00dd9de56e7a	Dumbbell Bench Press	Strength	Lie on bench with dumbbells at chest level, press weights upward until arms are extended.	{Chest,Triceps,Shoulders}	{Dumbbells,Bench}	Intermediate	2025-04-24 23:34:10.441-05
8bdf512a-5342-4080-ad50-8151b5b1f43c	Kettlebell Swings	Strength	Bend at hips with kettlebell between legs, swing kettlebell forward to shoulder height using hip drive.	{Glutes,Hamstrings,"Lower Back",Shoulders}	{Kettlebell}	Intermediate	2025-04-24 23:34:10.452-05
\.


--
-- Data for Name: meal_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meal_logs (id, user_id, meal_id, meal_name, portion, calories, protein, carbs, fats, meal_time, notes, consumed_at, created_at) FROM stdin;
4165c1d4-afb3-4319-bd91-5cd14e36ca9a	264edb21-7ff4-4525-9091-712cc5d050e6	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	1.00	340	31.20	9.60	19.80	breakfast	Completed from meal plan: Strength Training Plan Nutrition Plan	2025-04-29	2025-04-29 14:33:50.579-05
b81b8dff-7648-486a-b9da-5da343222104	264edb21-7ff4-4525-9091-712cc5d050e6	7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	1.00	210	10.40	9.60	16.20	snack	Completed from meal plan: Strength Training Plan Nutrition Plan	2025-04-29	2025-04-29 14:34:13.698-05
57110b46-c8e7-4b5b-96ae-72d85317d572	264edb21-7ff4-4525-9091-712cc5d050e6	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	1.00	340	28.80	5.60	17.60	breakfast	Completed from meal plan: Weight Loss Plan Nutrition Plan	2025-04-29	2025-04-29 14:34:42.285-05
7a531472-d771-425f-ba1e-6bf0224433e3	264edb21-7ff4-4525-9091-712cc5d050e6	7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	1.00	210	9.60	5.60	14.40	snack	Completed from meal plan: Weight Loss Plan Nutrition Plan	2025-04-29	2025-04-29 14:34:45.518-05
381976a1-46a3-468f-8359-08854d243038	264edb21-7ff4-4525-9091-712cc5d050e6	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	1.00	340	28.80	5.60	17.60	breakfast	Completed from meal plan: Weight Loss Plan Nutrition Plan	2025-04-29	2025-04-29 14:34:53.142-05
c3a65a1f-63d8-459f-aaa4-d9186ed88b90	264edb21-7ff4-4525-9091-712cc5d050e6	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	1.00	340	28.80	5.60	17.60	breakfast	Completed from meal plan: Weight Loss Plan Nutrition Plan	2025-04-29	2025-04-29 14:34:57.367-05
0fced3d9-afb9-427b-b2bb-633923af153c	264edb21-7ff4-4525-9091-712cc5d050e6	7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	1.00	210	9.60	5.60	14.40	snack	Completed from meal plan: Weight Loss Plan Nutrition Plan	2025-04-29	2025-04-29 14:35:00.739-05
c1439071-a804-4e10-aee5-b9a5d13054e0	264edb21-7ff4-4525-9091-712cc5d050e6	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	1.00	340	31.20	9.60	19.80	breakfast	Completed from meal plan: Strength Training Plan Nutrition Plan	2025-04-29	2025-04-29 14:40:23.011-05
bc264b52-da13-4f4a-be80-b407a03ffbcd	264edb21-7ff4-4525-9091-712cc5d050e6	7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	1.00	210	10.40	9.60	16.20	snack	Completed from meal plan: Strength Training Plan Nutrition Plan	2025-04-29	2025-04-29 14:40:33.619-05
6db73369-39dd-4cac-87c5-36836256108f	264edb21-7ff4-4525-9091-712cc5d050e6	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	1.00	340	31.20	9.60	19.80	breakfast	Completed from meal plan: Strength Training Plan Nutrition Plan	2025-04-29	2025-04-29 14:40:39.556-05
fb98bafd-5d7c-4c6a-aac7-89379782f20e	264edb21-7ff4-4525-9091-712cc5d050e6	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	1.00	340	31.20	9.60	19.80	breakfast	Completed from meal plan: Strength Training Plan Nutrition Plan	2025-04-29	2025-04-29 14:40:43.089-05
f0bc1927-0930-4900-a69f-cab2dcd2591f	264edb21-7ff4-4525-9091-712cc5d050e6	7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	1.00	210	10.40	9.60	16.20	snack	Completed from meal plan: Strength Training Plan Nutrition Plan	2025-04-29	2025-04-29 14:40:45.332-05
\.


--
-- Data for Name: meal_plan_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meal_plan_items (id, meal_plan_id, meal_id, name, meal_time, calories, protein, carbs, fats, completed, completion_date, day_number, portion, notes, created_at, updated_at) FROM stdin;
1b8b6f62-206c-448c-8a3c-2883dff4ae29	e9c61d53-ab30-4e2c-b2be-69658e870777	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	breakfast	340	24.00	8.00	22.00	f	\N	1	1.00	Generated for Day 1	2025-04-29 14:49:26.08-05	2025-04-29 14:49:26.08-05
83d40f6b-ce3b-4873-9dcb-62afcb97ee2a	e9c61d53-ab30-4e2c-b2be-69658e870777	7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	snack	210	8.00	8.00	18.00	f	\N	1	1.00	Generated for Day 1	2025-04-29 14:49:26.083-05	2025-04-29 14:49:26.083-05
cbad7801-c8d1-4edc-8ee0-43e21717ef12	bf7f2841-b0c7-424d-b037-20d476958817	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	breakfast	340	31.20	9.60	19.80	f	\N	1	1.00	Generated for Day 1	2025-04-30 14:22:26.45-05	2025-04-30 14:22:26.45-05
aa1409c4-9d37-4dae-95b6-4fdd55c1adae	bf7f2841-b0c7-424d-b037-20d476958817	7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	snack	210	10.40	9.60	16.20	f	\N	1	1.00	Generated for Day 1	2025-04-30 14:22:26.461-05	2025-04-30 14:22:26.461-05
7b7d37cb-3164-4a15-b6a4-9e1f04071211	bf7f2841-b0c7-424d-b037-20d476958817	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	breakfast	340	31.20	9.60	19.80	f	\N	2	1.00	Generated for Day 2	2025-04-30 14:22:26.466-05	2025-04-30 14:22:26.466-05
ce053627-9e84-4c8a-92e5-68b594043806	bf7f2841-b0c7-424d-b037-20d476958817	7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	snack	210	10.40	9.60	16.20	f	\N	2	1.00	Generated for Day 2	2025-04-30 14:22:26.474-05	2025-04-30 14:22:26.474-05
f4d037f4-361e-4149-9b06-3145d3837d7b	bf7f2841-b0c7-424d-b037-20d476958817	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	breakfast	340	31.20	9.60	19.80	f	\N	3	1.00	Generated for Day 3	2025-04-30 14:22:26.478-05	2025-04-30 14:22:26.478-05
461595e3-cfeb-4358-ae89-5c64091b15b7	bf7f2841-b0c7-424d-b037-20d476958817	7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	snack	210	10.40	9.60	16.20	f	\N	3	1.00	Generated for Day 3	2025-04-30 14:22:26.481-05	2025-04-30 14:22:26.481-05
cf4d23d2-e792-45e1-a24d-8980afebf62f	bf7f2841-b0c7-424d-b037-20d476958817	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	breakfast	340	31.20	9.60	19.80	f	\N	4	1.00	Generated for Day 4	2025-04-30 14:22:26.487-05	2025-04-30 14:22:26.487-05
efbfae1e-2b41-4a1b-8c59-7078120d67c7	bf7f2841-b0c7-424d-b037-20d476958817	7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	snack	210	10.40	9.60	16.20	f	\N	4	1.00	Generated for Day 4	2025-04-30 14:22:26.493-05	2025-04-30 14:22:26.493-05
4eac96ef-4f90-4d66-9e82-032f18990c6b	f2bee1f9-1578-479c-a6af-a1b68204e788	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	breakfast	340	28.80	5.60	17.60	f	\N	1	1.00	Generated for Day 1	2025-04-30 15:07:52.451-05	2025-04-30 15:07:52.451-05
16ab5fa3-c17f-4af0-91e5-50c3c294558c	f2bee1f9-1578-479c-a6af-a1b68204e788	7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	snack	210	9.60	5.60	14.40	f	\N	1	1.00	Generated for Day 1	2025-04-30 15:07:52.466-05	2025-04-30 15:07:52.466-05
d2a70fbc-6ff0-43cd-b3df-a923ad6b7b5b	f2bee1f9-1578-479c-a6af-a1b68204e788	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	breakfast	340	28.80	5.60	17.60	f	\N	2	1.00	Generated for Day 2	2025-04-30 15:07:52.469-05	2025-04-30 15:07:52.469-05
af08313b-7225-46b6-82a8-7467cb2ecbdb	f2bee1f9-1578-479c-a6af-a1b68204e788	7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	snack	210	9.60	5.60	14.40	f	\N	2	1.00	Generated for Day 2	2025-04-30 15:07:52.472-05	2025-04-30 15:07:52.472-05
991947b4-5428-4256-a5a6-1297a0031b2e	f2bee1f9-1578-479c-a6af-a1b68204e788	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	breakfast	340	28.80	5.60	17.60	f	\N	3	1.00	Generated for Day 3	2025-04-30 15:07:52.475-05	2025-04-30 15:07:52.475-05
08cdb7ef-8e4e-407b-89b0-17da05787666	f2bee1f9-1578-479c-a6af-a1b68204e788	7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	snack	210	9.60	5.60	14.40	f	\N	3	1.00	Generated for Day 3	2025-04-30 15:07:52.477-05	2025-04-30 15:07:52.477-05
c821f23a-ae9d-40cc-8ea7-49a5ab34bed1	f2bee1f9-1578-479c-a6af-a1b68204e788	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	breakfast	340	28.80	5.60	17.60	f	\N	4	1.00	Generated for Day 4	2025-04-30 15:07:52.48-05	2025-04-30 15:07:52.48-05
f0cde9ed-d62c-4c3e-8496-8eefb0b29c08	f2bee1f9-1578-479c-a6af-a1b68204e788	7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	snack	210	9.60	5.60	14.40	f	\N	4	1.00	Generated for Day 4	2025-04-30 15:07:52.483-05	2025-04-30 15:07:52.483-05
46065e08-ae4a-438f-b853-8c0ceafac422	f2bee1f9-1578-479c-a6af-a1b68204e788	9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	breakfast	340	28.80	5.60	17.60	f	\N	5	1.00	Generated for Day 5	2025-04-30 15:07:52.485-05	2025-04-30 15:07:52.485-05
225f36eb-8085-424d-8cbc-77b696e414bf	f2bee1f9-1578-479c-a6af-a1b68204e788	7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	snack	210	9.60	5.60	14.40	f	\N	5	1.00	Generated for Day 5	2025-04-30 15:07:52.487-05	2025-04-30 15:07:52.487-05
\.


--
-- Data for Name: meal_plans; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meal_plans (id, user_id, name, description, date, workout_plan_id, created_at, updated_at, daily_calories) FROM stdin;
e9c61d53-ab30-4e2c-b2be-69658e870777	264edb21-7ff4-4525-9091-712cc5d050e6	Cardiovascular Health Plan Nutrition Plan	Nutrition plan for your Cardiovascular Health Plan. Target: 3087 calories per workout day	2025-04-29	e00227bd-64bd-4143-9d46-23e4a2d41724	2025-04-29 14:49:26.061-05	2025-04-29 14:49:26.061-05	3087
bf7f2841-b0c7-424d-b037-20d476958817	264edb21-7ff4-4525-9091-712cc5d050e6	Strength Training Plan Nutrition Plan	Nutrition plan for your Strength Training Plan. Target: 3197 calories per workout day	2025-04-30	1d6a2b84-13ee-4356-b07a-7bad7214fede	2025-04-30 14:22:26.44-05	2025-04-30 14:22:26.44-05	3197
f2bee1f9-1578-479c-a6af-a1b68204e788	264edb21-7ff4-4525-9091-712cc5d050e6	Weight Loss Plan Nutrition Plan	Nutrition plan for your Weight Loss Plan. Target: 2179 calories per workout day	2025-04-30	b8129f0d-54dd-4898-9b4e-1b56b491a234	2025-04-30 15:07:52.437-05	2025-04-30 15:07:52.437-05	2179
\.


--
-- Data for Name: meals; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meals (id, name, category, calories, protein, carbs, fats, image_url, description, food_items, created_at) FROM stdin;
ccf3ce8b-b13d-470c-b528-27bbfd1d003d	Protein Oatmeal	breakfast	350	20.00	45.00	8.00	\N	Steel-cut oats cooked with milk, protein powder, topped with berries and nuts	\N	2025-04-24 23:33:54.014-05
b3de9e4d-dc95-4fe4-8db9-e72f0e1724fb	Greek Yogurt Parfait	breakfast	280	22.00	30.00	6.00	\N	Greek yogurt layered with granola, honey, and mixed berries	\N	2025-04-24 23:33:54.023-05
224d4a47-76dc-4d85-bd9f-118ea04c5827	Avocado Toast	breakfast	320	10.00	35.00	18.00	\N	Whole grain toast topped with smashed avocado, poached egg, and red pepper flakes	\N	2025-04-24 23:33:54.028-05
3a5081cd-1e83-4cc7-bb5a-60cd86f22b7f	Protein Smoothie	breakfast	300	25.00	35.00	5.00	\N	Blend of protein powder, banana, berries, spinach, and almond milk	\N	2025-04-24 23:33:54.033-05
9754788c-6a7b-4c54-bea8-44ed831df8bf	Veggie Omelette	breakfast	340	24.00	8.00	22.00	\N	Three-egg omelette with spinach, bell peppers, onions, and feta cheese	\N	2025-04-24 23:33:54.046-05
c136bf15-c67a-4f59-8bbd-fd62fb2ca8fc	Grilled Chicken Salad	lunch	420	35.00	20.00	18.00	\N	Mixed greens topped with grilled chicken, cherry tomatoes, cucumbers, and balsamic vinaigrette	\N	2025-04-24 23:33:54.053-05
9946f401-601b-4347-9d4b-5fa5254893ab	Tuna Wrap	lunch	380	28.00	40.00	10.00	\N	Whole grain wrap filled with tuna, lettuce, tomato, and light mayo	\N	2025-04-24 23:33:54.061-05
f7ed4766-9723-4e94-9c1b-94726fad5cb6	Quinoa Bowl	lunch	450	18.00	60.00	15.00	\N	Quinoa topped with roasted vegetables, chickpeas, and tahini dressing	\N	2025-04-24 23:33:54.067-05
200559a4-8590-4a71-8420-1e2a752633fd	Turkey and Avocado Sandwich	lunch	410	25.00	45.00	16.00	\N	Whole grain bread with turkey, avocado, lettuce, tomato, and mustard	\N	2025-04-24 23:33:54.071-05
efa0d0de-a0b2-43c3-a40f-f68f948fb187	Lentil Soup	lunch	320	18.00	50.00	4.00	\N	Hearty soup with lentils, carrots, celery, onions, and tomatoes	\N	2025-04-24 23:33:54.078-05
dbbef28d-be17-4669-b908-c6fbc2736595	Grilled Salmon	dinner	480	40.00	10.00	28.00	\N	Grilled salmon fillet with steamed broccoli and brown rice	\N	2025-04-24 23:33:54.089-05
fd49c800-3567-4f9b-adf0-08785e369ef5	Chicken Stir-Fry	dinner	450	35.00	40.00	15.00	\N	Chicken breast stir-fried with mixed vegetables and served with brown rice	\N	2025-04-24 23:33:54.098-05
e874f5e8-3306-4718-92ce-09ca53b35973	Beef and Vegetable Stew	dinner	520	38.00	30.00	25.00	\N	Slow-cooked beef with carrots, potatoes, and onions in a savory broth	\N	2025-04-24 23:33:54.105-05
293fba84-3676-4a46-9d80-8bc48e286490	Baked Tofu with Vegetables	dinner	380	25.00	35.00	18.00	\N	Marinated tofu baked with assorted vegetables and quinoa	\N	2025-04-24 23:33:54.112-05
79fa1b90-12f4-4cc3-9798-09b23747d15a	Turkey Meatballs with Zucchini Noodles	dinner	410	35.00	15.00	22.00	\N	Turkey meatballs in tomato sauce served over spiralized zucchini	\N	2025-04-24 23:33:54.117-05
c85f24b1-b17b-4a71-89f9-f4bb12dd2904	Protein Bar	snack	220	20.00	25.00	7.00	\N	Protein-rich bar with nuts and dried fruits	\N	2025-04-24 23:33:54.129-05
5fd544e8-977a-4667-825c-2c3c6206017f	Apple with Almond Butter	snack	180	5.00	25.00	10.00	\N	Apple slices served with a tablespoon of almond butter	\N	2025-04-24 23:33:54.136-05
ee7fb175-c59d-45bd-8aa8-3be558d1398d	Greek Yogurt with Honey	snack	150	15.00	12.00	3.00	\N	Plain Greek yogurt drizzled with honey	\N	2025-04-24 23:33:54.143-05
a9b60880-3b47-4a36-90de-a1b90d2ee96e	Hummus with Carrots	snack	170	6.00	20.00	8.00	\N	Chickpea hummus served with carrot sticks	\N	2025-04-24 23:33:54.15-05
7708c446-562e-44c4-9b64-073a1108df92	Mixed Nuts	snack	210	8.00	8.00	18.00	\N	Assorted nuts including almonds, walnuts, and cashews	\N	2025-04-24 23:33:54.153-05
9cc61176-1357-45fd-a111-3aa222056bf8	Whey Protein Shake	Post-Workout	200	30.00	10.00	2.00	\N	Whey protein powder mixed with water or milk	\N	2025-04-24 23:33:54.157-05
4ed79777-13cc-4811-9d50-ff51fe14872b	Chocolate Milk	Post-Workout	230	10.00	30.00	8.00	\N	Low-fat chocolate milk for post-workout recovery	\N	2025-04-24 23:33:54.163-05
1027e87b-f25e-4fd3-a5e0-424c67a7f50a	Banana and Peanut Butter	Post-Workout	250	8.00	35.00	10.00	\N	Banana with a tablespoon of peanut butter	\N	2025-04-24 23:33:54.176-05
266a72d9-5b73-4afd-8385-4c4c3c6b770e	Chicken and Rice Bowl	Post-Workout	380	30.00	45.00	8.00	\N	Grilled chicken with white rice and steamed vegetables	\N	2025-04-24 23:33:54.181-05
4335b474-4ece-4aca-9a61-bf15b4a71ea2	Egg White Omelet with Toast	Post-Workout	290	25.00	30.00	6.00	\N	Egg white omelet with vegetables and whole grain toast	\N	2025-04-24 23:33:54.185-05
\.


--
-- Data for Name: progress_tracking; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.progress_tracking (id, user_id, workout_plan_id, week_number, exercises_completed, exercises_total, meals_completed, meals_total, start_date, end_date, created_at, updated_at) FROM stdin;
91ef61af-521d-411c-a6ac-4cf346386201	264edb21-7ff4-4525-9091-712cc5d050e6	b8129f0d-54dd-4898-9b4e-1b56b491a234	1	0	30	0	10	2025-04-30	2025-05-06	2025-04-30 15:08:10.281912-05	2025-05-05 20:05:33.078615-05
569a8392-490b-4acd-97de-665cb5c9b331	264edb21-7ff4-4525-9091-712cc5d050e6	1d6a2b84-13ee-4356-b07a-7bad7214fede	1	0	48	0	8	2025-04-30	2025-05-06	2025-04-30 14:22:33.215059-05	2025-05-05 20:05:33.079915-05
b381f703-a6cb-4017-af3f-565c97570435	264edb21-7ff4-4525-9091-712cc5d050e6	e00227bd-64bd-4143-9d46-23e4a2d41724	1	0	12	0	2	2025-04-29	2025-05-05	2025-04-29 14:49:56.126397-05	2025-05-05 20:05:33.082554-05
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, age, gender, weight, height, bmi, fitness_goal, dietary_preference, dietary_restrictions, avatar_url, created_at, updated_at, age_range) FROM stdin;
264edb21-7ff4-4525-9091-712cc5d050e6	dhanu	dhanusankar.im@gmai.com	$2b$10$KCjIJ4PP2g.ZJHr.MjHJquYARpLodWkcNETwFeHfkmqcVfihVUZf2	28	male	87.00	173.00	29.10	muscle_gain	keto	{}	\N	2025-04-24 23:36:37.892354-05	2025-04-29 14:41:32.622188-05	adult
cf615f8a-e01b-4277-aed5-eee7c633dc70	dhanu	dhanusankar.m@gmail.com	$2b$10$fmpmcjXKcjfnAmj7Z4RSc.mHWs7rRbTU9jOfn4/1ykpYvyFTQhu5q	28	male	87.00	173.00	29.10	fat_loss	no_restrictions	{}	\N	2025-05-05 19:44:27.837891-05	2025-05-05 19:44:27.837891-05	adult
\.


--
-- Data for Name: water_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.water_logs (id, user_id, amount_ml, logged_at, created_at) FROM stdin;
\.


--
-- Data for Name: water_tracking; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.water_tracking (id, user_id, amount_ml, tracked_date, created_at, updated_at) FROM stdin;
1a06e8b4-09f2-4984-a9da-1be363921048	264edb21-7ff4-4525-9091-712cc5d050e6	1250	2025-04-29	2025-04-29 14:50:22.971577-05	2025-04-29 14:50:25.880737-05
\.


--
-- Data for Name: weight_logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.weight_logs (id, user_id, weight, logged_at, created_at) FROM stdin;
\.


--
-- Data for Name: workout_plan_exercises; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.workout_plan_exercises (id, workout_plan_id, exercise_id, exercise_name, day_of_week, sets, reps, weight, duration, created_at, completed, completion_date, actual_sets, actual_reps, actual_weight, actual_duration, notes, updated_at) FROM stdin;
63eb1bfc-c465-46a6-a8fa-8d51f8e8907f	e00227bd-64bd-4143-9d46-23e4a2d41724	e686c5a1-dd06-4a02-b625-7a4e325025c4	Stationary Bike Intervals	1	\N	\N	\N	15	2025-04-29 14:49:25.975537-05	f	\N	\N	\N	\N	\N	\N	2025-04-29 14:49:25.975537-05
1d90a941-49d5-46db-b927-6104528ffd20	e00227bd-64bd-4143-9d46-23e4a2d41724	be2d0f2f-a1de-4198-9c76-11bd8214bea2	Treadmill Walking	1	\N	\N	\N	15	2025-04-29 14:49:25.975537-05	f	\N	\N	\N	\N	\N	\N	2025-04-29 14:49:25.975537-05
5906e11e-b26f-4f65-bac4-9ca2fccd1718	e00227bd-64bd-4143-9d46-23e4a2d41724	6c03e14a-d5d5-4338-b364-26eef0036963	Basic Plank	1	2	20	\N	\N	2025-04-29 14:49:25.975537-05	f	\N	\N	\N	\N	\N	\N	2025-04-29 14:49:25.975537-05
550fa82b-1123-471c-adff-4f45e5c1af38	e00227bd-64bd-4143-9d46-23e4a2d41724	ac65694c-9b7a-4fd3-8c54-ff2adbfe5adf	Jump Rope	1	\N	\N	\N	15	2025-04-29 14:49:25.975537-05	f	\N	\N	\N	\N	\N	\N	2025-04-29 14:49:25.975537-05
1b4eb139-2455-44c2-88aa-c233000c9f78	e00227bd-64bd-4143-9d46-23e4a2d41724	8ab97894-2b53-4203-b4e3-7f96dccd8830	Treadmill Running	1	\N	\N	\N	15	2025-04-29 14:49:25.975537-05	f	\N	\N	\N	\N	\N	\N	2025-04-29 14:49:25.975537-05
8fbf91ff-9aa3-4d9e-82e8-da6cdc7d2508	e00227bd-64bd-4143-9d46-23e4a2d41724	6c03e14a-d5d5-4338-b364-26eef0036963	Basic Plank	1	2	20	\N	\N	2025-04-29 14:49:25.975537-05	f	\N	\N	\N	\N	\N	\N	2025-04-29 14:49:25.975537-05
6ecaee62-44ed-4fdd-b83c-e55fcc496d77	e00227bd-64bd-4143-9d46-23e4a2d41724	72c7b0d5-2e2d-46aa-9715-e04392a99685	High-Intensity Interval Sprint	1	\N	\N	\N	15	2025-04-29 14:49:25.975537-05	f	\N	\N	\N	\N	\N	\N	2025-04-29 14:49:25.975537-05
7e29f685-ad2a-46da-b936-f97bd313a7c0	e00227bd-64bd-4143-9d46-23e4a2d41724	e531e2bd-152a-4fdd-acb0-f64ba0c1769e	Stationary Bike Easy Ride	1	\N	\N	\N	15	2025-04-29 14:49:25.975537-05	f	\N	\N	\N	\N	\N	\N	2025-04-29 14:49:25.975537-05
c1edab0f-5603-4946-bdb8-b7dc8f4fbbcd	e00227bd-64bd-4143-9d46-23e4a2d41724	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	1	2	20	\N	\N	2025-04-29 14:49:25.975537-05	f	\N	\N	\N	\N	\N	\N	2025-04-29 14:49:25.975537-05
89dba758-36e9-4359-a21a-1e7ddbff2b3e	e00227bd-64bd-4143-9d46-23e4a2d41724	ac65694c-9b7a-4fd3-8c54-ff2adbfe5adf	Jump Rope	1	\N	\N	\N	15	2025-04-29 14:49:25.975537-05	f	\N	\N	\N	\N	\N	\N	2025-04-29 14:49:25.975537-05
82966eb1-dc14-4173-ac9c-6344093eaa73	e00227bd-64bd-4143-9d46-23e4a2d41724	8ab97894-2b53-4203-b4e3-7f96dccd8830	Treadmill Running	1	\N	\N	\N	15	2025-04-29 14:49:25.975537-05	f	\N	\N	\N	\N	\N	\N	2025-04-29 14:49:25.975537-05
f74b368d-0ad0-456b-bc2b-0b75c1e3ae8a	e00227bd-64bd-4143-9d46-23e4a2d41724	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	1	2	20	\N	\N	2025-04-29 14:49:25.975537-05	f	\N	\N	\N	\N	\N	\N	2025-04-29 14:49:25.975537-05
c8647765-3621-4938-b444-9d8485f018f2	b8129f0d-54dd-4898-9b4e-1b56b491a234	e531e2bd-152a-4fdd-acb0-f64ba0c1769e	Stationary Bike Easy Ride	1	\N	\N	\N	20	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
43c4e8c6-c656-4f4e-8f65-c09aa4fbb515	b8129f0d-54dd-4898-9b4e-1b56b491a234	6c03e14a-d5d5-4338-b364-26eef0036963	Basic Plank	1	3	15	\N	\N	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
e9cdc8d2-a2dc-493b-81c9-61b7a3748f4a	b8129f0d-54dd-4898-9b4e-1b56b491a234	ac65694c-9b7a-4fd3-8c54-ff2adbfe5adf	Jump Rope	2	\N	\N	\N	20	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
ec724f47-acc9-4134-9f68-5f1de666d280	b8129f0d-54dd-4898-9b4e-1b56b491a234	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	2	3	15	\N	\N	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
49dcc9ad-de08-4e77-be2f-2ba534dc75ea	b8129f0d-54dd-4898-9b4e-1b56b491a234	ac65694c-9b7a-4fd3-8c54-ff2adbfe5adf	Jump Rope	3	\N	\N	\N	20	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
0bb74476-3be4-4544-aba3-a44d17a570f2	b8129f0d-54dd-4898-9b4e-1b56b491a234	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	3	3	15	\N	\N	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
c7f09a6e-fe35-4a05-8d0b-9294b808668c	b8129f0d-54dd-4898-9b4e-1b56b491a234	e531e2bd-152a-4fdd-acb0-f64ba0c1769e	Stationary Bike Easy Ride	4	\N	\N	\N	20	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
ffa8f6c0-a377-4764-866a-54a0d4a98058	b8129f0d-54dd-4898-9b4e-1b56b491a234	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	4	3	15	\N	\N	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
5d67e3ba-0739-4148-ba09-a629c5f7925f	b8129f0d-54dd-4898-9b4e-1b56b491a234	72c7b0d5-2e2d-46aa-9715-e04392a99685	High-Intensity Interval Sprint	5	\N	\N	\N	20	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
8420d7cd-e987-495e-b619-90a7d1c71d7a	b8129f0d-54dd-4898-9b4e-1b56b491a234	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	5	3	15	\N	\N	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
7f3ad9f9-ebf7-4a0e-a801-af11637675f0	b8129f0d-54dd-4898-9b4e-1b56b491a234	8ab97894-2b53-4203-b4e3-7f96dccd8830	Treadmill Running	1	\N	\N	\N	20	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
ced6f95a-1d48-4566-9b81-21516ff85c03	b8129f0d-54dd-4898-9b4e-1b56b491a234	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	1	3	15	\N	\N	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
c4ca994f-9585-4412-b60b-f164abe06510	b8129f0d-54dd-4898-9b4e-1b56b491a234	be2d0f2f-a1de-4198-9c76-11bd8214bea2	Treadmill Walking	2	\N	\N	\N	20	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
d1e1f58c-a7ec-421c-97ce-688d0e29fbca	b8129f0d-54dd-4898-9b4e-1b56b491a234	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	2	3	15	\N	\N	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
9dd1c5b9-99bb-48ea-b7df-89f7084671a5	b8129f0d-54dd-4898-9b4e-1b56b491a234	be2d0f2f-a1de-4198-9c76-11bd8214bea2	Treadmill Walking	3	\N	\N	\N	20	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
c5959458-2a09-44bc-addc-d6f9f85b0641	b8129f0d-54dd-4898-9b4e-1b56b491a234	6c03e14a-d5d5-4338-b364-26eef0036963	Basic Plank	3	3	15	\N	\N	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
747447d4-9a76-4e36-a2b0-fd0c2bd88278	b8129f0d-54dd-4898-9b4e-1b56b491a234	be2d0f2f-a1de-4198-9c76-11bd8214bea2	Treadmill Walking	4	\N	\N	\N	20	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
010e1504-d67d-424b-9ad7-38fe45e047d9	b8129f0d-54dd-4898-9b4e-1b56b491a234	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	4	3	15	\N	\N	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
00f63cec-568c-4bca-a111-3b731058e25c	b8129f0d-54dd-4898-9b4e-1b56b491a234	be2d0f2f-a1de-4198-9c76-11bd8214bea2	Treadmill Walking	5	\N	\N	\N	20	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
f9b0c5c8-1f90-4579-ad14-cae0f28ee08f	b8129f0d-54dd-4898-9b4e-1b56b491a234	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	5	3	15	\N	\N	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
71cfb393-7374-4eb9-97b7-16b261996432	b8129f0d-54dd-4898-9b4e-1b56b491a234	ac65694c-9b7a-4fd3-8c54-ff2adbfe5adf	Jump Rope	1	\N	\N	\N	20	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
b37ba0c5-f161-48e8-a9d7-d2ca9a12a038	b8129f0d-54dd-4898-9b4e-1b56b491a234	6c03e14a-d5d5-4338-b364-26eef0036963	Basic Plank	1	3	15	\N	\N	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
c7aa0146-ad7d-4227-9a59-b071a71d49d7	b8129f0d-54dd-4898-9b4e-1b56b491a234	be2d0f2f-a1de-4198-9c76-11bd8214bea2	Treadmill Walking	2	\N	\N	\N	20	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
6763186b-03d8-4e24-a747-2ac8aefd3efd	b8129f0d-54dd-4898-9b4e-1b56b491a234	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	2	3	15	\N	\N	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
d7946382-faa4-4eed-8710-8672c3130512	b8129f0d-54dd-4898-9b4e-1b56b491a234	ac65694c-9b7a-4fd3-8c54-ff2adbfe5adf	Jump Rope	3	\N	\N	\N	20	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
942a5c12-e0fc-4b02-a1d5-c11eb2f04f01	b8129f0d-54dd-4898-9b4e-1b56b491a234	6c03e14a-d5d5-4338-b364-26eef0036963	Basic Plank	3	3	15	\N	\N	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
f89ac210-1926-4f4b-b1da-7988d3bcb350	b8129f0d-54dd-4898-9b4e-1b56b491a234	ac65694c-9b7a-4fd3-8c54-ff2adbfe5adf	Jump Rope	4	\N	\N	\N	20	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
1555f7cc-3e13-4511-b3ee-49c13fba18a3	b8129f0d-54dd-4898-9b4e-1b56b491a234	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	4	3	15	\N	\N	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
d3448acb-dfb9-4d82-b889-014d4d0dbb58	b8129f0d-54dd-4898-9b4e-1b56b491a234	be2d0f2f-a1de-4198-9c76-11bd8214bea2	Treadmill Walking	5	\N	\N	\N	20	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
ba76d1ba-bb2f-46e0-a233-ca850fadde96	b8129f0d-54dd-4898-9b4e-1b56b491a234	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	5	3	15	\N	\N	2025-04-30 15:07:52.232833-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 15:07:52.232833-05
35f9dc49-dcd9-4caf-9e56-abaaa5b052ee	1d6a2b84-13ee-4356-b07a-7bad7214fede	2eebe150-220f-441b-b674-3a5a8a05dcfb	Dumbbell Row	1	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
aafa6644-9f7c-4a38-9e95-fa600f6d6ce4	1d6a2b84-13ee-4356-b07a-7bad7214fede	6af7da2d-d43c-4546-8d06-00dd9de56e7a	Dumbbell Bench Press	1	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
9b98157b-0372-4f73-bc7e-a21a68138a28	1d6a2b84-13ee-4356-b07a-7bad7214fede	22e4c954-0f1e-4c0a-8ec2-d620ba3388a8	Barbell Clean and Jerk	1	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
a91e0a47-2c7a-43fa-aa1e-e557bb073a08	1d6a2b84-13ee-4356-b07a-7bad7214fede	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	1	3	15	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
e239111d-fb40-4909-8c7e-d4698a96dfb3	1d6a2b84-13ee-4356-b07a-7bad7214fede	89ea9b62-3a6c-4422-a849-9b04445111b3	Resistance Band Rows	2	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
c9d2370f-e555-4119-9ff2-283d3c5900b1	1d6a2b84-13ee-4356-b07a-7bad7214fede	b7a6c92f-a1cc-4be3-94a0-452bea02e93c	Barbell Bench Press	2	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
64c376d8-9c76-4a8c-b917-0af8d6fd03be	1d6a2b84-13ee-4356-b07a-7bad7214fede	8bdf512a-5342-4080-ad50-8151b5b1f43c	Kettlebell Swings	2	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
95fecc7d-44f9-4020-925a-e4baaaa2949a	1d6a2b84-13ee-4356-b07a-7bad7214fede	6c03e14a-d5d5-4338-b364-26eef0036963	Basic Plank	2	3	15	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
9c0e7275-a5b7-41b0-a034-00153bf42e8c	1d6a2b84-13ee-4356-b07a-7bad7214fede	b7a6c92f-a1cc-4be3-94a0-452bea02e93c	Barbell Bench Press	3	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
aa7d5207-2e19-42f6-b4f1-243303b31229	1d6a2b84-13ee-4356-b07a-7bad7214fede	4a802777-6b7a-4f30-a065-95edbc5828a1	Push-ups	3	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
b8824cc8-773a-439a-92ae-971eb9556114	1d6a2b84-13ee-4356-b07a-7bad7214fede	2eebe150-220f-441b-b674-3a5a8a05dcfb	Dumbbell Row	3	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
5bb1c45c-1ba5-439f-899f-e17d1b48a32f	1d6a2b84-13ee-4356-b07a-7bad7214fede	6c03e14a-d5d5-4338-b364-26eef0036963	Basic Plank	3	3	15	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
24f89cd1-be60-49ae-8bb9-5b00400bd270	1d6a2b84-13ee-4356-b07a-7bad7214fede	22e4c954-0f1e-4c0a-8ec2-d620ba3388a8	Barbell Clean and Jerk	4	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
78b1e497-3034-442a-8946-a4b7c99ebbb9	1d6a2b84-13ee-4356-b07a-7bad7214fede	4762513d-818f-49cc-980b-301ff0b37431	Bodyweight Squat	4	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
97d95858-8c75-41f7-85a9-616c8e52cfd9	1d6a2b84-13ee-4356-b07a-7bad7214fede	4a802777-6b7a-4f30-a065-95edbc5828a1	Push-ups	4	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
1c2d0da2-7f86-4dd5-b774-411aad68b83a	1d6a2b84-13ee-4356-b07a-7bad7214fede	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	4	3	15	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
d199f2c5-31be-4d01-95c9-db5adbf02f10	1d6a2b84-13ee-4356-b07a-7bad7214fede	4762513d-818f-49cc-980b-301ff0b37431	Bodyweight Squat	1	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
5adff8ca-8cfd-44b1-a468-b1dab95c824c	1d6a2b84-13ee-4356-b07a-7bad7214fede	4a802777-6b7a-4f30-a065-95edbc5828a1	Push-ups	1	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
753d8894-e158-48b2-8000-dea6c37d3a1b	1d6a2b84-13ee-4356-b07a-7bad7214fede	407a05bd-d244-475e-a680-929b27b9f51f	Walking Lunges	1	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
1e8d040a-3871-4c39-ad9e-dd5e2eab9feb	1d6a2b84-13ee-4356-b07a-7bad7214fede	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	1	3	15	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
d97fb026-e058-4445-9218-3e1f0e8eafa3	1d6a2b84-13ee-4356-b07a-7bad7214fede	4762513d-818f-49cc-980b-301ff0b37431	Bodyweight Squat	2	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
00f43ee7-1a52-4387-8020-3bd1c4d887ff	1d6a2b84-13ee-4356-b07a-7bad7214fede	6af7da2d-d43c-4546-8d06-00dd9de56e7a	Dumbbell Bench Press	2	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
76870f31-8eea-4eb8-8a2d-9f9fc384354b	1d6a2b84-13ee-4356-b07a-7bad7214fede	4a802777-6b7a-4f30-a065-95edbc5828a1	Push-ups	2	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
0acaccdb-d8d9-4e03-a85c-7dacf6142a6b	1d6a2b84-13ee-4356-b07a-7bad7214fede	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	2	3	15	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
d824bd96-7d60-43ba-9f45-ffc906042532	1d6a2b84-13ee-4356-b07a-7bad7214fede	4762513d-818f-49cc-980b-301ff0b37431	Bodyweight Squat	3	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
d702798f-f5fa-46fb-936c-e6ba6c52400e	1d6a2b84-13ee-4356-b07a-7bad7214fede	4a802777-6b7a-4f30-a065-95edbc5828a1	Push-ups	3	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
7adfc781-3a3f-47a2-952d-c8613ebd4213	1d6a2b84-13ee-4356-b07a-7bad7214fede	39abc370-f4d6-448d-a30c-758a32497816	Weighted Pull-ups	3	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
819599c4-2e4f-4cbf-9891-751ae66c9c60	1d6a2b84-13ee-4356-b07a-7bad7214fede	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	3	3	15	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
f607fe9c-acd1-4c6d-aac5-db63f826728d	1d6a2b84-13ee-4356-b07a-7bad7214fede	407a05bd-d244-475e-a680-929b27b9f51f	Walking Lunges	4	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
26512bff-2ed2-47f1-8023-0a155d4eeca3	1d6a2b84-13ee-4356-b07a-7bad7214fede	b7a6c92f-a1cc-4be3-94a0-452bea02e93c	Barbell Bench Press	4	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
f76b1f11-6eff-48f3-a385-cdc46544943d	1d6a2b84-13ee-4356-b07a-7bad7214fede	39abc370-f4d6-448d-a30c-758a32497816	Weighted Pull-ups	4	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
89960389-83a0-4991-acab-964af6d8dbd4	1d6a2b84-13ee-4356-b07a-7bad7214fede	6c03e14a-d5d5-4338-b364-26eef0036963	Basic Plank	4	3	15	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
975ae8f6-4a31-424f-8355-01d5767c96f1	1d6a2b84-13ee-4356-b07a-7bad7214fede	89ea9b62-3a6c-4422-a849-9b04445111b3	Resistance Band Rows	1	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
5c4c1f70-8684-434c-8261-6debd24a80fa	1d6a2b84-13ee-4356-b07a-7bad7214fede	b6de198d-4d40-4cd3-ba85-b9a0adc6019e	Barbell Squat	1	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
fad5bc3f-7dd4-4c0e-8b10-169e14969f47	1d6a2b84-13ee-4356-b07a-7bad7214fede	4762513d-818f-49cc-980b-301ff0b37431	Bodyweight Squat	1	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
3ebdcdfb-81ec-4ccd-a71d-71f57d1fe6f4	1d6a2b84-13ee-4356-b07a-7bad7214fede	6c03e14a-d5d5-4338-b364-26eef0036963	Basic Plank	1	3	15	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
cabe7965-e62f-4c99-ad04-a379d9aeacaa	1d6a2b84-13ee-4356-b07a-7bad7214fede	407a05bd-d244-475e-a680-929b27b9f51f	Walking Lunges	2	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
d3773366-1d79-4440-8930-46142175e777	1d6a2b84-13ee-4356-b07a-7bad7214fede	b6de198d-4d40-4cd3-ba85-b9a0adc6019e	Barbell Squat	2	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
a5b187c0-e75e-4493-a3d8-ce8fc1488c5a	1d6a2b84-13ee-4356-b07a-7bad7214fede	39abc370-f4d6-448d-a30c-758a32497816	Weighted Pull-ups	2	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
a0bee102-73fc-4079-b146-cc9b6739e540	1d6a2b84-13ee-4356-b07a-7bad7214fede	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	2	3	15	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
7b2adc2a-72b7-46dc-9104-c0604308095a	1d6a2b84-13ee-4356-b07a-7bad7214fede	39abc370-f4d6-448d-a30c-758a32497816	Weighted Pull-ups	3	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
9b8bd888-732d-451e-a150-bd07001108a2	1d6a2b84-13ee-4356-b07a-7bad7214fede	4762513d-818f-49cc-980b-301ff0b37431	Bodyweight Squat	3	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
80869733-22ae-43a4-9e2a-4fed26e3eeca	1d6a2b84-13ee-4356-b07a-7bad7214fede	4a802777-6b7a-4f30-a065-95edbc5828a1	Push-ups	3	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
4b1f455d-f230-484b-b437-fb5ec4849425	1d6a2b84-13ee-4356-b07a-7bad7214fede	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	3	3	15	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
2ff7ea22-a6c9-4dde-973c-ab80c662e59b	1d6a2b84-13ee-4356-b07a-7bad7214fede	b6de198d-4d40-4cd3-ba85-b9a0adc6019e	Barbell Squat	4	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
3b42dae1-10d5-4c25-af95-99f0195754e5	1d6a2b84-13ee-4356-b07a-7bad7214fede	39abc370-f4d6-448d-a30c-758a32497816	Weighted Pull-ups	4	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
7b2d864f-8e85-452c-84c1-01f6c93ab6c1	1d6a2b84-13ee-4356-b07a-7bad7214fede	407a05bd-d244-475e-a680-929b27b9f51f	Walking Lunges	4	3	10	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
9b01335b-cd03-4fae-80d8-6441477703e8	1d6a2b84-13ee-4356-b07a-7bad7214fede	59e2abc3-550b-49cf-9a2d-afff4ddf99d0	Seated Bicycle Crunches	4	3	15	\N	\N	2025-04-30 14:22:25.867267-05	f	\N	\N	\N	\N	\N	\N	2025-04-30 14:22:25.867267-05
\.


--
-- Data for Name: workout_plans; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.workout_plans (id, user_id, name, description, goal, frequency, duration_weeks, active, created_at, updated_at) FROM stdin;
e00227bd-64bd-4143-9d46-23e4a2d41724	264edb21-7ff4-4525-9091-712cc5d050e6	Cardiovascular Health Plan	4-week Cardiovascular Health program, 1 times per week	cardiovascular_health	1	4	t	2025-04-29 14:49:25.975537-05	2025-04-29 14:49:25.975537-05
1d6a2b84-13ee-4356-b07a-7bad7214fede	264edb21-7ff4-4525-9091-712cc5d050e6	Strength Training Plan	3-week Strength Training program, 4 times per week	muscle_gain	4	3	t	2025-04-30 14:22:25.867267-05	2025-04-30 14:22:25.867267-05
b8129f0d-54dd-4898-9b4e-1b56b491a234	264edb21-7ff4-4525-9091-712cc5d050e6	Weight Loss Plan	3-week Weight Loss program, 5 times per week	fat_loss	5	3	t	2025-04-30 15:07:52.232833-05	2025-04-30 15:07:52.232833-05
\.


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: exercise_logs exercise_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exercise_logs
    ADD CONSTRAINT exercise_logs_pkey PRIMARY KEY (id);


--
-- Name: exercises exercises_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exercises
    ADD CONSTRAINT exercises_pkey PRIMARY KEY (id);


--
-- Name: meal_logs meal_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meal_logs
    ADD CONSTRAINT meal_logs_pkey PRIMARY KEY (id);


--
-- Name: meal_plan_items meal_plan_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meal_plan_items
    ADD CONSTRAINT meal_plan_items_pkey PRIMARY KEY (id);


--
-- Name: meal_plans meal_plans_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meal_plans
    ADD CONSTRAINT meal_plans_pkey PRIMARY KEY (id);


--
-- Name: meals meals_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meals
    ADD CONSTRAINT meals_pkey PRIMARY KEY (id);


--
-- Name: progress_tracking progress_tracking_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.progress_tracking
    ADD CONSTRAINT progress_tracking_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: water_logs water_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.water_logs
    ADD CONSTRAINT water_logs_pkey PRIMARY KEY (id);


--
-- Name: water_tracking water_tracking_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.water_tracking
    ADD CONSTRAINT water_tracking_pkey PRIMARY KEY (id);


--
-- Name: water_tracking water_tracking_user_id_tracked_date_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.water_tracking
    ADD CONSTRAINT water_tracking_user_id_tracked_date_key UNIQUE (user_id, tracked_date);


--
-- Name: weight_logs weight_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.weight_logs
    ADD CONSTRAINT weight_logs_pkey PRIMARY KEY (id);


--
-- Name: workout_plan_exercises workout_plan_exercises_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workout_plan_exercises
    ADD CONSTRAINT workout_plan_exercises_pkey PRIMARY KEY (id);


--
-- Name: workout_plans workout_plans_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workout_plans
    ADD CONSTRAINT workout_plans_pkey PRIMARY KEY (id);


--
-- Name: idx_meal_plan_items_meal_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_meal_plan_items_meal_id ON public.meal_plan_items USING btree (meal_id);


--
-- Name: idx_meal_plan_items_meal_plan_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_meal_plan_items_meal_plan_id ON public.meal_plan_items USING btree (meal_plan_id);


--
-- Name: idx_meal_plans_workout_plan_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_meal_plans_workout_plan_id ON public.meal_plans USING btree (workout_plan_id);


--
-- Name: idx_progress_tracking_user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_progress_tracking_user_id ON public.progress_tracking USING btree (user_id);


--
-- Name: idx_progress_tracking_workout_plan_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_progress_tracking_workout_plan_id ON public.progress_tracking USING btree (workout_plan_id);


--
-- Name: idx_workout_plan_exercises_workout_plan_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_workout_plan_exercises_workout_plan_id ON public.workout_plan_exercises USING btree (workout_plan_id);


--
-- Name: users_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);


--
-- Name: water_tracking_user_date_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX water_tracking_user_date_idx ON public.water_tracking USING btree (user_id, tracked_date);


--
-- Name: exercise_logs exercise_logs_exercise_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exercise_logs
    ADD CONSTRAINT exercise_logs_exercise_id_fkey FOREIGN KEY (exercise_id) REFERENCES public.exercises(id);


--
-- Name: exercise_logs exercise_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exercise_logs
    ADD CONSTRAINT exercise_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: meal_logs meal_logs_meal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meal_logs
    ADD CONSTRAINT meal_logs_meal_id_fkey FOREIGN KEY (meal_id) REFERENCES public.meals(id);


--
-- Name: meal_logs meal_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meal_logs
    ADD CONSTRAINT meal_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: meal_plan_items meal_plan_items_meal_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meal_plan_items
    ADD CONSTRAINT meal_plan_items_meal_id_fkey FOREIGN KEY (meal_id) REFERENCES public.meals(id);


--
-- Name: meal_plan_items meal_plan_items_meal_plan_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meal_plan_items
    ADD CONSTRAINT meal_plan_items_meal_plan_id_fkey FOREIGN KEY (meal_plan_id) REFERENCES public.meal_plans(id) ON DELETE CASCADE;


--
-- Name: meal_plans meal_plans_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meal_plans
    ADD CONSTRAINT meal_plans_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: meal_plans meal_plans_workout_plan_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meal_plans
    ADD CONSTRAINT meal_plans_workout_plan_id_fkey FOREIGN KEY (workout_plan_id) REFERENCES public.workout_plans(id) ON DELETE SET NULL;


--
-- Name: progress_tracking progress_tracking_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.progress_tracking
    ADD CONSTRAINT progress_tracking_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: progress_tracking progress_tracking_workout_plan_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.progress_tracking
    ADD CONSTRAINT progress_tracking_workout_plan_id_fkey FOREIGN KEY (workout_plan_id) REFERENCES public.workout_plans(id) ON DELETE CASCADE;


--
-- Name: water_logs water_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.water_logs
    ADD CONSTRAINT water_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: water_tracking water_tracking_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.water_tracking
    ADD CONSTRAINT water_tracking_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: weight_logs weight_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.weight_logs
    ADD CONSTRAINT weight_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: workout_plan_exercises workout_plan_exercises_exercise_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workout_plan_exercises
    ADD CONSTRAINT workout_plan_exercises_exercise_id_fkey FOREIGN KEY (exercise_id) REFERENCES public.exercises(id);


--
-- Name: workout_plan_exercises workout_plan_exercises_workout_plan_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workout_plan_exercises
    ADD CONSTRAINT workout_plan_exercises_workout_plan_id_fkey FOREIGN KEY (workout_plan_id) REFERENCES public.workout_plans(id) ON DELETE CASCADE;


--
-- Name: workout_plans workout_plans_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.workout_plans
    ADD CONSTRAINT workout_plans_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

