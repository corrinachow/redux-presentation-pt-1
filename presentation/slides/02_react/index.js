import declarativeExample from "raw-loader!./declarative.example";
import imperativeExample from "raw-loader!./imperative.example";
import React from "react";
import {
  BlockQuote,
  Cite,
  CodePane,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Quote,
  Slide
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import Button from "../../../assets/button";
import notes from "./notes";

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
        <Link
          textColor="secondary"
          style={{ textDecoration: "underline" }}
          href="https://reactjs.org/"
        >
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
        {
          loc: [7, 8],
          note: "Uses `color` variable to apply background colour"
        },
        {
          loc: [8, 9],
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
      <Layout>
        <Fill>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button />
          </div>
        </Fill>
        <Fill>
          <CodePane
            textSize="1.5rem"
            margin="2rem 0 2rem 0"
            source={declarativeExample}
            lang="javascript"
          />
        </Fill>
      </Layout>
      <Link
        style={{ textDecoration: "underline" }}
        textColor="secondary"
        textSize="1.5rem"
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
