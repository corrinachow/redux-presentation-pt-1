import React from "react";
import { Notes } from "spectacle";
import reduxNotes from "./redux-intro.md";
// import declarativeComponentNotes from "./declarative-component.md";
// import declativeImperativeComponentNotes from "./imperative-declarative-comparison.md";
// import declarativeButtonDemoNotes from "./declarative-button-demo.md";
import predictacleCentralisedNotes from "./predictable-centralised.md";

const reduxIntro = <Notes>{reduxNotes}</Notes>;

// const declarativeComponent = <Notes>{declarativeComponentNotes}</Notes>;

// const imperativeDeclarative = (
//   <Notes>{declativeImperativeComponentNotes}</Notes>
// );

// const declarativeButtonDemo = <Notes>{declarativeButtonDemoNotes}</Notes>;
const predictacleCentralised = <Notes>{predictacleCentralisedNotes}</Notes>;

export default {
  reduxIntro,
  predictacleCentralised
};
