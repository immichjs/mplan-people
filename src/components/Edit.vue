<template>
    <div class="p-4 rounded md:max-w-7xl mx-auto">
    <div class="flex gap-4 items-center mb-4">
      <router-link to="/read" tag="div" class="w-10 h-10 flex justify-center items-center rounded-full bg-gray-700 cursor-pointer hover:bg-purple-400 transition duration-200">
        <box-icon name='left-arrow-alt' color="#E5E7EB"></box-icon>
      </router-link>
      <span class="text-gray-200 uppercase text-sm font-semibold">Atualizar uma pessoa</span>
    </div>
    <form @submit.prevent="update" class="w-full flex flex-col ">
      <div class="md:flex gap-4">
        <div class="w-full">
          <label class="text-gray-200">Nome</label>
          <input type="text" placeholder="Ex.: Daniel" class="input-field" v-model="user.name" required>
        </div>
        <div class="w-full">
          <label class="text-gray-200">Email</label>
          <input type="email" placeholder="Ex.: daniel@dev.com" class="border-red-300 input-field" v-model="user.email" required disabled>
        </div>
      </div>
      <div class="md:flex gap-4 md:mt-4">
        <div class="w-full">
          <label class="text-gray-200">Telefone</label>
          <input type="tel" pattern="[0-9]{4}-[0-9]{4}" placeholder="Tel. Ex.: 0000-0000" class="input-field" v-model="user.phone" required>
        </div>
        <div class="w-full">
          <label class="text-gray-200">Celular</label>
          <input type="tel" pattern="[0-9]{5}-[0-9]{4}" placeholder="Cel. Ex.: 00000-0000" class="input-field" v-model="user.cellphone" required>
        </div>
      </div>
      <div class="md:flex gap-4 md:mt-4">
        <div class="flex-1">
          <label class="text-gray-200">Nacionalidade</label>
          <select class="input-field" v-model="user.nationality" required>
            <option value="">Selecionar</option>
            <option value="Afghan">Afghan</option>
            <option value="Albanian">Albanian</option>
            <option value="Algerian">Algerian</option>
            <option value="American">American</option>
            <option value="Andorran">Andorran</option>
            <option value="Angolan">Angolan</option>
            <option value="Antiguans">Antiguans</option>
            <option value="Argentinean">Argentinean</option>
            <option value="Armenian">Armenian</option>
            <option value="Australian">Australian</option>
            <option value="Austrian">Austrian</option>
            <option value="Azerbaijani">Azerbaijani</option>
            <option value="Bahamian">Bahamian</option>
            <option value="Bahraini">Bahraini</option>
            <option value="Bangladeshi">Bangladeshi</option>
            <option value="Barbadian">Barbadian</option>
            <option value="Barbudans">Barbudans</option>
            <option value="Batswana">Batswana</option>
            <option value="Belarusian">Belarusian</option>
            <option value="Belgian">Belgian</option>
            <option value="Belizean">Belizean</option>
            <option value="Beninese">Beninese</option>
            <option value="Bhutanese">Bhutanese</option>
            <option value="Bolivian">Bolivian</option>
            <option value="Bosnian">Bosnian</option>
            <option value="Brazilian">Brazilian</option>
            <option value="British">British</option>
            <option value="Bruneian">Bruneian</option>
            <option value="Bulgarian">Bulgarian</option>
            <option value="Burkinabe">Burkinabe</option>
            <option value="Burmese">Burmese</option>
            <option value="Burundian">Burundian</option>
            <option value="Cambodian">Cambodian</option>
            <option value="Cameroonian">Cameroonian</option>
            <option value="Canadian">Canadian</option>
            <option value="Cape verdean">Cape Verdean</option>
            <option value="Central african">Central African</option>
            <option value="Chadian">Chadian</option>
            <option value="Chilean">Chilean</option>
            <option value="Chinese">Chinese</option>
            <option value="Colombian">Colombian</option>
            <option value="Comoran">Comoran</option>
            <option value="Congolese">Congolese</option>
            <option value="Costa rican">Costa Rican</option>
            <option value="Croatian">Croatian</option>
            <option value="Cuban">Cuban</option>
            <option value="Cypriot">Cypriot</option>
            <option value="Czech">Czech</option>
            <option value="Danish">Danish</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominican">Dominican</option>
            <option value="Dutch">Dutch</option>
            <option value="East timorese">East Timorese</option>
            <option value="Ecuadorean">Ecuadorean</option>
            <option value="Egyptian">Egyptian</option>
            <option value="Emirian">Emirian</option>
            <option value="Equatorial guinean">Equatorial Guinean</option>
            <option value="Eritrean">Eritrean</option>
            <option value="Estonian">Estonian</option>
            <option value="Ethiopian">Ethiopian</option>
            <option value="Fijian">Fijian</option>
            <option value="Filipino">Filipino</option>
            <option value="Finnish">Finnish</option>
            <option value="French">French</option>
            <option value="Gabonese">Gabonese</option>
            <option value="Gambian">Gambian</option>
            <option value="Georgian">Georgian</option>
            <option value="German">German</option>
            <option value="Ghanaian">Ghanaian</option>
            <option value="Greek">Greek</option>
            <option value="Grenadian">Grenadian</option>
            <option value="Guatemalan">Guatemalan</option>
            <option value="Guinea-bissauan">Guinea-Bissauan</option>
            <option value="Guinean">Guinean</option>
            <option value="Guyanese">Guyanese</option>
            <option value="Haitian">Haitian</option>
            <option value="Herzegovinian">Herzegovinian</option>
            <option value="Honduran">Honduran</option>
            <option value="Hungarian">Hungarian</option>
            <option value="Icelander">Icelander</option>
            <option value="Indian">Indian</option>
            <option value="Indonesian">Indonesian</option>
            <option value="Iranian">Iranian</option>
            <option value="Iraqi">Iraqi</option>
            <option value="Irish">Irish</option>
            <option value="Israeli">Israeli</option>
            <option value="Italian">Italian</option>
            <option value="Ivorian">Ivorian</option>
            <option value="Jamaican">Jamaican</option>
            <option value="Japanese">Japanese</option>
            <option value="Jordanian">Jordanian</option>
            <option value="Kazakhstani">Kazakhstani</option>
            <option value="Kenyan">Kenyan</option>
            <option value="Kittian and nevisian">Kittian and Nevisian</option>
            <option value="Kuwaiti">Kuwaiti</option>
            <option value="Kyrgyz">Kyrgyz</option>
            <option value="Laotian">Laotian</option>
            <option value="Latvian">Latvian</option>
            <option value="Lebanese">Lebanese</option>
            <option value="Liberian">Liberian</option>
            <option value="Libyan">Libyan</option>
            <option value="Liechtensteiner">Liechtensteiner</option>
            <option value="Lithuanian">Lithuanian</option>
            <option value="Luxembourger">Luxembourger</option>
            <option value="Macedonian">Macedonian</option>
            <option value="Malagasy">Malagasy</option>
            <option value="Malawian">Malawian</option>
            <option value="Malaysian">Malaysian</option>
            <option value="Maldivan">Maldivan</option>
            <option value="Malian">Malian</option>
            <option value="Maltese">Maltese</option>
            <option value="Marshallese">Marshallese</option>
            <option value="Mauritanian">Mauritanian</option>
            <option value="Mauritian">Mauritian</option>
            <option value="Mexican">Mexican</option>
            <option value="Micronesian">Micronesian</option>
            <option value="Moldovan">Moldovan</option>
            <option value="Monacan">Monacan</option>
            <option value="Mongolian">Mongolian</option>
            <option value="Moroccan">Moroccan</option>
            <option value="Mosotho">Mosotho</option>
            <option value="Motswana">Motswana</option>
            <option value="Mozambican">Mozambican</option>
            <option value="Namibian">Namibian</option>
            <option value="Nauruan">Nauruan</option>
            <option value="Nepalese">Nepalese</option>
            <option value="New zealander">New Zealander</option>
            <option value="Ni-vanuatu">Ni-Vanuatu</option>
            <option value="Nicaraguan">Nicaraguan</option>
            <option value="Nigerien">Nigerien</option>
            <option value="North korean">North Korean</option>
            <option value="Northern irish">Northern Irish</option>
            <option value="Norwegian">Norwegian</option>
            <option value="Omani">Omani</option>
            <option value="Pakistani">Pakistani</option>
            <option value="Palauan">Palauan</option>
            <option value="Panamanian">Panamanian</option>
            <option value="Papua new guinean">Papua New Guinean</option>
            <option value="Paraguayan">Paraguayan</option>
            <option value="Peruvian">Peruvian</option>
            <option value="Polish">Polish</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Qatari">Qatari</option>
            <option value="Romanian">Romanian</option>
            <option value="Russian">Russian</option>
            <option value="Rwandan">Rwandan</option>
            <option value="Saint lucian">Saint Lucian</option>
            <option value="Salvadoran">Salvadoran</option>
            <option value="Samoan">Samoan</option>
            <option value="San marinese">San Marinese</option>
            <option value="Sao tomean">Sao Tomean</option>
            <option value="Saudi">Saudi</option>
            <option value="Scottish">Scottish</option>
            <option value="Senegalese">Senegalese</option>
            <option value="Serbian">Serbian</option>
            <option value="Seychellois">Seychellois</option>
            <option value="Sierra leonean">Sierra Leonean</option>
            <option value="Singaporean">Singaporean</option>
            <option value="Slovakian">Slovakian</option>
            <option value="Slovenian">Slovenian</option>
            <option value="Solomon islander">Solomon Islander</option>
            <option value="Somali">Somali</option>
            <option value="South african">South African</option>
            <option value="South korean">South Korean</option>
            <option value="Spanish">Spanish</option>
            <option value="Sri lankan">Sri Lankan</option>
            <option value="Sudanese">Sudanese</option>
            <option value="Surinamer">Surinamer</option>
            <option value="Swazi">Swazi</option>
            <option value="Swedish">Swedish</option>
            <option value="Swiss">Swiss</option>
            <option value="Syrian">Syrian</option>
            <option value="Taiwanese">Taiwanese</option>
            <option value="Tajik">Tajik</option>
            <option value="Tanzanian">Tanzanian</option>
            <option value="Thai">Thai</option>
            <option value="Togolese">Togolese</option>
            <option value="Tongan">Tongan</option>
            <option value="Trinidadian or tobagonian">Trinidadian or Tobagonian</option>
            <option value="Tunisian">Tunisian</option>
            <option value="Turkish">Turkish</option>
            <option value="Tuvaluan">Tuvaluan</option>
            <option value="Ugandan">Ugandan</option>
            <option value="Ukrainian">Ukrainian</option>
            <option value="Uruguayan">Uruguayan</option>
            <option value="Uzbekistani">Uzbekistani</option>
            <option value="Venezuelan">Venezuelan</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Welsh">Welsh</option>
            <option value="Yemenite">Yemenite</option>
            <option value="Zambian">Zambian</option>
            <option value="Zimbabwean">Zimbabwean</option>
          </select>
        </div>
        <div class="flex-1">
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
        <div class="flex-1">
          <label class="text-gray-200">Status</label>
          <select v-model="user.status" class="input-field" required>
            <option :value="true">Ativo</option>
            <option :value="false">Inativo</option>
          </select>
        </div>
      </div>
      <div class="md:flex gap-4 md:mt-4">
      </div>
      <button class="bg-green-400 hover:bg-green-500 transition duration-200 py-3 px-10 rounded-full text-gray-200 uppercase font-semibold text-sm self-end mt-4">Atualizar</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      user: {
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
  created () {
    const originalIndex = this.people.findIndex(user => user.email === this.$route.query.email)
    if (this.$route.query.email) {
      if (this.checkIfTheUserExists === -1) {
        this.$router.push('/read')
        return
      }

      console.log(originalIndex)

      this.user = this.people[originalIndex]
    }
  },
  computed: {
    ...mapGetters(['people']),
  },
  methods: {
    ...mapActions(['updatePerson']),
    update () {
      const originalIndex = this.people.findIndex(user => user.email === this.$route.query.email)

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

      this.updatePerson({ index: originalIndex, data: this.user })

      this.user = {
        name: '',
        email: '',
        phone: '',
        cellphone: '',
        nationality: '',
        maritalStatus: '',
        status: true,
      }
      this.$routes.push('/read')
    }
  },
}
</script>

<style lang="postcss" scoped>
.input-field {
  @apply w-full p-2 bg-transparent border-b outline-none text-gray-200 focus:border-purple-400 focus:bg-gray-700 transition duration-200 tracking-wider;
}
</style>



