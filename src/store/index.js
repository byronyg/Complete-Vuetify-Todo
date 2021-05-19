import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Wake Up',
        done: false
      },
      {
        id: 2,
        title: 'Brush Teeth',
        done: false
      },
      {
        id: 3,
        title: 'Have Breakfast',
        done: false
      },
      {
        id: 4,
        title: 'Take Shower',
        done: false
      } ],
    snackbar : {
      show: true
    }
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now,
        title: newTaskTitle,
        done: false
      }
      state.tasks.push(newTask)  
    },
    doneTask(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },

    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    } 
  },
  actions: {
  },
  getters: {
  }
})
