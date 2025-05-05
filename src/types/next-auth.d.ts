import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    name: string;
    email: string;
    age?: number;
    gender?: string;
    weight?: number;
    height?: number;
    bmi?: number;
    fitness_goal?: string;
    dietary_preference?: string;
    dietary_restrictions?: string[];
    image?: string;
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      age?: number;
      gender?: string;
      weight?: number;
      height?: number;
      bmi?: number;
      fitness_goal?: string;
      dietary_preference?: string;
      dietary_restrictions?: string[];
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    age?: number;
    gender?: string;
    weight?: number;
    height?: number;
    bmi?: number;
    fitness_goal?: string;
    dietary_preference?: string;
    dietary_restrictions?: string[];
  }
} 