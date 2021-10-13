const mutations = {
  SET_USER: (state, user) => state.people.push(user),
  PERSISIST_PEOPLE: (state, people) => state.people = people,
  UPDATE_USER: (state, user) => state.people[user.index] = user.data,
  DELETE_USER: (state, email) => {
    const confirm = window.confirm('Deseja excluir permanentemente este usuário?')

    if (!confirm) {
      return
    }

    const checkIfTheUserExists = state.people.findIndex(user => user.email = email)

    if (checkIfTheUserExists !== -1) {
      state.people.splice(checkIfTheUserExists, 1)
    }

    localStorage.setItem('people', JSON.stringify(state.people))
  }
}

export default mutations
