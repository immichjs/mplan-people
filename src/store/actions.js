const actions = {
  async addNewPerson ({ commit, state }, user) {
    await commit('SET_USER', user)
    alert('Adicionado(a) com sucesso.')

    localStorage.setItem('people', JSON.stringify(state.people))
  },
  async updatePerson ({ commit, state }, user) {
    await commit('UPDATE_USER', user)
    alert('Atualizado(a) com sucesso.')

    localStorage.setItem('people', JSON.stringify(state.people))
  }
}

export default actions
