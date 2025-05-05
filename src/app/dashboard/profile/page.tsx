'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';

// Add validation types
type ValidationErrors = {
  [key: string]: string;
};

export default function ProfilePage() {
  const { data: session, status, update: updateSession } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    fitness_goal: '',
    dietary_preference: '',
    dietary_restrictions: [] as string[]
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [bmi, setBmi] = useState<number | null>(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/login');
      return;
    }

    if (status === 'authenticated' && session?.user) {
      fetchProfileData();
    } else if (status === 'loading' && loading) {
      // If still loading after 15 seconds, stop the loading state to prevent the UI from being stuck
      const timeout = setTimeout(() => {
        console.log('Session loading timed out');
        setLoading(false);
        toast.error('Failed to load session. Please refresh the page.');
      }, 15000);
      
      return () => clearTimeout(timeout);
    }
  }, [status, session, router]);

  // Calculate BMI whenever weight or height changes
  useEffect(() => {
    if (formData.weight && formData.height) {
      const weightNum = parseFloat(formData.weight);
      const heightNum = parseFloat(formData.height);
      if (!isNaN(weightNum) && !isNaN(heightNum) && heightNum > 0) {
        const bmiValue = weightNum / Math.pow(heightNum / 100, 2);
        setBmi(parseFloat(bmiValue.toFixed(1)));
      } else {
        setBmi(null);
      }
    } else {
      setBmi(null);
    }
  }, [formData.weight, formData.height]);

  const fetchProfileData = async () => {
    try {
      // Create a timeout promise to prevent hanging
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timed out')), 10000);
      });
      
      // Attempt to fetch the profile data with a timeout
      const fetchPromise = fetch('/api/profile');
      const response = await Promise.race([fetchPromise, timeoutPromise]) as Response;
      
      if (!response.ok) {
        throw new Error('Failed to fetch profile data');
      }
      
      const data = await response.json();
      
      setFormData({
        name: data.name || '',
        age: data.age?.toString() || '',
        gender: data.gender || '',
        weight: data.weight?.toString() || '',
        height: data.height?.toString() || '',
        fitness_goal: data.fitness_goal || '',
        dietary_preference: data.dietary_preference || '',
        dietary_restrictions: data.dietary_restrictions || []
      });
      
      if (data.bmi) {
        setBmi(parseFloat(data.bmi));
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast.error('Failed to load profile data. Please refresh the page.');
      
      // Set default empty values to prevent the page from being stuck in loading state
      setFormData({
        name: '',
        age: '',
        gender: '',
        weight: '',
        height: '',
        fitness_goal: '',
        dietary_preference: '',
        dietary_restrictions: []
      });
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (formData.age) {
      const age = parseInt(formData.age);
      if (isNaN(age) || age < 1 || age > 120) {
        newErrors.age = 'Age must be between 1 and 120';
      }
    }

    if (formData.weight) {
      const weight = parseFloat(formData.weight);
      if (isNaN(weight) || weight < 20 || weight > 300) {
        newErrors.weight = 'Weight must be between 20 and 300 kg';
      }
    }

    if (formData.height) {
      const height = parseFloat(formData.height);
      if (isNaN(height) || height < 100 || height > 250) {
        newErrors.height = 'Height must be between 100 and 250 cm';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please correct the errors in the form');
      return;
    }

    setSaving(true);

    try {
      // Format the data before sending
      const dataToSend = {
        ...formData,
        age: formData.age ? parseInt(formData.age) : null,
        weight: formData.weight ? parseFloat(formData.weight) : null,
        height: formData.height ? parseFloat(formData.height) : null,
      };

      // Use a simple, reliable approach to fetch data
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedData = await response.json();
      
      // Show success toast
      toast.success('Profile updated successfully!');
      
      // Then update the session with the correct format
      try {
        await updateSession({
          user: {
            ...session?.user,
            name: updatedData.name,
            age: updatedData.age,
            gender: updatedData.gender,
            weight: updatedData.weight,
            height: updatedData.height,
            bmi: updatedData.bmi,
            fitness_goal: updatedData.fitness_goal,
            dietary_preference: updatedData.dietary_preference,
            dietary_restrictions: updatedData.dietary_restrictions
          }
        });
        console.log('Session updated successfully with new fitness goal:', updatedData.fitness_goal);
      } catch (sessionError) {
        console.error('Error updating session:', sessionError);
        // Don't show error to user since profile was successfully saved
      }
      
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleDietaryRestrictionChange = (restriction: string) => {
    setFormData(prev => {
      const restrictions = prev.dietary_restrictions || [];
      if (restrictions.includes(restriction)) {
        return {
          ...prev,
          dietary_restrictions: restrictions.filter(r => r !== restriction)
        };
      } else {
        return {
          ...prev,
          dietary_restrictions: [...restrictions, restriction]
        };
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
            <Link 
              href="/dashboard" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center"
            >
              <span className="mr-1">←</span> Back to Dashboard
            </Link>
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
          <Link 
            href="/dashboard" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center"
          >
            <span className="mr-1">←</span> Back to Dashboard
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                }`}
                required
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                    errors.age ? 'border-red-300' : 'border-gray-300'
                  }`}
                  min="1"
                  max="120"
                />
                {errors.age && (
                  <p className="mt-1 text-sm text-red-600">{errors.age}</p>
                )}
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer_not_to_say">Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>

          {/* Physical Measurements */}
          <div className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold text-gray-900">Physical Measurements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                    errors.weight ? 'border-red-300' : 'border-gray-300'
                  }`}
                  step="0.1"
                  min="20"
                  max="300"
                />
                {errors.weight && (
                  <p className="mt-1 text-sm text-red-600">{errors.weight}</p>
                )}
              </div>

              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height (cm)</label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                    errors.height ? 'border-red-300' : 'border-gray-300'
                  }`}
                  step="0.1"
                  min="100"
                  max="250"
                />
                {errors.height && (
                  <p className="mt-1 text-sm text-red-600">{errors.height}</p>
                )}
              </div>
            </div>

            {/* BMI Display */}
            {bmi !== null && (
              <div className="mt-2 p-3 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600">
                  Your BMI: <span className="font-semibold">{bmi}</span>
                  <span className="ml-2 text-xs">
                    ({bmi < 18.5 ? 'Underweight' : 
                      bmi < 25 ? 'Normal weight' : 
                      bmi < 30 ? 'Overweight' : 'Obese'})
                  </span>
                </p>
              </div>
            )}
          </div>

          {/* Fitness Goals */}
          <div className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold text-gray-900">Fitness Goals</h2>
            
            <div>
              <label htmlFor="fitness_goal" className="block text-sm font-medium text-gray-700">Primary Goal</label>
              <select
                id="fitness_goal"
                name="fitness_goal"
                value={formData.fitness_goal}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select goal</option>
                <option value="weight_loss">Weight Loss</option>
                <option value="muscle_gain">Muscle Gain</option>
                <option value="maintenance">Maintenance</option>
                <option value="general_fitness">General Fitness</option>
                <option value="strength">Strength</option>
                <option value="endurance">Endurance</option>
              </select>
            </div>
          </div>

          {/* Dietary Preferences */}
          {/* <div className="space-y-4 pt-6">
            <h2 className="text-xl font-semibold text-gray-900">Dietary Preferences</h2>
            
            <div>
              <label htmlFor="dietary_preference" className="block text-sm font-medium text-gray-700">Diet Type</label>
              <select
                id="dietary_preference"
                name="dietary_preference"
                value={formData.dietary_preference}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Select diet type</option>
                <option value="no_restrictions">No Restrictions</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="pescatarian">Pescatarian</option>
                <option value="keto">Keto</option>
                <option value="paleo">Paleo</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  'gluten_free',
                  'dairy_free',
                  'nut_free',
                  'shellfish_free',
                  'halal',
                  'kosher'
                ].map((restriction) => (
                  <label key={restriction} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.dietary_restrictions.includes(restriction)}
                      onChange={() => handleDietaryRestrictionChange(restriction)}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-sm text-gray-700">
                      {restriction.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div> */}

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={saving}
              className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-medium
                ${saving ? 'opacity-75 cursor-not-allowed' : 'hover:bg-indigo-700'}`}
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 