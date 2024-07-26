<script setup lang="ts">
import { inject } from 'vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const data = inject('data')

const navigateToProject = (url: string  )=> {
  window.open(url, '_blank', 'noopener')
}

</script>

<template>
<div class="p-10">
    <Tabs default-value="arquitetura" class="w-full">
    <TabsList class="w-full p-6">
      <TabsTrigger value="arquitetura">
        Arquitetura
      </TabsTrigger>
      <TabsTrigger :value="project.id" v-for='project in data.projects' :key="project.id"  >
        {{ project.title }}
      </TabsTrigger>
    </TabsList>
    <TabsContent value="arquitetura">
      <Card>
        <CardHeader>
          <CardTitle>Desenvolvimento de Aplicações Distribuídas</CardTitle>
          <CardDescription>Arquitetura de Projeto</CardDescription>
        </CardHeader>
        <CardContent >
          <img class="w-full" :src="`/imgs/${data.architecture}`" alt="Arquitetura de Projeto" />      
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent :value="project.id" v-for='project in data.projects' :key="project.id">
      <Card>
        <CardHeader>
          <CardTitle>{{project.title}}</CardTitle>
        </CardHeader>
        <CardContent>
          <img class="w-full" :src="`/imgs/${project.image}`" alt="Projeto 1" />      
        </CardContent>
        <CardFooter>
          <div class="flex flex-row w-full">
            <div class="flex-1">
              <p class="font-bold">Alunos:</p>
              <ul>
                <li v-for="student in project.students" :key="student.number">{{ `${student.number} ${student.name}` }}</li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="font-bold">Credenciais:</p>
              <ul>
                <li>utilizador: {{ project.credentials.user }}</li>
                <li>palavra-passe: {{ project.credentials.user }}</li>
              </ul>
            </div>
            <div class="flex-1">
              <Button @click="navigateToProject(project.link)">Abrir Projeto</Button>
            </div>
          </div >
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
</div>

</template>