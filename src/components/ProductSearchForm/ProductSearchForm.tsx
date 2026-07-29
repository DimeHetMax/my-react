import css from "./ProductSearchForm.module.css";
interface ProductSearchFormProp {
    onSubmit: (product: string) => Promise<void>;
}

const ProductSearchForm = ({ onSubmit }: ProductSearchFormProp) => {
    const handleFormAction = async (formData: FormData) => {
        const product = String(formData.get("product") ?? "").trim().toLocaleLowerCase();

        if (!product) {
            alert("Please enter a product name.");
            return;
        }

        await onSubmit(product);
    };

    return (
        <div className={css.wrapper}>
            <form action={handleFormAction} className={css.form}>
                <input
                    className={css.input}
                    type="text"
                    name="product"
                    placeholder="Search products..."
                    aria-label="Product name"
                />
                <button className={css.button} type="submit">
                    Search product
                </button>
            </form>
        </div>
    );
};

export default ProductSearchForm;
