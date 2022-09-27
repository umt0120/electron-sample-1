import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";


import Contact from "../../src/components/Contact";
import {MapProps, Map as MockedMap} from "../../src/components/Map";

jest.mock("../../src/components/Map", () => ({
	Map: function DummyMap(props: MapProps) {
		return (
			// @ts-ignore
			<div data-testid="map">
				{props.center.lat}:{props.center.lng}
			</div>
		);
	},
}));

let container: Element | null = null;
beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	if (container === null) return;
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it("should render contact information", async () => {
	const center = {
		lat: 0,
		lng: 0,
	};
	await act(() => {
		render(
			<Contact
				name="Joni Baez"
				email="test@example.com"
				site="http://test.com"
				// @ts-ignore
				center={center}
			/>,
			container
		);
	});

	expect(
		container?.querySelector("[data-testid='email']")?.getAttribute("href")
	).toEqual("mailto:test@example.com");
	expect(
		container?.querySelector("[data-testid='site']")?.getAttribute("href")
	).toEqual("http://test.com");
	expect(container?.querySelector("[data-testid='map']")?.textContent).toEqual(
		"0:0"
	);
});
