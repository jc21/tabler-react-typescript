import React from "react";

import TestComponent from "./TestComponent";

const TestComponentStory = {
	title: "TestComponent",
};

const Light = () => <TestComponent theme="light" />;
const Dark = () => <TestComponent theme="dark" />;

export default TestComponentStory;
export { Light, Dark };
