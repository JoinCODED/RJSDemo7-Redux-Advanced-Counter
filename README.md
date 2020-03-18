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

2.  Create a `redux/reducers` folder. Move `reducer.js` here and rename it `counter.js`.

3.  Create a `redux/reducers/color.js`:

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

4.  In `redux/reducers/index.js`, combine and export the reducers:

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

5.  Add a `redux/index.js` file which takes the store composition from the main `index.js` and returns a `store`:

    ```javascript
    import { createStore, compose } from "redux";

    import reducer from "./reducers";

    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, composeEnhancers());

    export default store;
    ```

6.  Now, in the main `index.js`, import the store:

    ```javascript
    import { Provider } from "react-redux";

    import store from "./redux"; // STEP 1

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
    registerServiceWorker();
    ```

7.  Back in `Incrementer.js`, remap the `mapStateToProps`:

    ```javascript
    const mapStateToProps = state => {
      return {
        counter: state.counterState.counter,
        color: state.colorState.color
      };
    };
    ```

8.  Use the color to change the background color:

    `Incrementer.js`

    ```jsx
    <div className="component" style={{ backgroundColor: props.color }}>
    ```

9.  BONUS - use the color in `ColorButton.js` to highlight the current color button:

    ```jsx
    const ColorButton = props => {
      const color = props.color;
      const isCurrent = color === props.currentColor;
      const height = isCurrent ? 20 : 10;
      return (
        <div
          key={color}
          className="btn"
          onClick={() => props.changeColor(color)}
          style={{ backgroundColor: color, height: height }}
        />
      );
    };
    ...
    const mapStateToProps = state => {
      return {
        currentColor: state.colorState.color // STEP 1
      };
    };
    ...
    ```

10. MEGABONUS - show the power of `mapStateToProps`:

    ```jsx
    const ColorButton = props => {
      const color = props.color;
      const height = props.isCurrent ? 20 : 10;
      return (
        <div
          key={color}
          className="btn"
          onClick={() => props.changeColor(color)}
          style={{ backgroundColor: color, height: height }}
        />
      );
    };
    ...
    const mapStateToProps = (state, ownProps) => {
      return {
        isCurrent: state.colorState.color === ownProps.color// STEP 1
      };
    };
    ...
    ```

    OR EVEN

    ```jsx
    const ColorButton = props => {
      const color = props.color;
      const height = props.height
      return (
        <div
          key={color}
          className="btn"
          onClick={() => props.changeColor(color)}
          style={{ backgroundColor: color, height: height }}
        />
      );
    };
    ...
    const mapStateToProps = (state, ownProps) => {
      const isCurrent = state.colorState.color === ownProps.color
      return {
        height: isCurrent ? 20 : 10
      };
    };
    ...
    ```

# Tidying Up!

1. Inside the `redux` directory, create `actions` folder. Inside `actions`:

   - `actionTypes.js`
   - `counter.js`
   - `color.js`
   - `index.js`

2. Copy over the action functions from `actionCreators.js` to `counter.js` and `color.js`.

3. In `actions/index.js` combine the exporting of all of our actions from the seperate action files:

   ```javascript
   export { increment } from "./counter";
   export { changeColor } from "./color";
   ```

   You should be able to delete `actions.js` now.
   Restart the server if a "module not found error" is present.

4. inside `actions/actionTypes.js` - keeping a single source of action strings to avoid typos and to improve organization:

   ```javascript
   export const INCREMENT = "INCREMENT";
   export const CHANGE_COLOR = "CHANGE_COLOR";
   ```

5. Import the action types into their respective files and use them:

   `actions/counter.js`

   ```javascript
   import { INCREMENT } from "./actionTypes";

   export const increment = step => {
     return {
       type: INCREMENT,
       payload: step
     };
   };
   ```

   `actions/color.js`

   ```javascript
   import { CHANGE_COLOR } from "./actionTypes";

   export const changeColor = color => {
     return {
       type: CHANGE_COLOR,
       payload: color
     };
   };
   ```

6. Also import and use the action types in the reducers:

   `reducers/counter.js`

   ```javascript
   import { INCREMENT } from "../actions/actionTypes"; // Step 1

   const initialState = {
     counter: 0
   };

   const reducer = (state = initialState, action) => {
     switch (action.type) {
       case INCREMENT: // Step 2
         return {
           ...state,
           counter: state.counter + action.payload
         };
       default:
         return state;
     }
   };
   ```

   `reducers/color.js`

   ```javascript
   import { CHANGE_COLOR } from "../actions/actionTypes"; // Step 1

   const initialState = {
     color: "white"
   };

   export default (state = initialState, action) => {
     switch (action.type) {
       case CHANGE_COLOR: // Step 2
         return {
           ...state,
           color: action.payload
         };
       default:
         return state;
     }
   };
   ```
