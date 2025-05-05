import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { query } from "./db";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Find user by email
          const result = await query(
            "SELECT * FROM users WHERE email = $1",
            [credentials.email]
          );
          const user = result.rows[0];

          if (!user) {
            console.log("User not found:", credentials.email);
            return null;
          }

          // Check password
          const isValidPassword = await compare(
            credentials.password,
            user.password
          );

          if (!isValidPassword) {
            console.log("Invalid password for user:", credentials.email);
            return null;
          }

          console.log('Authorize callback successful for user:', {id: user.id, name: user.name, email: user.email});
          
          // Return user data that will be encoded in the JWT
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.avatar_url,
            age: user.age,
            gender: user.gender,
            weight: user.weight,
            height: user.height,
            bmi: user.bmi,
            fitness_goal: user.fitness_goal,
            dietary_preference: user.dietary_preference,
            dietary_restrictions: user.dietary_restrictions,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // Add user data to token when signing in
      if (user) {
        console.log('JWT callback with user:', {id: user.id, name: user.name, email: user.email});
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
        token.age = user.age;
        token.gender = user.gender;
        token.weight = user.weight;
        token.height = user.height;
        token.bmi = user.bmi;
        token.fitness_goal = user.fitness_goal;
        token.dietary_preference = user.dietary_preference;
        token.dietary_restrictions = user.dietary_restrictions;
      }

      // Handle the update trigger when session is updated from the client
      if (trigger === "update" && session?.user) {
        console.log('JWT update callback with session:', session.user);
        // Update token fields with the new values from session
        if (session.user.name) token.name = session.user.name;
        if (session.user.age !== undefined) token.age = session.user.age;
        if (session.user.gender) token.gender = session.user.gender;
        if (session.user.weight !== undefined) token.weight = session.user.weight;
        if (session.user.height !== undefined) token.height = session.user.height;
        if (session.user.bmi !== undefined) token.bmi = session.user.bmi;
        if (session.user.fitness_goal) token.fitness_goal = session.user.fitness_goal;
        if (session.user.dietary_preference) token.dietary_preference = session.user.dietary_preference;
        if (session.user.dietary_restrictions) token.dietary_restrictions = session.user.dietary_restrictions;
      }
      
      return token;
    },
    async session({ session, token }) {
      // Add user data from token to session
      if (token && session.user) {
        console.log('Session callback with token:', {id: token.id, name: token.name, email: token.email});
        session.user = {
          ...session.user,
          id: token.id as string,
          name: token.name as string,
          email: token.email as string,
          image: token.picture as string | null,
          age: token.age as number | undefined,
          gender: token.gender as string | undefined,
          weight: token.weight as number | undefined,
          height: token.height as number | undefined,
          bmi: token.bmi as number | undefined,
          fitness_goal: token.fitness_goal as string | undefined,
          dietary_preference: token.dietary_preference as string | undefined,
          dietary_restrictions: token.dietary_restrictions as string[] | undefined,
        };
      }
      console.log('Session callback returning session user:', session.user);
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
}; 