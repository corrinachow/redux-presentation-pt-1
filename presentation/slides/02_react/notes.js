import React from "react";
import { Notes } from "spectacle";
import reactNotes from "./react.md";
import declarativeComponentNotes from "./declarative-component.md";
import declativeImperativeComponentNotes from "./imperative-declarative-comparison.md";
import declarativeButtonDemoNotes from "./declarative-button-demo.md";
import reactSummaryNotes from "./react-summary.md";

const reactIntro = <Notes>{reactNotes}</Notes>;

const declarativeComponent = <Notes>{declarativeComponentNotes}</Notes>;

const imperativeDeclarative = (
  <Notes>{declativeImperativeComponentNotes}</Notes>
);

const declarativeButtonDemo = <Notes>{declarativeButtonDemoNotes}</Notes>;
const reactSummary = <Notes>{reactSummaryNotes}</Notes>;

export default {
  reactIntro,
  declarativeComponent,
  imperativeDeclarative,
  declarativeButtonDemo,
  reactSummary
};
