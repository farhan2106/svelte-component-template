<script lang="typescript">
  export let name: any;

  let libProps: any = {
    component: import('./components/Navbar.svelte'),
    name
  };
</script>

<style>
</style>

<template>
  {#await libProps.component}
    <p>loading...</p>
  {:then x}
    <svelte:component this={x.default} {...libProps} />
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</template>
