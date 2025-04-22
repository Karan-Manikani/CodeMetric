import Divider from "./components/Divider";
import Error from "./components/Error";
import Header from "./components/header";
import useCode from "./hooks/useCode";

const Popup = () => {
  const { code, error } = useCode();
  return (
    <div className="p-4">
      <Header />
      <Divider />
      {error && <Error errorMessage={error} />}
      {code && code}
    </div>
  );
};

export default Popup;
