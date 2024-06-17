import { NavLink } from '@remix-run/react'
import IconButton from '~/components/IconButton'

export interface MenuItemProps {
  title: string
  to: string
  icon: string
}

const MenuItem = (props: { item: MenuItemProps }) => {
  const { title, to, icon } = props.item
  return (
    <NavLink to={to}>
      {({ isActive, isPending }) => (
        <IconButton
          icon={icon}
          fontSize="text-3xl"
          className={
            isActive ? 'sidebar-nav-btn active' : 'sidebar-nav-btn pending'
          }
        >
          <p className="block font-sans text-base font-medium capitalize leading-relaxed text-inherit antialiased">
            {title}
          </p>
        </IconButton>
      )}
    </NavLink>
  )
}

const MenuList = (props: { items: MenuItemProps[] }) => {
  const { items } = props
  const renderedItems = items.map((item, idx) => (
    <li key={`${idx}-${item.title}`}>
      <MenuItem item={item} />
    </li>
  ))
  return <ul className="mb-4 flex flex-col gap-1">{renderedItems}</ul>
}

export default MenuList
