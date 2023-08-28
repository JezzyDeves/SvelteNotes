<script lang="ts">
	export let type: 'text' | 'password' = 'text';
	export let name: string = '';
	export let id: string = '';
	export let placeholder: string = '';
</script>

<input
	class="m-1 rounded border p-2 shadow-inner shadow-gray-300"
	{type}
	{name}
	{id}
	{placeholder}
/>
