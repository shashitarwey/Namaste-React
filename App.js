// const reactHeading = React.createElement(
//   'h3',
//   { id: 'heading', xyz: 'abc' },
//   'Hello World From React!'
// );
// console.log('reactHeading', reactHeading); //JS object
// const reactRoot = ReactDOM.createRoot(document.getElementById('react-root'));
// console.log('reactRoot', reactRoot);
// reactRoot.render(reactHeading); // render method converts above JS into html h3 tag

/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am H1 tag</h1>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

// const parent = React.createElement(
//   'div',
//   { id: 'parent' },
//   React.createElement(
//     'div',
//     { id: 'child' },
//     React.createElement('h1', {}, 'I am H1 tag')
//   )
// );

// const reactRoot = ReactDOM.createRoot(document.getElementById('react-root'));
// reactRoot.render(parent);

/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am H1 tag</h1>
 *          <h2>I am H1 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

// const parent = React.createElement(
//   'div',
//   { id: 'parent' },
//   React.createElement('div', { id: 'child' }, [
//     React.createElement('h1', {}, 'I am H1 tag'),
//     React.createElement('h2', {}, 'I am H2 tag'),
//   ])
// );

// const reactRoot = ReactDOM.createRoot(document.getElementById('react-root'));
// reactRoot.render(parent);

/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am H1 tag</h1>
 *          <h2>I am H1 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I am H1 tag</h1>
 *          <h2>I am H1 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am H1 tag'),
    React.createElement('h2', {}, 'I am H2 tag'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'I am H1 tag'),
    React.createElement('h2', {}, 'I am H2 tag'),
  ]),
]);

const reactRoot = ReactDOM.createRoot(document.getElementById('react-root'));
reactRoot.render(parent);
