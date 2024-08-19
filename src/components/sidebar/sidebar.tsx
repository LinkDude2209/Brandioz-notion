import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react'

import { cookies } from 'next/headers'
import { getCollaboratingWorkspaces, getFolders, getPrivateWorkspaces, getSharedWorkspaces, getUserSubscriptionStatus } from '@/lib/supabase/queries';
import { redirect } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import Workspacedropdown from './workspace-dropdown';


interface SidebarProps {
    params: { workspaceId: string };
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = async ({ params, className }) => {
    const supabase = createServerComponentClient({ cookies })
    //user
    const {
        data: { user }, } = await supabase.auth.getUser();

    if (!user) return;

    const { data: subscriptionData, error: subscriptionError } = await getUserSubscriptionStatus(user.id);

    const { data: workspaceFolderData, error: foldersError } = await getFolders(params.workspaceId)

    if (subscriptionError || foldersError) redirect('/dashboard');

    const [privateWorkspaces, collaboratingWorkspaces, sharedWorkspaces] = await Promise.all([
        getPrivateWorkspaces(user.id),
        getCollaboratingWorkspaces(user.id),
        getSharedWorkspaces(user.id),])

    return (
        <aside
            className={twMerge(
                'hidden sm:flex sm:flex-col w-[280px] shrink-0 p-4 md:gap-4 !justify-between'
                , className)}>
            <div>
                <Workspacedropdown
                    privateWorkspaces={privateWorkspaces}
                    sharedWorkspaces={sharedWorkspaces}
                    collaboratingWorkspaces={collaboratingWorkspaces}
                    defaultValue={[
                        ...privateWorkspaces,
                        ...collaboratingWorkspaces,
                        ...sharedWorkspaces,
                    ].find((workspace) => workspace.id === params.workspaceId)}></Workspacedropdown>
                {/* <PlanUsage folderLength={workspaceFolderData?.length}
                    subscription={subscriptionData} /> */}
            </div>
        </aside>
    )
}
export default Sidebar;