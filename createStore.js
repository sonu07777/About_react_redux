import { createStore, bindActionCreators, combineReducers } from "redux";

const ADD_TODO = "add_todo";
const DELETE_TODO = "delete_todo";
const EDIT_TODO = "edit_todo";
const ADD_USER = "add_user";

function todoReducer(state = [], action) {
  if (action.type == "add_todo") {
    const todoText = action.payload.todoText;
    return [
      ...state,
      {
        text: todoText,
        isFinished: false,
        id: state.length == 0 ? 1 : state[state.length - 1].id + 1,
      },
    ];
  } else if (action.type == "delete_todo") {
    const todoId = action.payload.todoId;
    return state.filter((t) => t.id != todoId);
  } else if (action.type == "edit_todo") {
    const todo = action.payload.todo;
    const todoText = action.payload.todoText;
    return state.map((t) => {
      if (t.id == todo.id) {
        t.text = todoText;
      }
      return t;
    });
  }

  return state;
}

function userReducer(state = [], action) {
  if (action.type == ADD_USER) {
    const userName = action.payload.userName;
    return [
      ...state,
      {
        name: userName,
        id: state.length == 0 ? 1 : state[state.length - 1].id + 1,
      },
    ];
  }
  return state;
}

// combineReducers
const reducer = combineReducers({ todo: todoReducer, users: userReducer });

// If we don't  have multiple reducer we use this
// const { dispatch, subscribe, getState, replaceReducer } = createStore(todoReducer,[]);
//If we have multiple user
const { dispatch, subscribe, getState, replaceReducer } = createStore(reducer);

//action object --> action method (action creator )
const addTodo = (todoText) => ({
  type: ADD_TODO,
  payload: { todoText: todoText },
});
const deleteTodo = (id) => ({ type: DELETE_TODO, payload: { todoId: id } });
const addUser = (name) => ({ type: ADD_USER, payload: { userName: name } });

//getState:-It show the current state  //Subscribe:-after every changes of the state or dispatch method subscribe method is calling
subscribe(() => console.log(getState()));

// bind action reducer:-Instead of use multiple dispatch you just use the "BINDACTIONCREATORS"
const action = bindActionCreators({ addTodo, deleteTodo, addUser }, dispatch);

action.addTodo("todo 1");
action.addTodo("todo 2");
action.deleteTodo(2);
action.addUser("Sonu Sahoo");
