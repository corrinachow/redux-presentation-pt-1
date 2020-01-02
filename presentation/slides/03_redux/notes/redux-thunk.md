- Asynchronous code like HTTPS methods, and timeouts are known as **side effects**, in a Redux app, middleware provides the ability to do async work related to the store, and the async logic often lives in the action creators

- The most commonly used middleware for side effects in Redux are `redux-thunk`, which lets you pass functions to `dispatch`

- **Thunks** are useful for complex asynchronous logic such as multiple dispatches, or conditional dispatching based on store state, and simple async logic
