interface Props {
  errorMessage: string;
}

const Error = (props: Props) => {
  return <p className="text-secondary text-center tracking-wide font-thin">{props.errorMessage}</p>;
};

export default Error;
