import React, { Component } from "react";

interface Props {
  favouriteFood: string;
}

class LifeCycleMethods extends Component<Props> {
  constructor(props:Props) {
    super(props);
    this.state = { favoriteFood: "rice" };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only re-render if the favoriteFood state has changed
    return this.state.favoriteFood !== nextState.favoriteFood;
  }

  changeFood = () => {
    this.setState({ favoriteFood: "Pizza" });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Food is {this.state.favoriteFood}</h1>
        <button type="button" onClick={this.changeFood}>
          Change food
        </button>
      </div>
    );
  }
}

export default LifeCycleMethods;
