<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <div class="bg-gray-700 flex flex-col w-full gap-4 p-8 rounded-2xl md:flex md:w-1/3 shadow-md">
      <div class="">
        <div class="flex justify-between">
          <h1 class="text-gray-200 font-semibold tracking-widest md:text-lg uppercase mb-2">Cadastro de pessoas</h1>
          <box-icon name='user' type='solid' color="#E5E7EB" size="36px" ></box-icon>
        </div>
        <ul class="text-gray-300 ml-4 text-sm font-medium">
          <li class="text-xs mt-1"><strong class="text-purple-400">#</strong> Cadastrar um novo usuário.</li>
          <li class="text-xs mt-2"><strong class="text-purple-400">#</strong> Listar todos os usuários cadastrados.</li>
          <li class="text-xs mt-2"><strong class="text-purple-400">#</strong> Filtrar usuários previamente cadastrados por nome/status.</li>
          <li class="text-xs mt-2"><strong class="text-purple-400">#</strong> Atualizar dados de um usuário.</li>
          <li class="text-xs mt-2"><strong class="text-purple-400">#</strong> Deletar um usuário cadastrado.</li>
        </ul>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <router-link to="/create" class="flex items-center justify-between text-center p-3 bg-purple-400 md:hover:bg-purple-500 transition duration-200 shadow md:flex-1 rounded-lg border-none outline-none text-gray-200 font-semibold text-sm uppercase">
          <span class="w-full">Cadastrar</span>
          <box-icon name='plus' color="#E5E7EB"></box-icon>
        </router-link>
        <router-link to="/read" class="flex items-center justify-between text-center p-3 border border-gray-600 md:hover:bg-gray-600 transition duration-200 shadow md:flex-1 rounded-lg outline-none text-gray-200 font-semibold text-sm uppercase">
          <span class="w-full">Listar Usuários</span>
          <box-icon name='list-ul' color="#E5E7EB"></box-icon>
        </router-link>
      </div>    
    </div>
  </div>
</template>
