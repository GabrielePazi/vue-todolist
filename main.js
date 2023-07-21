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
      ]
    }
  }
}).mount('#app')