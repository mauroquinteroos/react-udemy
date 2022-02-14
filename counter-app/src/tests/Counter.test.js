import React from "react";
import { shallow } from "enzyme";
import Counter from "../Counter";

describe("Testing in <Counter/>", () => {
  let wrapper = shallow(<Counter />);

  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  test("Should <Counter/> be equal to snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should counter value be 10", () => {
    const counter = 100;
    const wrapper = shallow(<Counter value={counter} />);
    const counterValue = Number(wrapper.find("h2").text());
    expect(counterValue).toBe(counter);
  });

  test("Should add +1 with the button add", () => {
    wrapper.find(".add").simulate("click");
    let counterText = wrapper.find("h2").text();
    expect(counterText).toBe("11");
  });

  test("Should add -1 with the button subtract", () => {
    wrapper.find(".subtract").simulate("click");
    let counterText = wrapper.find("h2").text();
    expect(counterText).toBe("9");
  });

  test("Should reset with the button reset", () => {
    const counter = 100;
    const wrapper = shallow(<Counter value={counter} />);
    wrapper.find(".add").simulate("click");
    wrapper.find(".reset").simulate("click");
    let counterText = Number(wrapper.find("h2").text());
    expect(counterText).toBe(counter);
  });
});
