<script setup lang="ts">
import { inject } from 'vue'
import { RouterView } from 'vue-router'
import { useColorMode } from '@vueuse/core'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const data = inject('data')

const mode = useColorMode()

const toggle = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="container">
    <header class="text-center ">
      <div class="flex flex-row w-[90%] m-auto items-center">
        <div class="basis-3/4">
          <img class="w-full m-auto" alt="Vue logo" src="/estg_h-01.png" />
        </div>
        <div class="basis-1-/4 p-10">
          <Switch id="airplane-mode" @click="toggle"/>
          <Label class="mx-2" for="airplane-mode">Light Mode</Label>
        </div>
      </div>
      <h1 class="scroll-m-20 p-5 text-4xl font-extrabold tracking-tight lg:text-5xl">Desenvolvimento de Aplicações Distribuídas</h1>
      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">{{ data.year }}</h2>

    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

