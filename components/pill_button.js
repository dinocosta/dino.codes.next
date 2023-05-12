export default function PillButton(props) {
	const classNames = "my-4 py-2 px-4 bg-yellow dark:bg-blue w-fit rounded-full".concat(" ", props.className)

	return (
		<button className={classNames} onClick={props.onClick}>
			{props.children}
		</button>
	)
}
