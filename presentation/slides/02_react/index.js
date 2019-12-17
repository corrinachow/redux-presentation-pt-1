import React from "react";
import {
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
  CodePane
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

import notes from "./notes";

import Button from "../../../assets/button";

import declarativeExample from "raw-loader!./declarative.example";
import imperativeExample from "raw-loader!./imperative.example";

const images = {
  mvcDiagram: require("./../../../assets/mvc-diagram.png")
};

export default [
  <Slide bgColor="surfaceColor" textColor="primary">
    {notes.reactIntro}
    {renderReactLogo()}
    <BlockQuote>
      <Quote textSize="3rem">
        "A JavaScript Library for Building User Interfaces"
      </Quote>
      <Cite margin="0 0 0 30px">
        <Link textColor="secondary" href="https://reactjs.org/">
          React
        </Link>
      </Cite>
    </BlockQuote>
  </Slide>,
  MVCSlide(),
  imperativeDeclarativeSlide(),
  declarativeButtonWalkthroughSlide(),
  declarativeButtonDemoSlide(),
  reactSummarySlide()
];

function renderReactLogo() {
  return (
    <Image
      width="75px"
      src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
    />
  );
}

function MVCSlide() {
  return (
    <Slide bgColor="white" textColor="primary">
      {notes.declarativeComponent}
      <Heading size={6} textColor="primaryVariant">
        React
        {renderReactLogo()}
      </Heading>
      <Layout>
        <Fill>
          <Image height="350px" src={images.mvcDiagram} />
        </Fill>
        <Fill>
          <List textColor="primaryVariant">
            <ListItem>"V" in MVC</ListItem>
            <ListItem>Declarative</ListItem>
            <ListItem>Component based</ListItem>
          </List>
        </Fill>
      </Layout>
    </Slide>
  );
}

function imperativeDeclarativeSlide() {
  return (
    <Slide bgColor="surfaceColor">
      {notes.imperativeDeclarative}
      <Layout>
        <Fill>
          <Heading size={6} textColor="primary">
            Imperative
          </Heading>
          <CodePane
            padding="0 1rem 0 0"
            textSize="1.5rem"
            source={imperativeExample}
            lang="javascript"
          ></CodePane>
        </Fill>

        <Fill>
          <Heading size={6} textColor="primary">
            Declarative
          </Heading>
          <CodePane
            textSize="1.5rem"
            padding="0 0 1rem 0"
            source={declarativeExample}
            lang="javascript"
          ></CodePane>
        </Fill>
      </Layout>
    </Slide>
  );
}

function declarativeButtonWalkthroughSlide() {
  return (
    <CodeSlide
      padding="0 1rem"
      code={declarativeExample}
      textSize="2rem"
      lang="javascript"
      ranges={[
        { loc: [0, 1], title: "Stateful Button" },
        { loc: [1, 2], note: "Initialises state" },
        { loc: [5, 6], note: "Displays current colour" },
        {
          loc: [6, 7],
          note: "Sets an onClick event to toggle between colours"
        }
      ]}
    />
  );
}

function declarativeButtonDemoSlide() {
  return (
    <Slide bgColor="surfaceColor" textColor="primary">
      {notes.declarativeButtonDemo}
      <Button />
      <CodePane
        textSize="1.5rem"
        margin="5rem 0 5rem 0"
        source={declarativeExample}
        lang="javascript"
      />
      <Link
        textColor="secondary"
        href="https://codepen.io/corrinachow/pen/xxbOKxL"
      >
        CodePen 🔗
      </Link>
    </Slide>
  );
}

function reactSummarySlide() {
  return (
    <Slide bgColor="surfaceColor" textColor="primary">
      {notes.reactSummary}
      <Heading size={6} textColor="primary">
        Declarative Rendering 🗣
      </Heading>
      <List>
        <ListItem textSize="1.5rem">
          <code>render</code> returns <i>descriptions</i> of what the UI should
          look like now
        </ListItem>
        <ListItem textSize="1.5rem">
          React uses those descriptions to update the UI efficiently
        </ListItem>
      </List>
      <Heading size={6} textColor="primary">
        One-Way Data Flow ⤵️
      </Heading>
      <List>
        <ListItem textSize="1.5rem">
          Components pass data to their children
        </ListItem>
        <ListItem textSize="1.5rem">Predictable top-down data flow</ListItem>
      </List>
    </Slide>
  );
}
