export default function PillButton(props) {
  const classNames = "my-4 py-2 px-4 text-or-light dark:text-ye-light bg-or-dark dark:bg-ye-dark w-fit rounded-full".concat(" ", props.className)

  return (
    <button className={classNames} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
