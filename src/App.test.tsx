import React from "react";
// import {render, screen} from "@testing-library/react";
import App from "./App";
import {shallow} from "enzyme";

// test("renders learn react link", () => {
//     // render(<App />);
//     // const linkElement = screen.getByText(/learn react/i);
//     // expect(linkElement).toBeInTheDocument();
// });
test("renders learn App component", () => {
    expect(shallow(<App />).length).toEqual(1);
});


// it("expect to render App component", () => {
//     expect(shallow(<App />).length).toEqual(1);
// });
