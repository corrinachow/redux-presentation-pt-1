Redux can be used with any UI layer (such as Angular, Vue, or plain JS), but is most commonly used with React. The official React-Redux package provides bindings between React and Redux.

The connect() function connects a React component to a Redux store by generating a wrapper "container".

**mapStateToProps** to extract needed data from the store state after every store update, and passes the data to the wrapped component.

**mapDispatchToProps** gives the wrapped component access to dispatch
