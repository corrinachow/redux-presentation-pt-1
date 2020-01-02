Redux can be used with any UI layer (such as Angular, Vue, or plain JS), but is most commonly used with React. The official React-Redux package provides bindings between React and Redux.

The `useSelector()` function allows you to extract data from the Redux store state

You may call useSelector() multiple times within a single function component. Each call to useSelector() creates an individual subscription to the Redux store

`useSelector()` only forces a re-render if the selector result appears to be different than the last result.
