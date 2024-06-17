import { NavLink } from "@remix-run/react";

export interface MenuItemProps {
  title: string;
  to: string;
  icon: string;
}

const MenuItem = (props: { item: MenuItemProps }) => {
  const { title, to, icon } = props.item;
  return (
    <NavLink to={to}>
      {({ isActive, isPending }) => (
        <button
          className={
            isActive ? "sidebar-nav-btn active" : "sidebar-nav-btn pending"
          }
          type="button"
        >
          <span className={icon} />
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
            {title}
          </p>
        </button>
      )}
    </NavLink>
  );
};

const MenuList = (props: { items: MenuItemProps[] }) => {
  const { items } = props;
  const renderedItems = items.map((item, idx) => (
    <li key={`${idx}-${item.title}`}>
      <MenuItem item={item} />
    </li>
  ));
  return <ul className="mb-4 flex flex-col gap-1">{renderedItems}</ul>;
};

export default MenuList;
