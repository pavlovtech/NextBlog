import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
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
        const payload = {
          email: credentials!.email,
          password: credentials!.password,
        };

        if(credentials!.email !== 'alexppavlov93@gmail.com') {
          throw new Error("Not authorized!");
        }

        // const res = await fetch('https://cloudcoders.azurewebsites.net/api/tokens', {
        //   method: 'POST',
        //   body: JSON.stringify(payload),
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // });

        // const user = await res.json();
        // if (!res.ok) {
        //   throw new Error(user.message);
        // }
        // // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user;
        // }

        // Return null if user data could not be retrieved
        return {
          id: "admin",
          name: "Alex",
          email: "alexppavlov93@gmail.com"
        };
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/admin/signin',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: (user as any).token,
          refreshToken: (user as any).refreshToken,
        };
      }

      return token;
    },

    async session({ session, token }) {
      (session!.user as any).accessToken = token.accessToken;
      (session!.user as any).refreshToken = token.refreshToken;
      (session!.user as any).accessTokenExpires = token.accessTokenExpires;

      return session;
    },
  },
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === 'development',
};