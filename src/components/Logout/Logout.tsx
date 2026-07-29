import css from "./Logout.module.css";

interface LogoutProp {
  handleClick: () => void;
}
const Logout = ({ handleClick }: LogoutProp) => {
  return (
    <div className={css.actions}>
      <button className={css.button} type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
