import React from "react";
// import {render} from '@testing-library/react'
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

import Hello from "../../src/components/Hello";

let container: HTMLDivElement = null;
beforeEach(() => {
	container = document.createElement("div")
	document.body.appendChild(container)
})

afterEach(() => {
	unmountComponentAtNode(container)
	container.remove()
	container = null;
})

it('renders with or without a name', () => {
	act(() => {
		render(<Hello name={null}/>, container)
	})
	expect(container.textContent).toBe("Hey, stranger!")
	act(() => {
		render(<Hello name="Jenny"/>, container)
	})
	expect(container.textContent).toBe("Hello, Jenny!")
	act(() => {
		render(<Hello name="Margaret"/>, container)
	})
	expect(container.textContent).toBe("Hello, Margaret!")
})