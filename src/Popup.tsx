import Divider from "./components/Divider";
import Error from "./components/Error";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import useCode from "./hooks/useCode";

const Popup = () => {
  const { code, error, loading } = useCode();

  function renderContent() {
    if (loading) return <p>Loading...</p>;
    else if (error) return <Error errorMessage={error} />;
    else return code && <MainContent code={code} />;
  }

  return (
    <div className="p-4">
      <Header />
      <Divider marginTop="mt-3" marginBottom="mb-4" />
      {renderContent()}
    </div>
  );
};

export default Popup;
