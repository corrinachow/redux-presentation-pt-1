All state update logic is handled by functions called **reducers**. They're smaller functions that can be componsed into larger functions

Reducers should be _pure functions_, with no side effects. They should rely on inputs, and not affect anythign external. Reducers need to update data immutably by making copies of the current state before returning them
