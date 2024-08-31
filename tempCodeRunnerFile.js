
    ];
  }
  return state
}

// combineReducers
const reducer = combineReducers({ todo: todoReducer, user: userReducer })


//action object --> action method (action creator )
const addTodo = (todoText) => ({type: ADD_TODO,payload: { todoText: todoText }})
const deleteTodo = (id) => ({ type: DELETE_TODO, payload: { todoId: id } });

const { dispatch, subscribe, getState, replaceReducer } = createStore(reducer)

// subscribe
subscribe(() => console.log("the states are ", getState())); //after every changes of the state or dispatch method subscribe method is calling

// bind action reducer
const action = bindActionCreators({ addTodo, deleteTodo }, dispatch);

action.addTodo("todo 1");
action.addTodo("todo 2");
action.deleteTodo(2);
