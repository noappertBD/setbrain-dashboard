import { Tabbar } from 'auth/components/tabbar';
import { ProjectProvider } from 'projects/providers/project-provider';
import { GoogleDriveProvider } from 'files/providers/google-drive-provider';
import React from 'react';

export default async function ProjectLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { id: string };
}) {
    return (
        <ProjectProvider id={params.id}>
            <GoogleDriveProvider>
                <Tabbar />
                <section className="py-2 md:py-6 pb-40 md:px-7 w-full gap-3.5 flex flex-col h-screen overflow-x-hidden overflow-y-scroll">
                    {children}
                </section>
            </GoogleDriveProvider>
        </ProjectProvider>
    );
}
