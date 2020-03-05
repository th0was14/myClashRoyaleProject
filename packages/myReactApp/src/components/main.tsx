import React from "react";
import { FormContainer } from "old/FormContainer";

export class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const element = <h1>Hello, Welcome to the Main page</h1>;
    return (
      <div>
        {element}
        <FormContainer />
      </div>
    );
  }
}
