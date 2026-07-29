interface TitleProps {
  name: string;
}

const Title = ({ name }: TitleProps) => {
  return (
    <div>
      <h1>Welcome to React</h1>
      <p>
        This is JSX — it looks like HTML, but it's not quite the same. It has
        its own rules!
      </p>
      <p>My name is {name}</p>
    </div>
  );
};
export default Title;
