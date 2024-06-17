import Breadcrumb from '~/components/Breadcrumb'
import IconButton from '~/components/IconButton'
import TextInputField from '~/components/TextInputField'

const NavSection = () => {
  return (
    <div className="capitalize">
      <Breadcrumb />
      <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-gray-900 antialiased">
        Home
      </h6>
    </div>
  )
}

const SearchSection = () => {
  return (
    <>
      <div className="mr-auto md:mr-4 md:w-56">
        <TextInputField />
      </div>

      <button
        className="middle none hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 relative grid h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-gray-500 transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none xl:hidden"
        type="button"
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            strokeWidth="3"
            className="text-blue-gray-500 h-6 w-6"
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
  )
}

const NotificationsSection = () => {
  return (
    <div>
      <button
        className="middle none hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-gray-500 transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <span className="icon-[mdi--notifications] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform" />
      </button>
      <button
        className="middle none hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-gray-500 transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <span className="icon-[mdi--person] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"></span>
      </button>
    </div>
  )
}

export interface HeaderProps {
  toggle: () => void
}

const Header = (props: HeaderProps) => {
  const { toggle } = props
  return (
    <nav className="block w-full max-w-full rounded-xl bg-transparent px-0 py-1 text-white shadow-none transition-all">
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="flex-none">
          <IconButton
            icon="mdi--menu"
            fontSize="text-3xl"
            onClick={toggle}
            className="middle none hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 relative h-10 max-h-[40px] w-10 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-gray-500 transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          />
        </div>
        <div className="capitalize">
          <NavSection />
        </div>
        <div className="grow" />
        <div className="flex items-center">
          <SearchSection />
        </div>
        <div id="nav-btn-group">
          <NotificationsSection />
        </div>
      </div>
    </nav>
  )
}

export default Header
