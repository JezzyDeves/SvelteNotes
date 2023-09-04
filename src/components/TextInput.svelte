<script lang="ts">
	export let name: string = '';
	export let id: string = '';
	export let placeholder: string = '';
	export let value: string = '';
</script>

<input
	bind:value
	class="m-1 rounded border p-2 shadow-inner shadow-gray-300"
	{name}
	{id}
	{placeholder}
/>
