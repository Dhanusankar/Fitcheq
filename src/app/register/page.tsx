'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [dietaryPreference, setDietaryPreference] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([]);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Calculate BMI when weight and height change
  const calculateBMI = () => {
    if (!weight || !height) return null;
    const weightKg = parseFloat(weight);
    const heightM = parseFloat(height) / 100; // Convert cm to m
    if (weightKg > 0 && heightM > 0) {
      return (weightKg / (heightM * heightM)).toFixed(1);
    }
    return null;
  };

  const bmi = calculateBMI();

  const dietaryOptions = [
    { value: 'no_restrictions', label: 'No specific diet' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'pescatarian', label: 'Pescatarian' },
    { value: 'keto', label: 'Ketogenic' },
    { value: 'paleo', label: 'Paleo' },
    { value: 'mediterranean', label: 'Mediterranean' },
  ];

  const restrictionOptions = [
    { value: 'gluten', label: 'Gluten-Free' },
    { value: 'lactose', label: 'Lactose-Free' },
    { value: 'nuts', label: 'Nut Allergy' },
    { value: 'shellfish', label: 'Shellfish Allergy' },
    { value: 'soy', label: 'Soy-Free' },
    { value: 'low_sugar', label: 'Low Sugar' },
    { value: 'low_salt', label: 'Low Salt' },
  ];

  const handleRestrictionChange = (value: string) => {
    if (dietaryRestrictions.includes(value)) {
      setDietaryRestrictions(dietaryRestrictions.filter(v => v !== value));
    } else {
      setDietaryRestrictions([...dietaryRestrictions, value]);
    }
  };

  const nextStep = () => {
    // If moving from step 2 to step 3, validate age
    if (currentStep === 2) {
      const ageValue = parseInt(age);
      if (isNaN(ageValue) || ageValue < 18 || ageValue > 70) {
        setError('Age must be between 18 and 70 years old.');
        return;
      }
    }
    
    setError(''); // Clear any errors
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    const ageValue = parseInt(age);
    if (isNaN(ageValue) || ageValue < 18 || ageValue > 70) {
      setError('Age must be between 18 and 70 years old.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          age: parseInt(age),
          gender,
          weight: parseFloat(weight),
          height: parseFloat(height),
          bmi: bmi ? parseFloat(bmi) : null,
          fitness_goal: fitnessGoal,
          dietary_preference: dietaryPreference,
          dietary_restrictions: dietaryRestrictions,
          avatar_url: avatarUrl,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      // Redirect to login page after successful registration
      router.push('/login?registered=true');
    } catch (error) {
      console.error('Registration error:', error);
      setError(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="w-full max-w-lg space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create Your Fitness Tracker Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              sign in to your account
            </Link>
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="rounded-md shadow-sm space-y-4">
              <div className="text-center mb-6">
                <span className="inline-block w-8 h-8 bg-indigo-600 text-white rounded-full text-center font-bold leading-8">1</span>
                <span className="mx-2 text-gray-400">/</span>
                <span className="inline-block w-8 h-8 bg-gray-200 text-gray-500 rounded-full text-center font-bold leading-8">2</span>
                <span className="mx-2 text-gray-400">/</span>
                <span className="inline-block w-8 h-8 bg-gray-200 text-gray-500 rounded-full text-center font-bold leading-8">3</span>
                <h3 className="text-xl font-semibold mt-2">Account Details</h3>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="relative block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="relative block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="relative block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="relative block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={nextStep}
                  className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-3 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="rounded-md shadow-sm space-y-4">
              <div className="text-center mb-6">
                <span className="inline-block w-8 h-8 bg-green-600 text-white rounded-full text-center font-bold leading-8">✓</span>
                <span className="mx-2 text-gray-400">/</span>
                <span className="inline-block w-8 h-8 bg-indigo-600 text-white rounded-full text-center font-bold leading-8">2</span>
                <span className="mx-2 text-gray-400">/</span>
                <span className="inline-block w-8 h-8 bg-gray-200 text-gray-500 rounded-full text-center font-bold leading-8">3</span>
                <h3 className="text-xl font-semibold mt-2">Physical Information</h3>
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  min="18"
                  max="70"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="relative block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  placeholder="30"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Must be between 18 and 70 years old.
                </p>
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="relative block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                  Weight (kg)
                </label>
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  step="0.1"
                  min="30"
                  max="300"
                  required
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="relative block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  placeholder="70"
                />
              </div>

              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                  Height (cm)
                </label>
                <input
                  id="height"
                  name="height"
                  type="number"
                  step="0.1"
                  min="100"
                  max="250"
                  required
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="relative block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  placeholder="175"
                />
              </div>

              {bmi && (
                <div className="p-3 bg-blue-50 rounded-md">
                  <p className="text-sm text-blue-800">
                    Your BMI: <span className="font-semibold">{bmi}</span>
                  </p>
                </div>
              )}

              <div className="pt-4 flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="group relative flex w-full justify-center rounded-md bg-gray-200 py-3 px-3 text-sm font-semibold text-gray-700 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-3 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="rounded-md shadow-sm space-y-4">
              <div className="text-center mb-6">
                <span className="inline-block w-8 h-8 bg-green-600 text-white rounded-full text-center font-bold leading-8">✓</span>
                <span className="mx-2 text-gray-400">/</span>
                <span className="inline-block w-8 h-8 bg-green-600 text-white rounded-full text-center font-bold leading-8">✓</span>
                <span className="mx-2 text-gray-400">/</span>
                <span className="inline-block w-8 h-8 bg-indigo-600 text-white rounded-full text-center font-bold leading-8">3</span>
                <h3 className="text-xl font-semibold mt-2">Fitness Goals & Preferences</h3>
              </div>

              <div>
                <label htmlFor="fitnessGoal" className="block text-sm font-medium text-gray-700">
                  Primary Fitness Goal
                </label>
                <select
                  id="fitnessGoal"
                  name="fitnessGoal"
                  required
                  value={fitnessGoal}
                  onChange={(e) => setFitnessGoal(e.target.value)}
                  className="relative block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option value="">Select your primary goal</option>
                  <option value="muscle_gain">Muscle Gain</option>
                  <option value="fat_loss">Fat Loss</option>
                  <option value="cardiovascular">Improve Cardiovascular Health</option>
                  <option value="strength">Increase Strength</option>
                  <option value="endurance">Build Endurance</option>
                  <option value="flexibility">Improve Flexibility</option>
                  <option value="general">General Fitness & Wellbeing</option>
                </select>
              </div>

              <div>
                <label htmlFor="dietaryPreference" className="block text-sm font-medium text-gray-700">
                  Dietary Preference
                </label>
                <select
                  id="dietaryPreference"
                  name="dietaryPreference"
                  value={dietaryPreference}
                  onChange={(e) => setDietaryPreference(e.target.value)}
                  className="relative block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option value="">Select your dietary preference</option>
                  {dietaryOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dietary Restrictions (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {restrictionOptions.map(option => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`restriction-${option.value}`}
                        name="dietaryRestrictions"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={dietaryRestrictions.includes(option.value)}
                        onChange={() => handleRestrictionChange(option.value)}
                      />
                      <label htmlFor={`restriction-${option.value}`} className="ml-2 text-sm text-gray-700">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="group relative flex w-full justify-center rounded-md bg-gray-200 py-3 px-3 text-sm font-semibold text-gray-700 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-3 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300"
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
} 