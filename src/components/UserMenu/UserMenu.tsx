import { HiUser } from "react-icons/hi";
import css from "./UserMenu.module.css";

interface UserMenuProps {
  name: string;
}

const UserMenu =({ name }: UserMenuProps) =>{
  return <div className={css.userMenuContainer}><HiUser className={css.icon}/><span className={css.userMenuText}> {name}</span></div>
}
export default UserMenu;