export default function PillButton(props) {
  const classNames =
    'my-4 py-2 px-4 text-text-dark dark:text-text-light bg-accent-light dark:bg-accent-dark w-fit rounded-full'.concat(
      ' ',
      props.className
    )

  return (
    <button className={classNames} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
