<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.status === 401}
	<div class="flex min-h-screen items-center justify-center bg-slate-700">
		<div class="flex flex-col items-center">
			<div class="border-b p-2 text-4xl font-bold text-slate-200">
				You are not authorized to view this page
			</div>
			<a
				class="mt-2 rounded p-1 font-bold text-sky-400 transition-colors hover:bg-slate-600"
				href="/">Go back to home</a
			>
		</div>
	</div>
{/if}
