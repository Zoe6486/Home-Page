import { navLinkData } from "../../assets/data";
import MyNavLink from "./MyNavLink";
function Navbar() {
  return (
    <ul className="flex justify-center items-center gap-10">
      {navLinkData.map((item) => (
        <MyNavLink key={item.key} to={item.to}>
          {item.content}
        </MyNavLink>
      ))}
    </ul>
  );
}

export default Navbar;
