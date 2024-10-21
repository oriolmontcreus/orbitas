import type { License } from "$lib/constants/License";

export type Project = {
    id: number;
    title: string;
    creator: string;
    collaborators: number;
    isOpenSource: boolean;
    description: string;
    license: License;
};