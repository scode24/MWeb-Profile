import CircularIcon from "./CircularIcon";

const CircularImageIcon = (props) => {
  const { imageUrl } = props.data;
  console.log(imageUrl);

  return (
    <CircularIcon
      data={{
        icon: (
          <img src={imageUrl} className="rounded-full" alt="Profile Image" />
        ),
      }}
    />
  );
};

export default CircularImageIcon;
