import { MouseEventHandler } from "react";

interface Props {
  text: string;
  image: string;
  alt: string;
  active: boolean;
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: Props) => {
  return (
    <button
      className={`flex items-center space-x-1.5 ${!props.active && "opacity-60"}`}
      onClick={props.onClickHandler}
    >
      <span className="text-secondary opacity-70 py-1 font-thin text-sm">{props.text}</span>
      <img className="h-5" src={props.image} alt={props.alt} />
    </button>
  );
};

export default Button;
