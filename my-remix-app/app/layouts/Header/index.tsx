import Breadcrumb from "~/components/Breadcrumb";
import TextInputField from "~/components/TextInputField";

const NavSection = () => {
  return (
    <div className="capitalize">
      <Breadcrumb />
      <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-900">
        Home
      </h6>
    </div>
  );
};

const SearchSection = () => {
  return (
    <>
      <div className="mr-auto md:mr-4 md:w-56">
        <TextInputField />
      </div>

      <button
        className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
        type="button"
      >
        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            strokeWidth="3"
            className="h-6 w-6 text-blue-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </button>
    </>
  );
};

const NotificationsSection = () => {
  return (
    <div>
      <button
        className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
        type="button"
      >
        <span className="icon-[mdi--notifications] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" />
      </button>
      <button
        className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
        type="button"
      >
        <span className="icon-[mdi--person] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></span>
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <NavSection />
        </div>
        <div className="flex items-center">
          <SearchSection />
          <NotificationsSection />
        </div>
      </div>
    </nav>
  );
};

export default Header;
