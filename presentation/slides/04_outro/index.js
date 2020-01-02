import React from "react";
import {
  Slide,
  Heading,
  Text,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Fill,
  MarkdownSlides
} from "spectacle";
import notes from "./notes";
import resourceMarkdown from "./resources.md";

export default [
  <Slide bgColor="surfaceColor" align="flex-start center">
    {/* {notes.resources} */}
    <Heading size={6} textColor="primary">
      Resources
    </Heading>
    <Layout>
      <Fill>
        <h3>Official Info</h3>
        <List>
          <ListItem textColor="primary" textSize="1.5rem">
            <Link
              style={{ textDecoration: "underline" }}
              textSize="1.5rem"
              textColor="secondary"
              href="https://reactjs.org/"
            >
              React documentation
            </Link>
          </ListItem>
          <ListItem textColor="primary" textSize="1.5rem">
            <Link
              style={{ textDecoration: "underline" }}
              textSize="1.5rem"
              textColor="secondary"
              href="https://redux.js.org/"
            >
              Redux documentation
            </Link>
          </ListItem>
        </List>
        <h3>Other Resources</h3>
        <List>
          <ListItem textColor="primary" textSize="1.5rem">
            <Link
              style={{ textDecoration: "underline" }}
              textSize="1.5rem"
              textColor="secondary"
              href="https://github.com/markerikson/react-redux-links"
            >
              React/Redux links
            </Link>
          </ListItem>
          <ListItem textColor="primary" textSize="1.5rem">
            <Link
              style={{ textDecoration: "underline" }}
              textSize="1.5rem"
              textColor="secondary"
              href="https://medium.com/createdd-notes/understanding-mvc-architecture-with-react-6cd38e91fefd"
            >
              Understand MVC Architecture with React
            </Link>
          </ListItem>
        </List>
      </Fill>
      <Fill>
        <h3>Presentation Materials</h3>
        <List>
          <ListItem textColor="primary" textSize="1.5rem">
            <Link
              style={{ textDecoration: "underline" }}
              textSize="1.5rem"
              textColor="secondary"
              href="https://blog.isquaredsoftware.com/presentations/2017-02-react-redux-intro"
            >
              React-Redux Intro, &nbsp;
            </Link>
            Mark Erikson
          </ListItem>
          <ListItem textColor="primary" textSize="1.5rem">
            <Link
              style={{ textDecoration: "underline" }}
              textSize="1.5rem"
              textColor="secondary"
              href="https://elijahmanor.com/talks/react-to-the-future/dist/#/slide/0/0"
            >
              React to the Future, &nbsp;
            </Link>
            by Elijah Manor
          </ListItem>
          <ListItem textColor="primary" textSize="1.5rem">
            <Link
              style={{ textDecoration: "underline" }}
              textSize="1.5rem"
              textColor="secondary"
              href="http://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/"
            >
              Redux: From Twitter Hype to Production, &nbsp;
            </Link>
            by Jenya Terpil
          </ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
];
