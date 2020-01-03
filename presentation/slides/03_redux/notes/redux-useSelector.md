The `useSelector()` function allows you to extract data from the Redux store state

You may call useSelector() multiple times within a single function component. Each call to useSelector() creates an individual subscription to the Redux store

`useSelector()` only forces a re-render if the selector result appears to be different than the last result.
