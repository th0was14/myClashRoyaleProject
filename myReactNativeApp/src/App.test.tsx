import * as React from "react";

import App from "./app";
import { render } from "react-native-testing-library";

it("renders without crashing", () => {
  const { getByText } = render(<App />);
  getByText("It's works !!");
});
