<script lang="ts">
  import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "$lib/components/ui/sheet";
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
  import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
  import OpenSourceIndicator from "./indicators/OpenSourceIndicator.svelte";
  import ClosedSourceIndicator from "./indicators/ClosedSourceIndicator.svelte";
  import type { Project } from "$lib/types/Project";
  
  let p: Project;
  export { p as selectedProject };
</script>

<Sheet open={p !== null}>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>{p.title}</SheetTitle>
      <SheetDescription>
        {#if p}
          <div class="flex items-center">
            <Avatar class="mr-2">
              <AvatarImage src={p.creator.avatar} alt="{p.creator.username}-avatar" />
              <AvatarFallback>
                {(p.creator.username).charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span>Created by {p.creator.username}</span>
          </div>
        {/if}
      </SheetDescription>
    </SheetHeader>
    <div class="mt-4 space-y-4">
      <div>
        <h3 class="font-semibold mb-1">Description</h3>
        <p class="text-sm text-muted-foreground">
          {p.description}
        </p>
      </div>
      <div>
        <h3 class="font-semibold mb-1">Project Type</h3>
        <div class="flex space-x-2">
          {#if p.isOpenSource}
            <OpenSourceIndicator />
          {:else}
            <ClosedSourceIndicator />
          {/if}
          <Badge variant="secondary">{p.license}</Badge>
        </div>
      </div>
      <div>
        <h3 class="font-semibold mb-1">Tags</h3>
        <div class="flex space-x-2">
          {#each p.tags as tag}
            <Badge variant="secondary">{tag}</Badge>
          {/each}
        </div>
      </div>
      <div>
        <h3 class="font-semibold mb-1">Status</h3>
        <Badge variant="outline">{p.status}</Badge>
      </div>
      {#if p.website}
        <div>
          <h3 class="font-semibold mb-1">Website</h3>
          <a href={p.website} target="_blank" class="text-blue-500 underline">{p.website}</a>
        </div>
      {/if}
      {#if p.repositoryUrl}
        <div>
          <h3 class="font-semibold mb-1">Repository</h3>
          <a href={p.repositoryUrl} target="_blank" class="text-blue-500 underline">{p.repositoryUrl}</a>
        </div>
      {/if}
      <Button name="test" class="w-full">Request to Collaborate</Button>
    </div>
  </SheetContent>
</Sheet>