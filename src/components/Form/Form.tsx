import css from "./Form.module.css";
import type{ LoginCredentials } from "../../types/form";

interface FormProp {
    onSubmit: (data: LoginCredentials)=>Promise<void>;
}
const Form = ({onSubmit}:FormProp) => {
  const handleForm = async(formData: FormData) => {
    const data = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };
    await onSubmit(data)
  };

  return (
    <form className={css.form} action={handleForm}>
      <label className={css.label} htmlFor="username">
        Username
      </label>
      <input
        className={css.input}
        id="username"
        type="text"
        name="username"
        placeholder="Enter your username"
        required
      />
      <label className={css.label} htmlFor="password">
        password
      </label>
      <input
        className={css.input}
        id="password"
        type="password"
        name="password"
        placeholder="Enter your password"
        required
      />
      <button className={css.button} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
