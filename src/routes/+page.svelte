<script lang="ts">
	import { slide } from 'svelte/transition';
	import ButtonPrimary from '../components/ButtonPrimary.svelte';
	import TextInput from '../components/TextInput.svelte';
	import type { LoginInfo } from './api/account/LoginInfo';
	import { goto } from '$app/navigation';
	import ButtonSecondary from '../components/ButtonSecondary.svelte';

	let login = false;
	let register = false;

	let loginInfo: LoginInfo = {
		username: '',
		password: ''
	};

	async function handleRegister() {
		const response = await fetch('/api/account/register', {
			method: 'POST',
			body: JSON.stringify(loginInfo)
		});

		if (!response.ok) {
			// TODO
		} else {
			goto('/account/dashboard');
		}
	}

	async function handleLogin() {
		const response = await fetch('/api/account/login', {
			method: 'POST',
			body: JSON.stringify(loginInfo)
		});

		if (!response.ok) {
			// TODO
		} else {
			goto('/account/dashboard');
		}
	}
</script>

<div class="flex justify-center">
	<div class="flex min-h-screen flex-col justify-center">
		<div class="flex flex-col rounded border p-3 shadow-lg shadow-gray-400">
			{#if !register && !login}
				<div in:slide={{ duration: 200, delay: 250 }} out:slide={{ duration: 200 }}>
					<h1 class="text-center text-4xl font-black">Welcome</h1>

					<div class="flex flex-col items-center">
						<div>
							<ButtonPrimary on:click={() => (login = true)}>Login</ButtonPrimary>
						</div>
						<div class="my-2 flex w-full basis-full border-b" />
						<div>
							<ButtonPrimary on:click={() => (register = true)}>Register</ButtonPrimary>
						</div>
					</div>
				</div>
			{/if}

			{#if register}
				<div in:slide={{ delay: 250 }} out:slide>
					<h1 class="text-center text-4xl font-black">Register</h1>

					<div class="m-2 flex flex-col items-center">
						<TextInput bind:value={loginInfo.username} placeholder="Username" />
						<TextInput bind:value={loginInfo.password} placeholder="Password" />

						<div>
							<ButtonSecondary on:click={() => (register = false)}>Back</ButtonSecondary>
							<ButtonPrimary on:click={handleRegister}>Register</ButtonPrimary>
						</div>
					</div>
				</div>
			{/if}

			{#if login}
				<div in:slide={{ delay: 250 }} out:slide>
					<h1 class="text-center text-4xl font-black">Login</h1>

					<div class="m-2 flex flex-col items-center">
						<TextInput bind:value={loginInfo.username} placeholder="Username" />
						<TextInput bind:value={loginInfo.password} placeholder="Password" />

						<div>
							<ButtonSecondary on:click={() => (login = false)}>Back</ButtonSecondary>
							<ButtonPrimary on:click={handleLogin}>Login</ButtonPrimary>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
