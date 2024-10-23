<script lang="ts">
    import { Search } from "lucide-svelte";
    import { Input } from "$lib/components/ui/input";
</script>

<div class="relative w-full max-w-sm">
    <Search
        class="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
    />
    <Input class="pl-8" placeholder="Search projects" />
</div>
