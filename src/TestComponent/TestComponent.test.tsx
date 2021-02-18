import React from "react";

import { render } from "@testing-library/react";

import TestComponent from "./TestComponent";
import { TestComponentProps } from "./TestComponent.types";

describe("Test Component", () => {
	let props: TestComponentProps;

	beforeEach(() => {
		props = {
			theme: "light",
		};
	});

	const renderComponent = () => render(<TestComponent {...props} />);

	it("should have primary className with default props", () => {
		const { getByTestId } = renderComponent();
		const testComponent = getByTestId("test-component");
		expect(testComponent).toHaveClass("test-component-light");
	});

	it("should have secondary className with theme set as secondary", () => {
		props.theme = "dark";
		const { getByTestId } = renderComponent();
		const testComponent = getByTestId("test-component");
		expect(testComponent).toHaveClass("test-component-dark");
	});
});
