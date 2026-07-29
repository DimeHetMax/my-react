import type { AuthUser } from "../../types/form";
import css from "./FormCredentialDisplay.module.css";

interface FormCredentialDisplayProp {
  data: AuthUser;
}

const FormCredentialDisplay = ({ data }: FormCredentialDisplayProp) => {
  return (
    <article className={css.card}>
      <div className={css.header}>
        <img
          className={css.avatar}
          src={data.image}
          alt={`${data.firstName} ${data.lastName}`}
        />

        <div className={css.userInfo}>
          <div className={css.status}>Authenticated</div>
          <h2 className={css.name}>
            {data.firstName} {data.lastName}
          </h2>
          <p className={css.username}>@{data.username}</p>
        </div>
      </div>

      <dl className={css.details}>
        <div className={css.detail}>
          <dt>User ID</dt>
          <dd>#{data.id}</dd>
        </div>
        <div className={css.detail}>
          <dt>Email</dt>
          <dd title={data.email}>{data.email}</dd>
        </div>
        <div className={css.detail}>
          <dt>Gender</dt>
          <dd>{data.gender}</dd>
        </div>
      </dl>
    </article>
  );
};

export default FormCredentialDisplay;
