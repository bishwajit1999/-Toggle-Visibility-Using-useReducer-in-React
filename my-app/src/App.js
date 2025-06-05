import React, { useReducer } from "react";
import "./App.css";

// Initial state
const initialState = {
  isVisible: false,
};

// Reducer function
function visibilityReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_VISIBILITY":
      return { ...state, isVisible: !state.isVisible };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(visibilityReducer, initialState);

  return (
    <div className="app">
      <h1>Toggle Visibility App</h1>
      <button onClick={() => dispatch({ type: "TOGGLE_VISIBILITY" })}>
        Toggle Message
      </button>
      {state.isVisible && <p>Hello, World!</p>}
    </div>
  );
}

export default App;
