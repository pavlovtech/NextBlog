'use client';

import { SessionProvider, SessionProviderProps } from 'next-auth/react';

const Provider = ({children}: SessionProviderProps) => {
    return <SessionProvider>{children}</SessionProvider>
};

export default Provider;