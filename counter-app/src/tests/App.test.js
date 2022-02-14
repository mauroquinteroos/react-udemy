import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("Testing in <App/>", () => {
  test("Should show <App/>", () => {
    const greeting = "Hello World";
    const wrapper = shallow(<App greeting={greeting} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Should show the subtitle sended by props", () => {
    const greeting = "Hello World";
    const subTitle = "App component";

    const wrapper = shallow(<App greeting={greeting} subTitle={subTitle} />);
    const subTitleText = wrapper.find("p").text();
    expect(subTitleText).toBe(subTitle);
  });
});
