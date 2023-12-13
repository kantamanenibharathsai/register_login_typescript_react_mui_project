import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";
import LifeCycleMethods from "./lifecyclemethods";

// interface AppComponentProps {
//   favouriteFood: string;
// }

function App() {
  return (
    // <>
    //   <Signup />
    //   <Signin />
    // </>
    <LifeCycleMethods favouriteFood="curd" />
  );
}

export default App;
