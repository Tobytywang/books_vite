import { defineStore } from "pinia";
import books from "/src/data/books.json";

const useMainStore = defineStore("main", {
  state: () => {
    return books;
  },
  getters: {
    getSpecificTypeBooks: (state) => (type: string) => {
      console.log('hello')
      if (type == "/") {
        return books;
      }
      if (type == "/current") {
        return books;
      }
      const ret = { books: new Array() };
      for (let i = 0; i < state.books.length; i++) {
        if (type.includes(state.books[i].type)) {
          ret.books.push(state.books[i]);
        }
      }
      return ret;
    }
  },
  actions: {
  }
  // getters: {
  //   getSpecificTypeBooks: (state, getters) => (type: string) => {
  //     // console.log('hello')
  //     // console.log(type)
  //     // console.log(state.books)
  //     // console.log(type)
  //     if (type == "/") {
  //       return books;
  //     }
  //     if (type == "/current") {
  //       return books;
  //     }
  //     const ret = { books: new Array() };
  //     for (let i = 0; i < state.books.length; i++) {
  //       if (type.includes(state.books[i].type)) {
  //         // console.log(state.books[i].type)
  //         ret.books.push(state.books[i]);
  //       }
  //     }
  //     // console.log(ret)
  //     return ret;
  //   },
  // },
  // actions: {},
  // modules: {},
  // // mutations: {
  // //     increment (state) {
  // //         state.count++
  // //     }
  // // }
});

export default useMainStore;
