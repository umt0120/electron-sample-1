import React from 'react'
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import User from "../../src/components/User"

let container: Element = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement("div")
	document.body.appendChild(container)
})

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container)
	container.remove()
	container = null
})

it("render user data", async () => {
	const fakeUser = {
		name: "Joni Baez",
		age: "32",
		address: "123, Charming Avenue"
	}

	global.fetch = jest.fn().mockImplementationOnce(() => {
		return Promise.resolve({
			json: () => {
				return Promise.resolve(fakeUser)
			}
		})
	})

	await act(async () => {
		render(<User id="123"/>, container)
	})

	expect(container.querySelector("summary").textContent).toBe(fakeUser.name)
	expect(container.querySelector("strong").textContent).toBe(fakeUser.age)
	expect(container.textContent).toContain(fakeUser.address);

	(global.fetch as jest.Mock).mockClear()

})