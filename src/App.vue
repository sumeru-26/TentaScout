<script setup>

  import { useColorMode } from '@vueuse/core'

  const mode = useColorMode()
  mode.value = 'dark'

</script>

<template>
  <nav>
    <RouterLink to="/">Main</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
