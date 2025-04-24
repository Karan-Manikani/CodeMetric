import Error from "./Error";
import Analyses from "./Analyses";
import { queryLLM } from "../utils/api";
import { ModelResponse } from "../types";
import { useEffect, useState } from "react";

interface Props {
  code: string;
}

const MainContent = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [analyses, setAnalyses] = useState<ModelResponse>();

  useEffect(() => {
    const query = async () => {
      setLoading(true);
      const response = await queryLLM(props.code);
      if (response) setAnalyses(response);
      else setError("Could not establish connection with the model. Please try again later.");
      setLoading(false);
    };

    query();
  }, [props.code]);

  const renderContent = () => {
    if (loading) return <p>Loading...</p>;
    else if (error) return <Error errorMessage={error} />;
    else if (analyses) return <Analyses analyses={analyses} />;
  };

  return <>{renderContent()}</>;
};

export default MainContent;
