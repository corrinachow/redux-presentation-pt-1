**Single source of truth**: The state of your whole application is stored as a tree of objects and arrays within a single store

**State is read-only**: The only way to change the state is to dispatch an **action**, an object describing what happened

**Changes are made with pure functions**: All state updates are performed by pure functions called **reducers**, which are `(state, action) => newState`

Logging of all updates, API handling, state persistence, error reports with full snapshots of app state, etc
