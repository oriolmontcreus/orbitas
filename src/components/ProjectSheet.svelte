<!-- ProjectDetails.svelte -->
<script lang="ts">
    import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "$lib/components/ui/sheet";
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
    import OpenSourceIndicator from "./indicators/OpenSourceIndicator.svelte";
    import ClosedSourceIndicator from "./indicators/ClosedSourceIndicator.svelte";
    import type { Project } from "$lib/types/Project";
  
    export let selectedProject: Project | null;
  </script>
  
  <Sheet open={selectedProject !== null}>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>{selectedProject?.title}</SheetTitle>
        <SheetDescription>
          Created by {selectedProject?.creator}
        </SheetDescription>
      </SheetHeader>
      <div class="mt-4 space-y-4">
        <div>
          <h3 class="font-semibold mb-1">Description</h3>
          <p class="text-sm text-muted-foreground">
            {selectedProject?.description}
          </p>
        </div>
        <div>
          <h3 class="font-semibold mb-1">Collaborators</h3>
          <p>
            {selectedProject?.collaborators} people are working on this project
          </p>
        </div>
        <div>
          <h3 class="font-semibold mb-1">Project Type</h3>
          <div class="flex space-x-2">
            {#if selectedProject?.isOpenSource}
              <OpenSourceIndicator />
            {:else}
              <ClosedSourceIndicator />
            {/if}
            <Badge variant="secondary">{selectedProject?.license}</Badge>
          </div>
        </div>
        <Button name="test" class="w-full">Request to Collaborate</Button>
      </div>
    </SheetContent>
  </Sheet>