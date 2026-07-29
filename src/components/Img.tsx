interface ImgProps {
  imgUrl: string;
}

const Img = ({ imgUrl }: ImgProps) => {
  return (
    <div>
      <img src={imgUrl} alt="Man, field and mountain" />
    </div>
  );
};

export default Img;
