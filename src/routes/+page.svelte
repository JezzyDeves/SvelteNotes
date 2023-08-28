<script>
	import TextInput from '../components/TextInput.svelte';
</script>

<div class="flex justify-center">
	<div class="flex min-h-screen flex-col justify-center">
		<div class="flex flex-col rounded border p-3 shadow-lg shadow-gray-400">
			<h1 class="text-center font-inter text-4xl font-black">Login</h1>

			<TextInput type="text" placeholder="Username" />
			<TextInput type="password" placeholder="Password" />
		</div>
	</div>
</div>
