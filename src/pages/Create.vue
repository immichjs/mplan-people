<template>
  <div class="p-4 rounded md:max-w-7xl mx-auto h-full">
    <BackButton path="/">
      <span class="text-gray-200 uppercase text-sm font-semibold">Cadastrar uma pessoa</span>
    </BackButton>

    <div class="flex items-center mt-8">
      <h1 class="text-md text-gray-200 uppercase font-semibold">Preencha todas as informações abaixo</h1>
      <box-icon name='chevron-right' color="#E5E7EB"></box-icon>
    </div>

    <form @submit.prevent="addPerson" class="w-full flex flex-col mt-2">
      <div class="md:flex gap-4">
        <div class="w-full mt-2">
          <label class="text-gray-200 font-medium uppercase text-sm ml-16">Nome</label>
          <div class="flex h-12 items-center mt-1">
            <div class="flex items-center bg-purple-400 rounded-tl-lg p-4 rounded-bl-lg h-full">
              <box-icon name='user' color="#E5E7EB"></box-icon>
            </div>
            <input type="text" placeholder="Ex.: Daniel" class="input-field" v-model="user.name" required>
          </div>
        </div>
        <div class="w-full mt-2">
          <label class="text-gray-200 font-medium uppercase text-sm ml-16">Email</label>
          <div class="flex h-12 items-center mt-1">
            <div class="flex items-center bg-purple-400 rounded-tl-lg p-4 rounded-bl-lg h-full">
              <box-icon name='envelope' color="#E5E7EB"></box-icon>
            </div>
            <input type="email" placeholder="Ex.: daniel@dev.com" class="input-field" v-model="user.email" required>
          </div>
        </div>
      </div>
      <div class="md:flex gap-4 md:mt-4">
        <div class="w-full mt-2">
          <label class="text-gray-200 font-medium uppercase text-sm ml-16">Telefone</label>
          <div class="flex h-12 items-center mt-1">
            <div class="flex items-center bg-purple-400 rounded-tl-lg p-4 rounded-bl-lg h-full">
              <box-icon name='phone' color="#E5E7EB"></box-icon>
            </div>
            <input type="tel" pattern="[0-9]{4}-[0-9]{4}" placeholder="Tel. Ex.: 0000-0000" class="input-field" v-model="user.phone" required>
          </div>
        </div>
        <div class="w-full mt-2">
          <label class="text-gray-200 font-medium uppercase text-sm ml-16">Celular</label>
          <div class="flex h-12 items-center mt-1">
            <div class="flex items-center bg-purple-400 rounded-tl-lg p-4 rounded-bl-lg h-full">
              <box-icon name='mobile-alt' color="#E5E7EB"></box-icon>
            </div>
            <input type="tel" pattern="[0-9]{5}-[0-9]{4}" placeholder="Cel. Ex.: 00000-0000" class="input-field" v-model="user.cellphone" required>
          </div>
        </div>
      </div>
      <div class="md:flex gap-4 md:mt-4">
        <div class="flex-1 mt-2">
          <label class="text-gray-200 font-medium uppercase text-sm ml-16">Nacionalidade</label>
          <div class="flex h-12 items-center mt-1">
            <div class="flex items-center bg-purple-400 rounded-tl-lg p-4 rounded-bl-lg h-full">
              <box-icon name='globe' color="#E5E7EB"></box-icon>
            </div>
            <select class="input-field" v-model="user.nationality" required>
              <option value="">Selecionar</option>
              <option v-for="(nationality, index) in nationalities" :key="index" :value="nationality">{{ nationality }}</option>
            </select>
          </div>
        </div>
        <div class="flex-1 mt-2">
          <label class="text-gray-200 font-medium uppercase text-sm ml-16">Estado civil</label>
          <div class="flex h-12 items-center mt-1">
            <div class="flex items-center bg-purple-400 rounded-tl-lg p-4 rounded-bl-lg h-full">
              <box-icon name='donate-heart' color="#E5E7EB"></box-icon>
            </div>
            <select class="input-field" v-model="user.maritalStatus" required>
              <option value="" disabled selected>Selecionar</option>
              <option value="Solteiro" class="bg-gray-800 border-none">Solteiro(a)</option>
              <option value="Casado" class="bg-gray-800">Casado(a)</option>
              <option value="Separado" class="bg-gray-800">Separado(a)</option>
              <option value="Divorciado" class="bg-gray-800">Divorciado(a)</option>
              <option value="Viúvo" class="bg-gray-800">Viúvo(a)</option>
            </select>
          </div>
        </div>
        <div class="flex-1 mt-2">
          <label class="text-gray-200 font-medium uppercase text-sm ml-16">Status</label>
          <div class="flex h-12 items-center mt-1">
            <div class="flex items-center bg-purple-400 rounded-tl-lg p-4 rounded-bl-lg h-full">
              <box-icon name='stats' color="#E5E7EB"></box-icon>
            </div>
            <select v-model="user.status" class="input-field" required>
              <option :value="true">Ativo</option>
              <option :value="false">Inativo</option>
            </select>
          </div>
        </div>
      </div>
      <div class="md:flex gap-4 md:mt-4">
      </div>
      <button class="bg-purple-400 hover:bg-purple-500 transition duration-200 py-4 px-16 rounded-lg text-gray-200 uppercase font-semibold text-sm self-end mt-4">Atualizar</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import BackButton from '@/components/BackButton'

export default {
  components: {
    BackButton,
  },
  data () {
    return {
      user: {
        id: 1,
        nationality: '',
        maritalStatus: '',
        status: true,
      }
    }
  },
  computed: {
    ...mapGetters(['people', 'nationalities'])
  },
  methods: {
    ...mapActions(['addNewPerson']),
    addPerson () {
      if (
        !this.user.name.trim().length
        || !this.user.email.trim().length
        || !this.user.phone.trim().length
        || !this.user.cellphone.trim().length
        || !this.user.nationality.trim().length
        || !this.user.maritalStatus.trim().length
      ) {
        alert('Verifique se todos os campos estão preenchidos.')
        return
      }

      const checkIfTheUserExists = this.people.findIndex(user => user.email === this.user.email)

      if (checkIfTheUserExists !== -1) {
        alert('Esse email já está registrado.')
        return
      }

      this.user.name = this.user.name.trim()
      this.user.email = this.user.email.trim().toLowerCase()
      this.user.phone = this.user.phone.trim()
      this.user.cellphone = this.user.cellphone.trim()

      this.addNewPerson(this.user)

      this.user = {
        id: 1,
        name: '',
        email: '',
        phone: '',
        cellphone: '',
        nationality: '',
        maritalStatus: '',
        status: true,
      }
    }
  },
}
</script>

<style lang="postcss" scoped>
.input-field {
  @apply w-full p-2 px-4 bg-transparent border border-l-0 rounded-tr-lg rounded-br-lg border-gray-600 h-full outline-none text-gray-200 focus:border-purple-400 focus:bg-gray-700 transition duration-200 tracking-wider font-medium;
}
</style>
