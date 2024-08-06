import { createSlice } from "@reduxjs/toolkit";
import { format, isToday, isFuture, parseISO } from "date-fns";
const initialState = {
  todolist: JSON.parse(localStorage.getItem("todos")) || [],
  currtodo: null,
  filtertodo:JSON.parse(localStorage.getItem("todos")) || [],
  todoShow:'All ToDo'
};

const saveToLocalStorage = (state) => {
  localStorage.setItem("todos", JSON.stringify(state.todolist));
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
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
      saveToLocalStorage(state);
    },

    currtodo: (state, action) => {
      const todo = action.payload.todo;

      console.log(todo);

      state.currtodo = todo;

      console.log("currtodo", state.currtodo);
    },

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

    deleteTodo: (state, action) => {
      const todoId = action.payload.id;
      state.todolist = state.todolist.filter((t) => t.id !== todoId);
      saveToLocalStorage(state);
    },

    filterTodayTodos: (state) => {
      state.todoShow = 'Today'
      const today = format(new Date(), "yyyy-MM-dd");
      console.log(today);
      state.filtertodo = state.todolist.filter(
        (todo) => parseISO(todo.dueDate).toISOString().slice(0, 10) === today
      );
    },

    filterUpcomingTodos: (state) => {
      state.todoShow = 'Upcoming'
      state.filtertodo = state.todolist.filter(
        (todo) =>
          isFuture(parseISO(todo.dueDate)) && !isToday(parseISO(todo.dueDate))
      );
    },

    filterDatewiseTodos: (state, action) => {
      const today = format(new Date(), "yyyy-MM-dd");
      console.log(today);
      state.todoShow = today
      const { date } = action.payload;
      state.filtertodo = state.todolist.filter(
        (todo) => parseISO(todo.dueDate).toISOString().slice(0, 10) === date
      );
    },
  },
});

export const {
  addTodo,
  editTodo,
  todoFinished,
  deleteTodo,
  currtodo,
  filterTodayTodos,filterUpcomingTodos
} = todoSlice.actions;
export default todoSlice.reducer;
