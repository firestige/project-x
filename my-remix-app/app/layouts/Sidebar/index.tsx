import { MENU_LIST } from "~/config";
import MenuList from "./MenuList";

const LogoSection = () => {
  return (
    <div className="relative border-b border-white/20">
      <a className="flex items-center gap-4 py-6 px-8" href="#/">
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
          Material Tailwind Dashboard
        </h6>
      </a>
      <button
        className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
        type="button"
      >
        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-5 w-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

const MenuSection = () => {
  return (
    <div className="m-4">
      <MenuList items={MENU_LIST} />
    </div>
  );
};

const Siderbar = () => {
  return (
    <aside className="sidebar-container">
      <LogoSection />
      <MenuSection />
    </aside>
  );
};

export default Siderbar;
