<script lang="ts">
  import "../app.css";
  import SearchBar from "./SearchBar.svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import ProjectDetails from "./ProjectSheet.svelte";
  import { Tabs, TabsList, TabsTrigger } from "$lib/components/ui/tabs";
  import { ScrollArea } from "$lib/components/ui/scroll-area";
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

  function selectProject(project: Project) {
    selectedProject = project;
  }
</script>

<div class="flex h-[calc(100vh-73px)]">
  <main class="flex-1 flex flex-col">
    <header class="border-b p-4">
      <div class="flex items-center justify-between">
        <SearchBar />
      </div>
    </header>

    <div class="flex-1 p-4 overflow-hidden">
      <Tabs value="all" class="mb-4">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="open-source">Open Source</TabsTrigger>
          <TabsTrigger value="in-progress">Closed Source</TabsTrigger>
        </TabsList>
      </Tabs>

      <ScrollArea class="h-[calc(100vh-20px)]">
        <div class="space-y-4 mb-4">
          {#each projects as project (project.id)}
            <ProjectCard {project} onSelect={selectProject} />
          {/each}
        </div>
      </ScrollArea>
    </div>
  </main>

  <ProjectDetails {selectedProject} />
</div>
