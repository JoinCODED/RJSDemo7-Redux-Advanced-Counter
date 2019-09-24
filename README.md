# RJSDemo7-Redux-Advanced

# Installing Redux Dev Tools

1. Install the [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) chrome extension

2. In `index.js`:

   ```javascript

   import {compose} from 'redux';

   ...

   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

   ...

   const store = createStore(reducer, composeEnhancers());
   ```

3. Show them the Dev Tool on the Chrome browser.

# Using Multiple Reducers

1.  Do a quick walk through of the code. Explain that the `ColorSelector` is going to change the color of the cards. Explain why this is a completely separate kind of state, unrelated to counter. Give other examples if you can.

2.  Create a `reducers` folder. Move `reducer.js` here and rename it `counter.js`.

3.  Create a `store/reducers/color.js`:

    ```javascript
    const initialState = {
      color: "white"
    };

    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case "CHANGE_COLOR":
          return {
            ...state,
            color: action.payload
          };
        default:
          return state;
      }
    };
    export default reducer;
    ```

4.  In `stores/reducers/index.js`, combine and export the reducers:

    ```javascript
    import { combineReducers } from "redux"; //STEP 1
    import counterReducer from "./counter"; //STEP 2
    import colorReducer from "./color"; // STEP 2

    //STEP 3
    const rootReducer = combineReducers({
      counterState: counterReducer,
      colorState: colorReducer
    });

    export default rootReducer;
    ```

5.  Now, in the main `index.js`, import the root reducer:

    ```javascript
    import { Provider } from "react-redux";

    import { createStore } from "redux";
    import reducer from "./store/reducers"; // STEP 1

    const store = createStore(reducer); //STEP 4

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
    registerServiceWorker();
    ```

6.  Back in `Incrementer.js`, remap the `mapStateToProps`:

    ```javascript
    const mapStateToProps = state => {
      return {
        counter: state.counterState.counter,
        color: state.colorState.color
      };
    };
    ```

7.  Use the color to change the background color:

    ```jsx
    <div className="component" style={{ backgroundColor: props.color }}>
    ```

8.  BONUS - use the color in `ColorSelector` to highlight the current color button:

    ```jsx
    const colorButtons = colors.map(color => {
      const height = color === props.color ? 20 : 10; // STEP 2
      return (
        <div
          key={color}
          className="btn"
          onClick={() => props.changeColor(color)}
          style={{ backgroundColor: color, height: height }}
        />
      );
    });
    ...
    const mapStateToProps = state => {
      return {
        color: state.colorState.color // STEP 1
      };
    };
    ...
    ```

# Tidying Up!

1. Inside the `store`, create `actions` folder. Inside `actions`:

   - `actionTypes.js`
   - `counter.js`
   - `color.js`
   - `index.js`

2. inside `actions/actionTypes.js` - keeping a single source of action strings to avoid typos and to increate organization:

   ```javascript
   export const INCREMENT = "INCREMENT";
   export const CHANGE_COLOR = "CHANGE_COLOR";
   ```

3. Setup the individual action files. By importing their action types and copying over thier functions:

   `counter.js`

   ```javascript
   import { INCREMENT } from "./actionTypes";

   export const increment = step => {
     return {
       type: INCREMENT,
       payload: step
     };
   };
   ```

   `color.js`

   ```javascript
   import { CHANGE_COLOR } from "./actionTypes";

   export const changeColor = color => {
     return {
       type: CHANGE_COLOR,
       payload: color
     };
   };
   ```

4. In `actions/index.js` combine the exporting of all of our actions from the seperate action files:

   ```javascript
   export { increment } from "./counter";
   export { changeColor } from "./color";
   ```

5. Restart the server if a module not found error is present...
