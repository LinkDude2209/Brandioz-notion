import React from 'react';
import AppStateProvider from '@/lib/providers/state-provider';

interface LayoutProps {
    children: React.ReactNode;
    params: any;
}

const Layout: React.FC<LayoutProps> = ({ children, params }) => {
    return (
        <AppStateProvider>
            <main className="flex over-hidden h-screen">
                {children}
            </main>
        </AppStateProvider>
    );
};

export default Layout;