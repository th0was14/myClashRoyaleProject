import { render } from "@testing-library/react";
import * as React from "react";
import { CardClash } from "components/PlayerClash/Card/CardClash";

describe("test story", () => {
  it("test", () => {
    // arrange

    // act
    const { getByText } = render(<CardClash icon="test" level={2} />);
    // assert
    getByText("2");
  });
});
