import { MENU_LIST } from '~/config'
import MenuList from './MenuList'

interface LogoSection {
  onClick: () => void
}

const LogoSection = (props: LogoSection) => {
  return (
    <div className="relative border-b border-white/20">
      <a className="flex items-center gap-4 px-8 py-6" href="#/">
        <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-white antialiased">
          Material Tailwind Dashboard
        </h6>
      </a>
      <button
        className="middle none absolute right-0 top-0 grid h-8 max-h-[32px] w-8 max-w-[32px] rounded-lg rounded-br-none rounded-tl-none text-center font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none xl:hidden"
        type="button"
        onClick={props.onClick}
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
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
  )
}

const MenuSection = () => {
  return (
    <div className="m-4">
      <MenuList items={MENU_LIST} />
    </div>
  )
}

export interface SiderbarProps {
  open: boolean
  onClose: () => void
}

const Siderbar = (props: SiderbarProps) => {
  const { open, onClose } = props
  return (
    <aside className={open ? 'sidebar-container show' : 'sidebar-container'}>
      <LogoSection onClick={onClose} />
      <MenuSection />
    </aside>
  )
}

export default Siderbar
