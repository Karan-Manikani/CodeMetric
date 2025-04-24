interface Props {
  marginTop: string;
  marginBottom: string;
}

const Divider = (props: Props) => {
  return <hr className={`bg-logo opacity-30 border-none h-px ${props.marginTop} ${props.marginBottom}`} />;
};

export default Divider;
