import React from "react";
import ReactDOM from "react-dom/client";

// Creating a React element and rendering it
const externalReactHeading = React.createElement(
  'h3',
  { id: 'external-heading', xyz: 'abc' },
  'Hello World From External React!'
);
console.log('reactHeading', externalReactHeading); // Logs the React element as a JS object

const externalReactRoot = ReactDOM.createRoot(document.getElementById('external-react-root'));
externalReactRoot.render(externalReactHeading); // Renders the JS object into an HTML h3 tag

/**
 * One-Level Nesting:
 * <div id="one-level-nesting">
 *     <div id="child">
 *         <h1>I am H1 tag</h1>
 *     </div>
 * </div>
 */
const oneLevelNesting = React.createElement(
  'div',
  { id: 'one-level-nesting' },
  React.createElement(
    'div',
    { id: 'child' },
    React.createElement('h1', {}, 'I am H1 tag')
  )
);

const oneLevelNestingReactRoot = ReactDOM.createRoot(document.getElementById('one-level-nesting'));
oneLevelNestingReactRoot.render(oneLevelNesting);

/**
 * Nested Elements:
 * <div id="parent">
 *     <div id="child">
 *         <h1>I am H1 tag</h1>
 *         <h2>I am H2 tag</h2>
 *     </div>
 * </div>
 */
const nesting = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am H1 tag'),
    React.createElement('h2', {}, 'I am H2 tag'),
  ])
);

const nestingReactRoot = ReactDOM.createRoot(document.getElementById('nesting'));
nestingReactRoot.render(nesting);

/**
 * Multi-Nesting Example:
 * <div id="multi-nesting">
 *     <div id="child">
 *         <h1>I am 1st H1 tag from Multi Nesting</h1>
 *         <h2>I am 1st H2 tag from Multi Nesting</h2>
 *     </div>
 *     <div id="child2">
 *         <h1>I am 2nd H1 tag from Multi Nesting</h1>
 *         <h2>I am 2nd H2 tag from Multi Nesting</h2>
 *     </div>
 * </div>
 */
const multiNesting = React.createElement('div', { id: 'multi-nesting' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am 1st H1 tag from Multi Nesting'),
    React.createElement('h2', {}, 'I am 1st H2 tag from Multi Nesting'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'I am 2nd H1 tag from Multi Nesting'),
    React.createElement('h2', {}, 'I am 2nd H2 tag from Multi Nesting'),
  ]),
]);

const multiNestingReactRoot = ReactDOM.createRoot(document.getElementById('multi-nesting'));
multiNestingReactRoot.render(multiNesting);
