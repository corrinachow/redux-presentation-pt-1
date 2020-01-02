In a Redux app, middleware provides the ability to do async work related to the store, and the async logic often lives in the action creators

The most commonly used middleware for side effects in Redux are `redux-thunk`, which lets you pass functions to `dispatch`
