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

import notes from "./notes";

import stateExample from "raw-loader!./examples/state.example";
import actionExample from "raw-loader!./examples/action.example";
import actionCreatorExample from "raw-loader!./examples/action-creator.example";
import reducerExample from "raw-loader!./examples/reducer.example";
import storeExample from "raw-loader!./examples/store.example";
import connectExample from "raw-loader!./examples/connect.example";
import providerExample from "raw-loader!./examples/provider.example";

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
  storeSlide(),
  reduxMainMethodsSlide(),
  reduxConnectSlide(),
  reduxProviderSlide(),
  reduxCounterExampleSlide()
];

function renderReduxLogo() {
  return (
    <Image
      width="75px"
      src="https://cdn-images-1.medium.com/max/1600/1*WcRnU2ERqYHZBKBQ0zXCvg.png"
    />
  );
}

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
      />
    </Slide>
  );
}

function storeSlide() {
  return (
    <Slide bgColor="surfaceColor" textColor="primary">
      {notes.store}
      <Heading size={6} textColor="primary">
        Store
      </Heading>
      <CodePane
        textSize="1.5rem"
        padding="0 0 1rem 0"
        source={storeExample}
        lang="javascript"
      />
    </Slide>
  );
}

function reduxMainMethodsSlide() {
  return (
    <Slide bgColor="surfaceColor" textColor="primary">
      {notes.action}
      <Heading size={6} textColor="primary">
        Stores have 3 main methods:
      </Heading>
      <br />
      <>
        <Appear>
          <div>
            <Heading size={6} textColor="primary">
              dispatch 🚀
            </Heading>
            <CodePane
              textSize="1.5rem"
              padding="0 0 1rem 0"
              source={`store.dispatch({ type: "ADD_TODO", text: "Go to swimming pool" });`}
              lang="javascript"
            />
          </div>
        </Appear>
        <Appear>
          <div>
            <Heading size={6} textColor="primary">
              getState 🔮
            </Heading>
            <CodePane
              textSize="1.5rem"
              padding="0 0 1rem 0"
              source={`const stateBefore = store.getState();`}
              lang="javascript"
            />
          </div>
        </Appear>
        <Appear>
          <div>
            <Heading size={6} textColor="primary">
              subscribe 📰
            </Heading>
            <CodePane
              textSize="1.5rem"
              padding="0 0 1rem 0"
              source={`store.subscribe(() => { // Callback });`}
              lang="javascript"
            />
          </div>
        </Appear>
      </>
    </Slide>
  );
}

function reduxUseSelectorSlide() {
  return (
    <Slide bgColor="surfaceColor" textColor="primary">
      {notes.reduxConnect}
      <Heading size={6} textColor="primary">
        Using Redux with React
      </Heading>
      <br />
      <Code textSize="2rem" textColor="secondary">
        {"connect()"}
      </Code>

      <CodePane
        textSize="1rem"
        padding="1rem 0 1rem 0"
        source={connectExample}
        lang="javascript"
      />
    </Slide>
  );
}

function reduxConnectSlide() {
  return (
    <Slide bgColor="surfaceColor" textColor="primary">
      {notes.reduxConnect}
      <Heading size={6} textColor="primary">
        Using Redux with React
      </Heading>
      <br />
      <Code textSize="2rem" textColor="secondary">
        {"connect()"}
      </Code>

      <CodePane
        textSize="1rem"
        padding="1rem 0 1rem 0"
        source={connectExample}
        lang="javascript"
      />
    </Slide>
  );
}

function reduxProviderSlide() {
  return (
    <Slide bgColor="surfaceColor" textColor="primary">
      {notes.reduxProvider}
      <Heading size={6} textColor="primary">
        Using Redux with React
      </Heading>
      <br />
      <Code textSize="2rem" textColor="secondary">
        {"<Provider>"}
      </Code>
      <CodePane
        textSize="1.5rem"
        padding="1rem 0 1rem 0"
        source={providerExample}
        lang="javascript"
      />
    </Slide>
  );
}

function reduxSideEffectsSlide() {
  return (
    <Slide bgColor="surfaceColor" textColor="primary">
      {notes.reduxProvider}
      <Heading size={6} textColor="primary">
        Using Redux with React
      </Heading>
      <br />
      <Code textSize="2rem" textColor="secondary">
        {"<Provider>"}
      </Code>
      <CodePane
        textSize="1.5rem"
        padding="1rem 0 1rem 0"
        source={providerExample}
        lang="javascript"
      />
    </Slide>
  );
}

function reduxExampleSlide() {
  return (
    <Slide bgColor="surfaceColor" textColor="primary">
      <Link
        textColor="secondary"
        href="https://codesandbox.io/s/strange-rgb-vbe99"
      >
        To Do App Example 🔗
      </Link>
    </Slide>
  );
}
function reduxCounterExampleSlide() {
  return (
    <Slide bgColor="surfaceColor" textColor="primary">
      <Link
        textColor="secondary"
        href="https://codesandbox.io/s/redux-counter-hooks-urtpe"
      >
        Counter App Example 🔗
      </Link>
    </Slide>
  );
}
