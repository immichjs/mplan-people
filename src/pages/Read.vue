<template>
  <div class="md:p-4 rounded md:max-w-7xl mx-auto h-full">
    <div class="flex justify-between gap-4 items-start md:items-center mb-4">
      <BackButton path="/"/>

      <div class="flex flex-col md:flex-row items-end justify-end w-full gap-4">
        <div class="relative flex items-center w-2/3 rounded-lg hover:border-purple-400 h-10">
          <div class="flex justify-center items-center bg-purple-400 h-full w-12 rounded-tl-lg rounded-bl-lg">
            <box-icon name="search" color="#E5E7EB"/>
          </div>
          <input type="text" class="z-10 p-2 px-4 border-purple-400 rounded-tr-lg rounded-br-lg bg-gray-800 w-full h-full border-transparent border outline-none text-gray-200 focus:bg-gray-700 transition duration-200 tracking-wider" placeholder="Pesquisar pessoas por nome" v-model="searchPersonByName">
        </div>
        <div class="relative flex items-center rounded-lg h-10">
          <div class="flex h-full justify-center items-center bg-purple-400 w-12 rounded-tl-lg rounded-bl-lg">
            <box-icon name='filter-alt' color="#E5E7EB"></box-icon>
          </div>
          <select v-model="searchPersonByStatus" class="z-10 p-2 px-2 ring-1 ring-inset ring-purple-400 font-semibold text-purple-300 h-full rounded-tr-lg rounded-br-lg bg-gray-800 w-full outline-none focus:border-purple-400 focus:bg-gray-700 transition duration-200 tracking-wider">
            <option value="" class="font-semibold">Todos</option>
            <option :value="true" class="font-semibold">Ativo</option>
            <option :value="false" class="font-semibold">Inativo</option>
          </select>
        </div>
      </div>
    </div>

    <div class="flex items-center mt-8">
      <h1 class="text-md text-gray-200 uppercase font-semibold">Pessoas cadastradas</h1>
      <box-icon name='chevron-right' color="#E5E7EB"></box-icon>
    </div>

    <div class="overflow-auto h-full-165px mt-8" v-if="people.length">
      <template v-if="searchPeople.length > 0">
      <table class="w-full text-gray-200 bg-gray-800">
        <tr class="border-b border-gray-700 text-sm">
          <th class="p-2 px-8 border-r border-gray-700 text-gray-300">Status</th>
          <th class="p-2 px-8 border-r border-gray-700 text-gray-300">Nome</th>
          <th class="p-2 px-8 border-r border-gray-700 text-gray-300">Email</th>
          <th class="p-2 px-8 border-r border-gray-700 text-gray-300">Telefone</th>
          <th class="p-2 px-8 border-r border-gray-700 text-gray-300">Celular</th>
          <th class="p-2 px-8 border-r border-gray-700 text-gray-300">Nacionalidade</th>
          <th class="p-2 px-8 border-r border-gray-700 text-gray-300">Estado Civil</th>
          <th class="p-2 px-8"></th>
        </tr>
        <tr v-for="person in searchPeople" :key="person.id" class="border-b border-gray-700 text-xs text-gray-400">
          <td class="p-4 text-center tracking-widest font-bold uppercase border-r border-gray-700" :class="{ 'text-purple-400': person.status }" v-if="person.status">{{ person.status && 'Ativo' }}</td>
          <td class="p-4 text-center tracking-widest font-bold uppercase border-r border-gray-700" :class="{ 'text-red-500': !person.status }" v-else>{{ !person.status && 'Inativo' }}</td>
          <td class="p-4 text-center tracking-widest font-bold border-r border-gray-700">{{ person.name }}</td>
          <td class="p-4 text-center tracking-widest font-bold border-r border-gray-700">{{ person.email }}</td>
          <td class="p-4 text-center tracking-widest font-bold border-r border-gray-700">{{ person.phone }}</td>
          <td class="p-4 text-center tracking-widest font-bold border-r border-gray-700">{{ person.cellphone }}</td>
          <td class="p-4 text-center tracking-widest font-bold border-r border-gray-700">{{ person.nationality }}</td>
          <td class="p-4 text-center tracking-widest font-bold border-r border-gray-700">{{ person.maritalStatus }}</td>
          <td class="h-full flex justify-around gap-2 md:gap-4 items-center p-4">
            <router-link :to="`/edit/${person.id}`" class="w-full flex justify-center items-center p-2 bg-purple-400 md:hover:bg-purple-500 transition duration-200 rounded-lg text-gray-200 uppercase text-xs font-bold "><box-icon name='edit' color="#E5E7EB" size="20px"></box-icon></router-link>
            <button class="w-full flex justify-center items-center p-2 border text-red-400 md:hover:border-transparent md:hover:bg-red-400 transition duration-200 rounded-lg md:hover:text-gray-200 uppercase text-xs font-bold border-gray-400" @click="deleteUser(person.id)"><box-icon name='trash' color="#E5E7EB" size="20px"></box-icon></button>
          </td>
        </tr>
      </table>
      </template>
      <p v-else class="text-center uppercase font-semibold text-gray-200">Nenhum usuário foi encontrado! :(</p>
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
import BackButton from '@/components/BackButton'

export default {
  components: {
    BackButton,
  },
  data () {
    return {
      searchPersonByName: '',
      searchPersonByStatus: '',
    }
  },
  computed: {
    ...mapGetters(['people']),
    searchPeople () { // A GAMBIARRA MAIS COMPLICADA E ORGANIZADA DA MINHA VIDA
      const checkIfThePersonIsActive = person => person.status === this.searchPersonByStatus
      const checkIfThereIsAPersonWithSearchFilter = person => person.name.toLowerCase().includes(this.searchPersonByName.toLowerCase())
      const checkIfThereIsAPersonWithFilterAndStatus = person => person.name.toLowerCase().includes(this.searchPersonByName.toLowerCase()) && person.status === this.searchPersonByStatus

      if (!this.searchPersonByName.trim().length && this.searchPersonByStatus === '') {
        return this.people
      } else if (this.searchPersonByName.trim().length > 0 && this.searchPersonByStatus === '') {
        return this.people.filter(checkIfThereIsAPersonWithSearchFilter)
      }

      if (this.searchPersonByName && this.searchPersonByStatus) {
        return this.people.filter(checkIfThereIsAPersonWithFilterAndStatus)
      } else if (this.searchPersonByName && !this.searchPersonByStatus) {
        return this.people.filter(checkIfThereIsAPersonWithFilterAndStatus)
      } else if (this.searchPersonByStatus) {
        return this.people.filter(checkIfThePersonIsActive)
      } else if (this.searchPersonByName) {
        return this.people.filter(checkIfThereIsAPersonWithSearchFilter)
      } else {
        return this.people.filter(checkIfThePersonIsActive)
      }
    }
  },
  methods: {
    ...mapMutations({
      deleteUser: 'DELETE_USER'
    })
  }
}
</script>
