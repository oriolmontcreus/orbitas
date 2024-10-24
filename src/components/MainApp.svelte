<script lang="ts">
  import "../app.css";
  import SearchBar from "./SearchBar.svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import ProjectDetails from "./ProjectSheet.svelte";
  import { Tabs, TabsList, TabsTrigger } from "$lib/components/ui/tabs";
  import { ScrollArea } from "$lib/components/ui/scroll-area";
  import type { Project } from "$lib/types/Project";
  import { License } from "$lib/constants/License";
  import type { User } from "$lib/models/User";
  import { ProjectStatus } from "$lib/constants/ProjectStatus";

  let selectedProject: Project | null = null;

  const users: User[] = [
    {
      id: "1",
      username: "alicejohnson",
      email: "alice@example.com",
      name: "Alice Johnson",
      created: new Date(),
      updated: new Date(),
    },
    {
      id: "2",
      username: "bobsmith",
      email: "bob@example.com",
      name: "Bob Smith",
      created: new Date(),
      updated: new Date(),
    },
    {
      id: "3",
      username: "charliebrown",
      email: "charlie@example.com",
      name: "Charlie Brown",
      created: new Date(),
      updated: new Date(),
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Art Generator",
      creator: users[0],
      isOpenSource: true,
      description:
        "An innovative project leveraging machine learning to create unique digital artworks based on text prompts.",
      license: License.MIT,
      tags: ["AI", "Art", "Machine Learning"],
      status: ProjectStatus.Active,
      website: "https://ai-art-generator.example.com",
      repositoryUrl: "https://github.com/example/ai-art-generator",
    },
    {
      id: 2,
      title: "Sustainable Urban Planning Tool",
      creator: users[1],
      isOpenSource: false,
      description:
        "A comprehensive software solution for city planners to design eco-friendly and efficient urban spaces.",
      license: License.Apache_2_0,
      tags: ["Urban Planning", "Sustainability", "Eco-Friendly"],
      status: ProjectStatus.Draft,
      website: "https://urban-planning-tool.example.com",
      repositoryUrl: "https://github.com/example/urban-planning-tool",
    },
    {
      id: 3,
      title: "Decentralized Social Media Platform",
      creator: users[2],
      isOpenSource: true,
      description:
        "A blockchain-based social network that prioritizes user privacy and data ownership.",
      license: License.GPL_3_0,
      tags: ["Blockchain", "Social Media", "Privacy"],
      status: ProjectStatus.Completed,
      website: "https://decentralized-social.example.com",
      repositoryUrl: "https://github.com/example/decentralized-social",
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
  {#if selectedProject}
    <ProjectDetails {selectedProject} />
  {/if}
</div>
