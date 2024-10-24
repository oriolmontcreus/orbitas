<script lang="ts">
    import {
        Card,
        CardContent,
        CardHeader,
        CardTitle,
    } from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";
    import OpenSourceIndicator from "./indicators/OpenSourceIndicator.svelte";
    import ClosedSourceIndicator from "./indicators/ClosedSourceIndicator.svelte";
    import type { Project } from "$lib/types/Project";

    export let project: Project;
    export let onSelect: (project: Project) => void;
</script>

<Card
    class="cursor-pointer transition-colors duration-300 hover:bg-accent"
    on:click={() => onSelect(project)}
>
    <CardHeader>
        <CardTitle>{project.title}</CardTitle>
    </CardHeader>
    <CardContent>
        <p class="text-sm text-muted-foreground mb-2">
            by {project.creator.username}
        </p>
        <div class="flex space-x-2 mb-2">
            {#if project.isOpenSource}
                <OpenSourceIndicator />
            {:else}
                <ClosedSourceIndicator />
            {/if}
            <Badge variant="secondary">{project.license}</Badge>
        </div>
        <div class="flex flex-wrap space-x-1">
            {#each project.tags as tag}
                <Badge variant="outline">{tag}</Badge>
            {/each}
        </div>
    </CardContent>
</Card>