import { useEffect, useState } from "react";
import { RequestMessage, ResponseMessage } from "../types";
import { isLeetcodeWebsite } from "../utils/url";

const useCode = () => {
  const [code, setCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);

  useEffect(() => {
    const extractSubmissionCode = async () => {
      setLoading(true);
      if (await isLeetcodeWebsite()) {
        const message: RequestMessage = {
          from: "POPUP",
          to: "BACKGROUND",
          instruction: "EXTRACT_CODE",
        };

        chrome.runtime.sendMessage(message, (response: ResponseMessage<string>) => {
          if (response.from === "CONTENT" && response.to === "POPUP" && response.content) {
            setCode(response.content);
            setLoading(false);
          } else {
            setError("Submission not found. Please ensure it's visible on the screen.");
            setLoading(false);
          }
        });
      } else {
        setError("Please navigate to a LeetCode problem.");
        setLoading(false);
      }
    };

    extractSubmissionCode();
  }, []);

  return { code, error, loading };
};

export default useCode;
