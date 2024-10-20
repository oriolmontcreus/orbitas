<script lang="ts">
    import { Globe, Lock } from "lucide-svelte";
    import { Tooltip, TooltipContent, TooltipTrigger } from "$lib/components/ui/tooltip";
</script>

<Tooltip>
    <TooltipTrigger>
        <div class="flex items-center justify-center w-6 h-6 rounded-sm bg-gray-400 bg-opacity-20 text-white shadow-md">
            <Lock class="w-4 h-4" />
        </div>
    </TooltipTrigger>
    <TooltipContent>
        <span>This project its Closed Source</span>
    </TooltipContent>
</Tooltip>