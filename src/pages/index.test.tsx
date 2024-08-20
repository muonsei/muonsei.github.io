import { render } from "@testing-library/react";
import React from "react";
import HelloWorld from "./index";

test("Displays the correct title", () => {
    const { getByTestId } = render(<HelloWorld />);
    expect(getByTestId("hello")).toHaveTextContent("Hello world!");
});
