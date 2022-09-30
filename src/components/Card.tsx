import React, {useEffect} from "react";

export default function Card(props: { onSelect: any; }) {
	useEffect(() => {
		const timeoutID = setTimeout(() => {
			props.onSelect(null)
		}, 5000)
		return () => {
			clearTimeout(timeoutID)
		}
	}, [props.onSelect])

	// @ts-ignore
	return [1, 2, 3, 4].map(choise => (
		<button
			key={choise}
			data-testid={choise}
			onClick={() => props.onSelect(choise)}
		>
			{choise}
		</button>
	))
}
