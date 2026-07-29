import css from "./OrderForm.module.css";

interface OrderFormProps {
  onSubmit: (value: string) => void;
}

const OrderForm =({ onSubmit }: OrderFormProps) =>{
  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string;
    onSubmit(username);
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <input type="text" name="username" className={css.input} />
      <button type="submit" className={css.button}>Place order</button>
    </form>
  );
}

export default OrderForm;
