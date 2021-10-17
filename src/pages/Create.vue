<template>
  <div class="p-4 rounded md:max-w-7xl mx-auto h-full">
    <div class="flex gap-4 items-center mb-4">
      <router-link to="/" tag="div" class="w-10 h-10 flex justify-center items-center rounded-full bg-gray-700 cursor-pointer hover:bg-purple-400 transition duration-200">
        <box-icon name='left-arrow-alt' color="#E5E7EB"></box-icon>
      </router-link>
      <span class="text-gray-200 uppercase text-sm font-semibold">Adicionar uma pessoa</span>
    </div>
    <form @submit.prevent="addPerson" class="w-full flex flex-col ">
      <div class="md:flex gap-4">
        <div class="w-full mt-2">
          <label class="text-gray-200">Nome</label>
          <input type="text" placeholder="Ex.: Daniel" class="input-field" v-model="user.name" required>
        </div>
        <div class="w-full mt-2">
          <label class="text-gray-200">Email</label>
          <input type="email" placeholder="Ex.: daniel@dev.com" class="input-field" v-model="user.email" required>
        </div>
      </div>
      <div class="md:flex gap-4 md:mt-4">
        <div class="w-full mt-2">
          <label class="text-gray-200">Telefone</label>
          <input type="tel" pattern="[0-9]{4}-[0-9]{4}" placeholder="Tel. Ex.: 0000-0000" class="input-field" v-model="user.phone" required>
        </div>
        <div class="w-full mt-2">
          <label class="text-gray-200">Celular</label>
          <input type="tel" pattern="[0-9]{5}-[0-9]{4}" placeholder="Cel. Ex.: 00000-0000" class="input-field" v-model="user.cellphone" required>
        </div>
      </div>
      <div class="md:flex gap-4 md:mt-4">
        <div class="flex-1 mt-2">
          <label class="text-gray-200">Nacionalidade</label>
          <select class="input-field" v-model="user.nationality" required>
            <option value="">Selecionar</option>
            <option v-for="(nationality, index) in nationalities" :key="index" :value="nationality">{{ nationality }}</option>
          </select>
        </div>
        <div class="flex-1 mt-2">
          <label class="text-gray-200">Estado civil</label>
          <select class="input-field" v-model="user.maritalStatus" required>
            <option value="" disabled selected>Selecionar</option>
            <option value="Solteiro" class="bg-gray-800 border-none">Solteiro(a)</option>
            <option value="Casado" class="bg-gray-800">Casado(a)</option>
            <option value="Separado" class="bg-gray-800">Separado(a)</option>
            <option value="Divorciado" class="bg-gray-800">Divorciado(a)</option>
            <option value="Viúvo" class="bg-gray-800">Viúvo(a)</option>
          </select>
        </div>
        <div class="flex-1 mt-2">
          <label class="text-gray-200">Status</label>
          <select v-model="user.status" class="input-field" required>
            <option :value="true">Ativo</option>
            <option :value="false">Inativo</option>
          </select>
        </div>
      </div>
      <div class="md:flex gap-4 md:mt-4">
      </div>
      <button class="bg-purple-400 hover:bg-purple-500 transition duration-200 py-3 px-10 rounded-full text-gray-200 uppercase font-semibold text-sm self-end mt-4">Adicionar</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
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
  @apply w-full p-2 bg-transparent border-b outline-none text-gray-200 focus:border-purple-400 focus:bg-gray-700 transition duration-200 tracking-wider;
}
</style>
