<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <h1 class="text-gray-300 font-semibold tracking-widest md:text-2xl uppercase mb-4">CRUD de pessoas</h1>
    <div class="bg-gray-700 w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded md:flex md:w-1/2 shadow">
      <router-link to="/create" class="text-center p-3 bg-green-400 hover:bg-green-500 transition duration-200 transform hover:translate-y-0.5 md:flex-1 rounded border-none outline-none text-white font-semibold text-sm uppercase">Adicionar</router-link>
      <router-link to="/read" class="text-center p-3 bg-blue-400 hover:bg-blue-500 transition duration-200 transform hover:translate-y-0.5 md:flex-1 rounded border-none outline-none text-white font-semibold text-sm uppercase">Listar Usuários</router-link>
    </div>
  </div>
</template>
