<script lang="ts">
    import { Globe } from "lucide-svelte";
    import { Tooltip, TooltipContent, TooltipTrigger } from "$lib/components/ui/tooltip";
</script>

<Tooltip>
    <TooltipTrigger>
        <div class="flex items-center justify-center w-6 h-6 rounded-sm bg-green-500 bg-opacity-50 text-white shadow-md">
            <Globe class="w-4 h-4" />
        </div>
    </TooltipTrigger>
    <TooltipContent>
        <span>This project its Open Source</span>
    </TooltipContent>
</Tooltip>