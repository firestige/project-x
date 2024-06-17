import { Link } from '@remix-run/react'
import './style.css'

export interface BreadcrumbProps {
  path: string
  delimiter: string
}

const BreadcrumbItem = (props: { value: string }) => {
  return <p className="breadcrumb-item">{props.value}</p>
}

const BreadcrumbDelimiter = (props: { delimiter: string }) => {
  const delimiter = props.delimiter ?? '/'
  return <span className="breadcrumb-delimiter">{delimiter}</span>
}

const Breadcrumb = (props: BreadcrumbProps) => {
  const { path, delimiter } = props
  const renderedPath = () => {
    const d = delimiter ?? '/'
    const items = path.split(d)
    const len = items.length
    return items.map((item, idx) =>
      idx < len - 1 ? (
        <Link
          to="#"
          key={`${idx}-${item}`}
          className="text-blue-gray-900 hover:text-light-blue-500 flex cursor-pointer items-center font-sans text-sm font-normal leading-normal antialiased transition-colors duration-300"
        >
          <BreadcrumbItem value={item} />
          <BreadcrumbDelimiter delimiter={delimiter} />
        </Link>
      ) : (
        <div
          key={`${idx}-${item}`}
          className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-900 antialiased transition-colors duration-300 hover:text-blue-500"
        >
          <BreadcrumbItem key={`${idx}-${item}`} value={item} />
        </div>
      ),
    )
  }
  return (
    <div className="flex w-full flex-wrap items-center rounded-md bg-transparent bg-opacity-60 p-0 transition-all">
      {renderedPath()}
    </div>
  )
}

export default Breadcrumb
