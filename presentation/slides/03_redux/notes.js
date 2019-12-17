import React from "react";
import { Notes } from "spectacle";
import reduxNotes from "./redux-intro.md";
// import declarativeComponentNotes from "./declarative-component.md";
// import declativeImperativeComponentNotes from "./imperative-declarative-comparison.md";
// import declarativeButtonDemoNotes from "./declarative-button-demo.md";
import predictacleCentralisedNotes from "./predictable-centralised.md";
import reducerNotes from "./reducer.md";
import stateNotes from "./state.md";
import actionNotes from "./action.md";

const reduxIntro = <Notes>{reduxNotes}</Notes>;
const predictacleCentralised = <Notes>{predictacleCentralisedNotes}</Notes>;
const action = <Notes>{actionNotes}</Notes>;
const state = <Notes>{stateNotes}</Notes>;
const reducer = <Notes>{reducerNotes}</Notes>;

export default {
  reduxIntro,
  predictacleCentralised,
  reducer,
  state,
  action
};
