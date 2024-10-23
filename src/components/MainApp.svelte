<script lang="ts">
  import "../app.css";
  import { Search } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
  } from "$lib/components/ui/sheet";
  import { Tabs, TabsList, TabsTrigger } from "$lib/components/ui/tabs";
  import { ScrollArea } from "$lib/components/ui/scroll-area";
  import OpenSourceIndicator from "./indicators/OpenSourceIndicator.svelte";
  import ClosedSourceIndicator from "./indicators/ClosedSourceIndicator.svelte";
  import type { Project } from "$lib/types/Project";
  import { License } from "$lib/constants/License";

  let selectedProject: Project | null = null;

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Art Generator",
      creator: "Alice Johnson",
      collaborators: 5,
      isOpenSource: true,
      description:
        "An innovative project leveraging machine learning to create unique digital artworks based on text prompts.",
      license: License.MIT,
    },
    {
      id: 2,
      title: "Sustainable Urban Planning Tool",
      creator: "Bob Smith",
      collaborators: 8,
      isOpenSource: false,
      description:
        "A comprehensive software solution for city planners to design eco-friendly and efficient urban spaces.",
      license: License.Apache_2_0,
    },
    {
      id: 3,
      title: "Decentralized Social Media Platform",
      creator: "Charlie Brown",
      collaborators: 12,
      isOpenSource: true,
      description:
        "A blockchain-based social network that prioritizes user privacy and data ownership.",
      license: License.GPL_3_0,
    },
  ];
</script>

<div class="flex h-[calc(100vh-73px)]">
  <!-- Main content -->
  <main class="flex-1 flex flex-col">
    <!-- Header -->
    <header class="border-b p-4">
      <div class="flex items-center justify-between">
        <div class="relative w-full max-w-sm">
          <Search
            class="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input class="pl-8" placeholder="Search projects" />
        </div>
      </div>
    </header>

    <!-- Content area -->
    <div class="flex-1 p-4 overflow-hidden">
      <!-- Filters -->
      <Tabs value="all" class="mb-4">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="open-source">Open Source</TabsTrigger>
          <TabsTrigger value="in-progress">Closed Source</TabsTrigger>
        </TabsList>
      </Tabs>

      <!-- Project feed -->
      <ScrollArea class="h-[calc(100vh-20px)]">
        <div class="space-y-4 mb-4">
          {#each projects as project (project.id)}
            <Card
              class="cursor-pointer transition-colors duration-300 hover:bg-accent"
              on:click={()=> selectedProject = project }
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-muted-foreground mb-2">
                  by {project.creator}
                </p>
                <div class="flex space-x-2">
                  {#if project.isOpenSource}
                    <OpenSourceIndicator />
                  {:else}
                    <ClosedSourceIndicator />
                  {/if}
                  <Badge variant="secondary">{project.license}</Badge>
                </div>
              </CardContent>
            </Card>
          {/each}
        </div>
      </ScrollArea>
    </div>
  </main>

  <!-- Project details side panel -->
  <Sheet
    open={selectedProject !== null}
    onOpenChange={() => (selectedProject = null)}
  >
    <SheetContent>
      <SheetHeader>
        <SheetTitle>{selectedProject?.title}</SheetTitle>
        <SheetDescription
          >Created by {selectedProject?.creator}</SheetDescription
        >
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
          <Badge
            variant={selectedProject?.isOpenSource ? "default" : "secondary"}
          >
            {selectedProject?.isOpenSource ? "Open Source" : "Closed Source"}
          </Badge>
        </div>
        <Button class="w-full">Request to Collaborate</Button>
      </div>
    </SheetContent>
  </Sheet>
</div>
