import type { FormEvent } from "react";
import css from "./SearchForm.module.css";

interface SearchFormProps {
  onSubmit: (topic: string) => Promise<void>;
}

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const topic = String(formData.get("topic") ?? "").trim();

    if (!topic) {
      alert("Please enter search topic!");
      return;
    }

    await onSubmit(topic);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input type="text" name="topic" className={css.input} />
      <button type="submit" className={css.button}>Search</button>
    </form>
  );
};

export default SearchForm;
