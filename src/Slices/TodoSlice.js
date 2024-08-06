import { createSlice } from "@reduxjs/toolkit";

// use date-fns library for finding upcoming dates
import { format, isToday, isFuture, parseISO } from "date-fns";

// store the data in localstorage and fetch data from there the data store in localstorage is in json format

const initialState = {
  todolist: JSON.parse(localStorage.getItem("todos")) || [],
  currtodo: null,
  filtertodo:JSON.parse(localStorage.getItem("todos")) || [],
  todoShow:'All ToDo'
};

// function use to save todos in localstorage of webrowser
const saveToLocalStorage = (state) => {
  localStorage.setItem("todos", JSON.stringify(state.todolist));
};


// todo slice contains intials state and reducers functions to perform action throughout the application
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {

    // add method to add todo and update local storage and state
    addTodo: (state, action) => {
      const { title, description, dueDate, priority } = action.payload;
      state.todolist.push({
        id: state.todolist.length + 1,
        title,
        description,
        dueDate,
        priority,
        status: "Pending",
      });
      localStorage.setItem("todos",JSON.stringify(state.todolist));
    },

    allTodo:(state)=>{
      state.filtertodo = state.todolist
    },

    // currtodo metohd to find which todo is selected
    currtodo: (state, action) => {
      const todo = action.payload.todo;

      console.log(todo);

      state.currtodo = todo;
      console.log("currtodo", state.currtodo);
    },
    // edit todo method to edit the todo and update the state
    editTodo: (state, action) => {
      const { id, title, description, dueDate, priority, status } =
        action.payload;
      state.todolist = state.todolist.map((t) => {
        if (t.id === id) {
          return { ...t, title, description, dueDate, priority, status };
        }
        return t;
      });
      saveToLocalStorage(state);
    },

    // todoFinished method to change the status of todo 


    todoFinished: (state, action) => {
      const { id, status } = action.payload;
      state.todolist = state.todolist.map((t) => {
        if (t.id === id) {
          t.status = status;
        }
        return t;
      });
      saveToLocalStorage(state);
    },

    // delete todo to delete the todo from local storage
    deleteTodo: (state, action) => {
      const todoId = action.payload.id;
      state.todolist = state.todolist.filter((t) => t.id !== todoId);
      saveToLocalStorage(state);
      state.currtodo = {}
    },


    // filter todo according to today
    filterTodayTodos: (state) => {
      state.todoShow = 'Today'
      const today = format(new Date(), "yyyy-MM-dd");
      console.log(today);
      state.filtertodo = state.todolist.filter(
        (todo) => parseISO(todo.dueDate).toISOString().slice(0, 10) === today
      );
    },

    // filter upcoming todos for future 

    filterUpcomingTodos: (state) => {
      state.todoShow = 'Upcoming'
      state.filtertodo = state.todolist.filter(
        (todo) =>
          isFuture(parseISO(todo.dueDate)) && !isToday(parseISO(todo.dueDate))
      );
    },


    // filter datewise todo
    filterDatewiseTodos: (state, action) => {
      const today = format(new Date(), "yyyy-MM-dd");
      console.log(today);
      state.todoShow = today
      const { date } = action.payload;
      state.filtertodo = state.todolist.filter(
        (todo) => parseISO(todo.dueDate).toISOString().slice(0, 10) === date
      );
    },

    // search function to search for specific todo using its title
    setSearchTerm: (state, action) => {
      const searchTerm = action.payload; 
      console.log('search',searchTerm) 
      // Create a regular expression for searching
      const regex = new RegExp(searchTerm, 'i'); 

      console.log('regex',regex)
      state.filtertodo = state.todolist.filter((todo) =>
        regex.test(todo.title)
      );
      state.todoShow = 'Search Result'
      if(searchTerm == ''){
        state.todoShow ='All ToDo'
      }
    },
  },
});

export const {
  addTodo,
  editTodo,
  todoFinished,
  deleteTodo,
  currtodo,
  filterTodayTodos,filterUpcomingTodos,allTodo,setSearchTerm
} = todoSlice.actions;
export default todoSlice.reducer;
