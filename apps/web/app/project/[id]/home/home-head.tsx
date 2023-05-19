'use client';

import { profileContext } from 'auth/providers/profile-provider';
import { projectContext } from 'projects/providers/project-provider';
import { useContext } from 'react';
import { Skeleton } from 'ui/components/skeleton/Skeleton';

export function HomeHead() {
    const project = useContext(projectContext);
    const profile = useContext(profileContext);

    if (!profile && !project) return <HomeHeadSkeleton />;

    return (
        <div className="px-5 md:px-0">
            <h1 className="text-subtitle-mb font-bold text-white-100">
                {project && project.name}
            </h1>
            <p className="text-body-l text-white-48">
                😄 Bonjour {profile && profile.firstname} ravie de vous revoir !
            </p>
        </div>
    );
}

export function HomeHeadSkeleton() {
    return (
        <div className="flex flex-col gap-2 px-5 md:px-0">
            <Skeleton height={40} width={200} />
            <Skeleton height={20} width={350} />
        </div>
    );
}
