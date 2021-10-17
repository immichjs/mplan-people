const mutations = {
  SET_USER: (state, user) => {
    user.id = state.people.length > 0 ? state.people[state.people.length - 1].id + 1 : user.id
    state.people.push(user)
  },
  PERSISIST_PEOPLE: (state, people) => state.people = people,
  UPDATE_USER: (state, user) => state.people[user.index] = user.data,
  DELETE_USER: (state, id) => {
    const confirm = window.confirm('Deseja excluir permanentemente este usuário?')

    if (!confirm) {
      return
    }

    const checkIfTheUserExists = state.people.findIndex(user => user.id = id)

    if (checkIfTheUserExists !== -1) {
      state.people.splice(checkIfTheUserExists, 1)
    }

    localStorage.setItem('people', JSON.stringify(state.people))
  }
}

export default mutations
