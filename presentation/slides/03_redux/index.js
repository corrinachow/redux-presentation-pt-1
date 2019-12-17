import React from "react";
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Code,
  Heading,
  Fit,
  Fill,
  Image,
  List,
  Link,
  ListItem,
  Layout,
  Notes,
  Quote,
  Slide,
  Text,
  CodePane,
  Horizontal
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import { Provider } from "react-redux";
import { createStore } from "redux";

import notes from "./notes";

import { TodoApp, todoAppReducers } from "../../../assets/todoApp.jsx";

import stateExample from "raw-loader!./state.example";
import actionExample from "raw-loader!./action.example";
import actionCreatorExample from "raw-loader!./action-creator.example";
import reducerExample from "raw-loader!./reducer.example";

const images = {};

export default [
  <Slide bgColor="surfaceColor" textColor="primary">
    {notes.reduxIntro}
    {renderReduxLogo()}
    <BlockQuote>
      <Quote textSize="3rem">
        "A predictable state container for JavaScript apps"
      </Quote>
      <Cite margin="0 0 0 30px">
        <Link textColor="secondary" href="https://redux.js.org/">
          Redux
        </Link>
      </Cite>
    </BlockQuote>
  </Slide>,
  predictableCentralisedSlide(),
  stateSlide(),
  actionSlide(),
  reducerSlide(),
  reduxExampleSlide()

  // MVCSlide(),
  // imperativeDeclarativeSlide(),
  // declarativeButtonWalkthroughSlide(),
  // declarativeButtonDemoSlide(),
  // reactSummarySlide()
];

function renderReduxLogo() {
  return (
    <Image
      width="75px"
      src="https://cdn-images-1.medium.com/max/1600/1*WcRnU2ERqYHZBKBQ0zXCvg.png"
    />
  );
}

// function MVCSlide() {
//   return (
//     <Slide bgColor="white" textColor="primary">
//       {notes.declarativeComponent}
//       <Heading size={6} textColor="primaryVariant">
//         React
//         {renderReactLogo()}
//       </Heading>
//       <Layout>
//         <Fill>
//           <Image height="350px" src={images.mvcDiagram} />
//         </Fill>
//         <Fill>
//           <List textColor="primaryVariant">
//             <ListItem>"V" in MVC</ListItem>
//             <ListItem>Declarative</ListItem>
//             <ListItem>Component based</ListItem>
//           </List>
//         </Fill>
//       </Layout>
//     </Slide>
//   );
// }

// function imperativeDeclarativeSlide() {
//   return (
//     <Slide bgColor="surfaceColor">
//       {notes.imperativeDeclarative}
//       <Layout>
//         <Fill>
//           <Heading size={6} textColor="primary">
//             Imperative
//           </Heading>
//           <CodePane
//             padding="0 1rem 0 0"
//             textSize="1.5rem"
//             source={imperativeExample}
//             lang="javascript"
//           ></CodePane>
//         </Fill>

//         <Fill>
//           <Heading size={6} textColor="primary">
//             Declarative
//           </Heading>
//           <CodePane
//             textSize="1.5rem"
//             padding="0 0 1rem 0"
//             source={declarativeExample}
//             lang="javascript"
//           ></CodePane>
//         </Fill>
//       </Layout>
//     </Slide>
//   );
// }

// function declarativeButtonWalkthroughSlide() {
//   return (
//     <CodeSlide
//       padding="0 1rem"
//       code={declarativeExample}
//       textColor="black"
//       textSize="2rem"
//       lang="js"
//       ranges={[
//         { loc: [0, 1], title: "Stateful Button" },
//         { loc: [1, 2], note: "Initialises state" },
//         { loc: [5, 6], note: "Displays current colour" },
//         {
//           loc: [6, 7],
//           note: "Sets an onClick event to toggle between colours"
//         }
//       ]}
//     />
//   );
// }

// function declarativeButtonDemoSlide() {
//   return (
//     <Slide bgColor="surfaceColor" textColor="primary">
//       {notes.declarativeButtonDemo}
//       <Button />
//       <CodePane
//         textSize="1.5rem"
//         margin="5rem 0 5rem 0"
//         source={declarativeExample}
//         lang="javascript"
//       />
//       <Link
//         textColor="secondary"
//         href="https://codepen.io/corrinachow/pen/xxbOKxL"
//       >
//         CodePen 🔗
//       </Link>
//     </Slide>
//   );
// }

function predictableCentralisedSlide() {
  return (
    <Slide bgColor="surfaceColor" textColor="primary">
      {notes.predictacleCentralised}
      <Heading size={6} textColor="primary">
        Predictable 🔮
      </Heading>
      <List>
        <ListItem textSize="1.5rem">Single source of truth</ListItem>
        <ListItem textSize="1.5rem">State is read-only</ListItem>
        <ListItem textSize="1.5rem">
          Changes are made with pure functions, called <b>reducers</b>
        </ListItem>
      </List>
      <Heading size={6} textColor="primary">
        Centralized 📍
      </Heading>
      <List>
        <ListItem textSize="1.5rem">
          Single store and single state tree
        </ListItem>
      </List>
    </Slide>
  );
}

function stateSlide() {
  return (
    <Slide bgColor="surfaceColor" textColor="primary">
      {notes.state}
      <Heading size={6} textColor="primary">
        State
      </Heading>
      <CodePane
        padding="0 1rem 0 0"
        textSize="1.5rem"
        source={stateExample}
        lang="javascript"
      ></CodePane>
    </Slide>
  );
}

function actionSlide() {
  return (
    <Slide bgColor="surfaceColor" textColor="primary">
      {notes.action}
      <div>
        <Heading size={6} textColor="primary">
          Action
        </Heading>
        <CodePane
          textSize="1.5rem"
          padding="0 0 1rem 0"
          source={actionExample}
          lang="javascript"
        />
      </div>

      <Appear>
        <div>
          <Heading size={6} textColor="primary">
            Action Creator
          </Heading>
          <CodePane
            textSize="1.5rem"
            padding="0 0 1rem 0"
            source={actionCreatorExample}
            lang="javascript"
          />
        </div>
      </Appear>
    </Slide>
  );
}

function reducerSlide() {
  return (
    <Slide bgColor="surfaceColor" textColor="primary">
      {notes.reducer}
      <Heading size={6} textColor="primary">
        Reducer
      </Heading>
      <CodePane
        textSize="1rem"
        padding="0 0 1rem 0"
        source={reducerExample}
        lang="javascript"
      ></CodePane>
    </Slide>
  );
}

function reduxExampleSlide() {
  <Slide>
    <Provider store={createStore(todoAppReducers)}>
      <TodoApp />
    </Provider>
  </Slide>;
}
