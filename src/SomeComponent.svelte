<script lang="typescript">
  import DateComponent from './components/Date.svelte';

  export let name: string;
</script>

<style>
</style>

<template>
  Hello World {name}! <DateComponent />
</template>
