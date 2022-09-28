import React, {useState} from "react";

export default function Toggle(props: { onChange: (arg0: boolean) => void; }) {
	const [state, setState] = useState(false)
	return (
		<button onClick={() => {
			setState(previousState => !previousState)
			props.onChange(!state)
		}} data-testid="toggle">
			{state === true ? "Turn off" : "Turn on"}
		</button>
	)
}