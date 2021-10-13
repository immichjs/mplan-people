<template>
  <div class="p-4 rounded md:max-w-7xl mx-auto">
    <div class="flex gap-4 items-center mb-4">
      <router-link to="/" tag="div" class="w-10 h-10 flex justify-center items-center rounded-full bg-gray-700 cursor-pointer hover:bg-purple-400 transition duration-200">
        <box-icon name='left-arrow-alt' color="#E5E7EB"></box-icon>
      </router-link>
      <span class="text-sm text-gray-200 uppercase font-semibold">Pessoas cadastradas</span>
    </div>
    <div class="overflow-auto" v-if="people.length">
      <table class="w-full text-gray-200">
        <tr class="border-b border-gray-600 text-sm">
          <th class="p-2 px-8 border-r border-gray-600">Status</th>
          <th class="p-2 px-8 border-r border-gray-600">Nome</th>
          <th class="p-2 px-8 border-r border-gray-600">Email</th>
          <th class="p-2 px-8 border-r border-gray-600">Telefone</th>
          <th class="p-2 px-8 border-r border-gray-600">Celular</th>
          <th class="p-2 px-8 border-r border-gray-600">Nacionalidade</th>
          <th class="p-2 px-8 border-r border-gray-600">Estado Civil</th>
          <th class="p-2 px-8"></th>
        </tr>
        <tr v-for="person in people" :key="person.email" class="border-b border-gray-600 text-xs font-medium">
          <td class="p-4 text-center font-semibold uppercase border-r border-gray-600" :class="{ 'text-green-500': person.status }" v-if="person.status">{{ person.status && 'Ativo' }}</td>
          <td class="p-4 text-center font-semibold uppercase border-r border-gray-600" :class="{ 'text-red-400': !person.status }" v-else>{{ !person.status && 'Inativo' }}</td>
          <td class="p-4 text-center border-r border-gray-600">{{ person.name }}</td>
          <td class="p-4 text-center border-r border-gray-600">{{ person.email }}</td>
          <td class="p-4 text-center border-r border-gray-600">{{ person.phone }}</td>
          <td class="p-4 text-center border-r border-gray-600">{{ person.cellphone }}</td>
          <td class="p-4 text-center border-r border-gray-600">{{ person.nationality }}</td>
          <td class="p-4 text-center border-r border-gray-600">{{ person.maritalStatus }}</td>
          <td class="flex gap-4 justify-center items-center mt-2">
            <router-link :to="`/edit?email=${person.email}`" class="p-1.5 bg-blue-400 hover:bg-blue-600 transition duration-200 px-6 rounded-full text-gray-200 uppercase text-xs font-bold">Editar</router-link>
            <button class="p-1.5 border text-red-400 border-red-400 md:hover:bg-red-400 transition duration-200 px-6 rounded-full md:hover:text-gray-200 uppercase text-xs font-bold" @click="deleteUser(person.email)">Excluir</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="flex gap-2 justify-center" v-else>
      <p class="text-center uppercase text-gray-200">Nenhum usuário está cadastrado.</p>
      <router-link to="/create" class="flex items-center">
        <box-icon name='link-external' color="#E5E7EB"></box-icon>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['people'])
  },
  methods: {
    ...mapMutations({
      deleteUser: 'DELETE_USER'
    })
  }
}
</script>
