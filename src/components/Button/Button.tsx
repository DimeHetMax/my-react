import "./Button.module.css";



interface ButtonProps  {
  message: string;
  onClick: ()=> void
};

const Button = ({message, onClick}: ButtonProps) => {
  const handleClick = ():void => {
    console.log(message);
    onClick()
  };
  return <button type="button" onClick={handleClick}>Click</button>;
};

export default Button;
