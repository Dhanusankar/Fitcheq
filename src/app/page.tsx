'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section with Gradient Background */}
        <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-blue-50 to-indigo-100">
          {/* Abstract shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-10 top-1/4 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute left-0 bottom-0 w-80 h-80 bg-indigo-500 opacity-10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col space-y-6 text-center lg:text-left">
                <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide mb-2">
                  Track. Progress. Succeed.
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 tracking-tight">
                  Your Personal Fitness Journey <span className="text-blue-600">Starts Here</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto lg:mx-0">
                  Personalized fitness and nutrition tracking designed for your unique goals - whether you want to gain muscle, lose fat, or improve your overall health.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/register"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-base font-medium text-white shadow-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  >
                    Create Free Account
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-blue-200 bg-white px-8 text-base font-medium text-blue-700 shadow-lg hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-xl opacity-20 transform rotate-6"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
                    <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <h3 className="font-bold text-xl text-gray-900">Today's Progress</h3>
                          <p className="text-sm text-gray-500">Keep up the great work!</p>
                        </div>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                          </svg>
                        </span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-700">Nutrition</h4>
                          <div className="mt-2 flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                            <span className="ml-2 text-sm font-medium text-gray-500">70%</span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-700">Workouts</h4>
                          <div className="mt-2 flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <span className="ml-2 text-sm font-medium text-gray-500">85%</span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-700">Weekly Goal</h4>
                          <div className="mt-2 flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                            <span className="ml-2 text-sm font-medium text-gray-500">60%</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-medium shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                        View Dashboard
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Cards */}
        <section className="w-full py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Reach Your Goals
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive platform helps you track every aspect of your fitness journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Exercise Library</h3>
                <p className="text-gray-600 mb-6">
                  Access our extensive database of exercises with detailed instructions, muscle groups, and difficulty levels.
                </p>
                <Link href="/dashboard/exercises" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                  Explore Exercises
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                    <path d="M7 2v20"></path>
                    <path d="M21 15V2"></path>
                    <path d="M18 15a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h4Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nutrition Tracking</h3>
                <p className="text-gray-600 mb-6">
                  Log your meals, track your macro and micronutrients, and get personalized nutrition recommendations.
                </p>
                <Link href="/dashboard/nutrition" className="text-green-600 font-medium flex items-center hover:text-green-700">
                  Track Nutrition
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Progress Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Visualize your progress with detailed charts, statistics, and insights to keep you motivated.
                </p>
                <Link href="/dashboard" className="text-purple-600 font-medium flex items-center hover:text-purple-700">
                  View Dashboard
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to Transform Your Fitness Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join thousands of users who are achieving their fitness goals with our comprehensive tracking system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex h-14 items-center justify-center rounded-lg bg-white px-10 text-base font-medium text-blue-700 shadow-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                >
                  Create Free Account
                </Link>
                <Link
                  href="/login"
                  className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-white px-10 text-base font-medium text-white hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
