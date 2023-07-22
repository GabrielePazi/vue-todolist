"use strict"

Vue.createApp({
  data() {
    return {
      toDoList: [
        {
          id: 101,
          text: "Fai la spesa",
          done: false
        }, {
          id: 102,
          text: "Porta fuori il cane",
          done: false
        }, {
          id: 103,
          text: "Vai in palestra",
          done: false
        }, {
          id: 104,
          text: "Chiama mamma",
          done: false
        }
      ],
      newTask: ""
    }
  },
  methods: {
    changeDoneValue(i) {
      const newToDoList = [...this.toDoList]

      newToDoList[i].done = !this.toDoList[i].done
      return
    },
    deleteToDoItem(itemToDeleteId) {
      const newToDoList = []

      for (let i = 0; i < this.toDoList.length; i++) {
        if (this.toDoList[i].id !== itemToDeleteId) {
          newToDoList.push(this.toDoList[i])
        }
      }

      this.toDoList = [...newToDoList]
      return
    },
    addNewTask() {
      const newItemId = this.toDoList[this.toDoList.length - 1].id + 1

      const newToDoItem = {
        id: newItemId,
        text: this.newTask,
        done: false
      }

      this.toDoList.push(newToDoItem)

      this.newTask = ""
      return
    }
  }
}).mount('#app')