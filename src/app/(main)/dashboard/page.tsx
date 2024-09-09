import React from 'react';
import AppStateProvider from '@/lib/providers/state-provider';
import DashboardSetup from '@/components/dashboard-setup/dashboard-setup';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { db } from '@/lib/supabase/db'; // Correct named import
import { redirect } from 'next/navigation';
import { getUserSubscriptionStatus } from '@/lib/supabase/queries';
import { eq } from 'drizzle-orm/expressions'; // Import the eq function from drizzle-orm

// Define the Workspace type according to your schema
type Workspace = {
    id: string;
    workspaceOwner: string;
    // Add other properties that are part of the workspace schema
};

const DashboardPage = async () => {
    const supabase = createServerComponentClient({ cookies });

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // Fetch workspace with correct where condition
    const workspace = await db.query.workspaces.findFirst({
        where: (workspace) => eq(workspace.workspaceOwner, user.id), // Correct usage of eq
    });

    const { data: subscription, error: subscriptionError } =
        await getUserSubscriptionStatus(user.id);

    if (subscriptionError) return;

    if (!workspace) {
        return (
            <div className="bg-background h-screen w-screen flex justify-center items-center">
                <DashboardSetup user={user} subscription={subscription} />
            </div>
        );
    }

    redirect(`/dashboard/${workspace.id}`);
};

export default DashboardPage;
