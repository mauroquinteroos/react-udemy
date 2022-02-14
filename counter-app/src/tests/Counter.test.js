import React from "react";
import { shallow } from "enzyme";
import Counter from "../Counter";

describe("Testing in <Counter/>", () => {
  test("Should <Counter/> be equal to snapshot", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Should counter value be 10", () => {
    const counter = 100;
    const wrapper = shallow(<Counter value={counter} />);
    const counterValue = Number(wrapper.find("h2").text());
    expect(counterValue).toBe(counter);
  });
});
