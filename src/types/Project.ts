import type { License } from "$lib/constants/License";
import type { ProjectStatus } from "$lib/constants/ProjectStatus";
import type { User } from "$lib/models/User";

export type Project = {
    id: number;
    title: string;
    description: string;
    creator: User;
    isOpenSource: boolean;
    license: License;
    tags: string[];
    status: ProjectStatus;
    website?: string;
    repositoryUrl?: string;
};