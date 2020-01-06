import React from "react";
import { Notes } from "spectacle";
import reduxNotes from "./notes/redux-intro.md";
import predictacleCentralisedNotes from "./notes/predictable-centralised.md";
import reducerNotes from "./notes/reducer.md";
import stateNotes from "./notes/state.md";
import actionNotes from "./notes/action.md";
import storeNotes from "./notes/store.md";
import storeMethodsNotes from "./notes/store-methods.md";
import reduxUseSelectorNotes from "./notes/redux-useSelector.md";
import reduxConnectNotes from "./notes/redux-connect.md";
import reduxProviderNotes from "./notes/redux-provider.md";
import synchronousNotes from "./notes/redux-synchronous.md";
import thunkNotes from "./notes/redux-thunk.md";
import thunkActionCreatorNotes from "./notes/redux-thunk-action-creator.md";
import summaryNotes from "./notes/redux-summary.md";

const reduxIntro = <Notes>{reduxNotes}</Notes>;
const predictacleCentralised = <Notes>{predictacleCentralisedNotes}</Notes>;
const action = <Notes>{actionNotes}</Notes>;
const state = <Notes>{stateNotes}</Notes>;
const reducer = <Notes>{reducerNotes}</Notes>;
const store = <Notes>{storeNotes}</Notes>;
const storeMethods = <Notes>{storeMethodsNotes}</Notes>;
const reduxConnect = <Notes>{reduxConnectNotes}</Notes>;
const reduxUseSelector = <Notes>{reduxUseSelectorNotes}</Notes>;
const reduxProvider = <Notes>{reduxProviderNotes}</Notes>;
const synchronous = <Notes>{synchronousNotes}</Notes>;
const thunk = <Notes>{thunkNotes}</Notes>;
const thunkActionCreator = <Notes>{thunkActionCreatorNotes}</Notes>;
const summary = <Notes>{summaryNotes}</Notes>;

export default {
  reduxIntro,
  predictacleCentralised,
  reducer,
  state,
  action,
  store,
  storeMethods,
  reduxUseSelector,
  reduxConnect,
  reduxProvider,
  synchronous,
  thunk,
  thunkActionCreator,
  summary
};
