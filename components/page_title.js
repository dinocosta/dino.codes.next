export default function PageTitle({ children, title }) {
  return (
    <div className="mb-4">
      <h1 className="block text-2xl">{title}</h1>
      {children}
    </div>
  )
}
