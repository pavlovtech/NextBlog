import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'personal blog',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: '[email protected]',
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        if(credentials?.email !== process.env.ADMIN_EMAIL && credentials?.email !== process.env.ADMIN_PASSWORD) {
          // throw new Error("Not authorized!");
          return null;
        }

        return {
          id: "admin",
          name: "Alex",
          email: process.env.ADMIN_EMAIL
        };
      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
};