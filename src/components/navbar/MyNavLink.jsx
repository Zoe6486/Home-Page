import { NavLink } from "react-router-dom";

export default function MyNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm lg:text-lg md:text-base px-3 py-2 text-center uppercase rounded ${
          isActive ? "text-mainColor " : " text-subColor"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
