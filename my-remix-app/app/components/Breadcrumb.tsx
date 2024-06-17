const Breadcrumb = () => {
  return (
    <nav className="w-max">
      <ol className="flex w-full flex-wrap items-center rounded-md bg-transparent bg-opacity-60 p-0 transition-all">
        <li className="text-blue-gray-900 hover:text-light-blue-500 flex cursor-pointer items-center font-sans text-sm font-normal leading-normal antialiased transition-colors duration-300">
          <a href="#">
            <p className="block font-sans text-sm font-normal leading-normal text-blue-900 antialiased opacity-50 transition-all hover:text-blue-500 hover:opacity-100">
              dashboard
            </p>
            <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-gray-500 antialiased">
              /
            </span>
          </a>
        </li>
        <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-900 antialiased transition-colors duration-300 hover:text-blue-500">
          <p className="text-blue-gray-900 block font-sans text-sm font-normal leading-normal antialiased">
            home
          </p>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumb
