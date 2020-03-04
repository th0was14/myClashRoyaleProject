import * as React from "react";

import App from "./App";
import { render } from "react-native-testing-library";

it("renders without crashing", () => {
  const { getByText } = render(<App />);
  getByText("It's works !!");
});
