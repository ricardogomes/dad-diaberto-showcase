<script setup lang="ts">
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
      <TabsTrigger value="projeto1">
        Projeto 1
      </TabsTrigger>
      <TabsTrigger value="projeto2">
        Projeto 2
      </TabsTrigger>
      <TabsTrigger value="projeto3">
        Projeto 3
      </TabsTrigger>
      <TabsTrigger value="projeto4">
        Projeto 4
      </TabsTrigger>
    </TabsList>
    <TabsContent value="arquitetura">
      <Card>
        <CardHeader>
          <CardTitle>Desenvolvimento de Aplicações Distribuídas</CardTitle>
          <CardDescription>Arquitetura de Projeto</CardDescription>
        </CardHeader>
        <CardContent >
          <img class="w-full" src="../assets/imgs/architecture.png" alt="Arquitetura de Projeto" />      
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="projeto1">
      <Card>
        <CardHeader>
          <CardTitle>Projeto 1</CardTitle>
        </CardHeader>
        <CardContent>
          <img class="w-full" src="../assets/imgs/DAD_202324_Project1.png" alt="Projeto 1" />      
        </CardContent>
        <CardFooter>
          <div class="flex flex-row w-full">
            <div class="flex-1">
              <p class="font-bold">Alunos:</p>
              <ul>
                <li>2222179	Amilcar Justino</li>
                <li>2212554	Filipe Silva</li>
                <li>2212488	Dora Mendes</li>
                <li>2212470	Margarida Cura</li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="font-bold">Credenciais:</p>
              <ul>
                <li>utilizador: a1@mail.pt</li>
                <li>palavra-passe: 123</li>
              </ul>
            </div>
            <div class="flex-1">
              <Button @click="navigateToProject('http://diaaberto-202324-dad-project1-172.22.21.152.sslip.io/')">Abrir Projeto</Button>
            </div>
          </div >
        </CardFooter>
      </Card>
    </TabsContent>
    <TabsContent value="projeto2">
      <Card>
        <CardHeader>
          <CardTitle>Projeto 2</CardTitle>
        </CardHeader>
        <CardContent>
          <img class="w-full" src="../assets/imgs/DAD_202324_Project2.png" alt="Projeto 2" />      
        </CardContent>
        <CardFooter>
          <div class="flex flex-row w-full">
            <div class="flex-1">
              <p class="font-bold">Alunos:</p>
              <ul>
                <li>2222179	Amilcar Justino</li>
                <li>2212554	Filipe Silva</li>
                <li>2212488	Dora Mendes</li>
                <li>2212470	Margarida Cura</li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="font-bold">Credenciais:</p>
              <ul>
                <li>utilizador: a1@mail.pt</li>
                <li>palavra-passe: 123</li>
              </ul>
            </div>
            <div class="flex-1">
              <Button @click="navigateToProject('http://diaaberto-202324-dad-project2-172.22.21.152.sslip.io/')">Abrir Projeto</Button>
            </div>
          </div >
        </CardFooter>
      </Card>
    </TabsContent>
    <TabsContent value="projeto3">
      <Card>
        <CardHeader>
          <CardTitle>Projeto 3</CardTitle>
        </CardHeader>
        <CardContent>
          <img class="w-full" src="../assets/imgs/DAD_202324_Project3.png" alt="Projeto 3" />      
        </CardContent>
        <CardFooter>
          <div class="flex flex-row w-full">
            <div class="flex-1">
              <p class="font-bold">Alunos:</p>
              <ul>
                <li>2222179	Amilcar Justino</li>
                <li>2212554	Filipe Silva</li>
                <li>2212488	Dora Mendes</li>
                <li>2212470	Margarida Cura</li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="font-bold">Credenciais:</p>
              <ul>
                <li>utilizador: a1@mail.pt</li>
                <li>palavra-passe: 123</li>
              </ul>
            </div>
            <div class="flex-1">
              <Button @click="navigateToProject('http://diaaberto-202324-dad-project3-172.22.21.152.sslip.io/')">Abrir Projeto</Button>
            </div>
          </div >
        </CardFooter>
      </Card>
    </TabsContent>
    <TabsContent value="projeto4">
      <Card>
        <CardHeader>
          <CardTitle>Projeto 4</CardTitle>
        </CardHeader>
        <CardContent>
          <img class="w-full" src="../assets/imgs/DAD_202324_Project4.png" alt="Projeto 4" />      
        </CardContent>
        <CardFooter>
          <div class="flex flex-row w-full">
            <div class="flex-1">
              <p class="font-bold">Alunos:</p>
              <ul>
                <li>2222179	Amilcar Justino</li>
                <li>2212554	Filipe Silva</li>
                <li>2212488	Dora Mendes</li>
                <li>2212470	Margarida Cura</li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="font-bold">Credenciais:</p>
              <ul>
                <li>utilizador: a1@mail.pt</li>
                <li>palavra-passe: 123</li>
              </ul>
            </div>
            <div class="flex-1">
              <Button @click="navigateToProject('http://diaaberto-202324-dad-project4-172.22.21.152.sslip.io/')">Abrir Projeto</Button>
            </div>
          </div >
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
</div>

</template>