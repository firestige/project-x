const Breadcrumb = () => {
  return (
    <nav className="w-max">
      <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
        <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
          <a href="#">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">
              dashboard
            </p>
            <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">
              /
            </span>
          </a>
        </li>
        <li className="flex items-center text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
            home
          </p>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
