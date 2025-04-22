import { RequestMessage, ResponseMessage } from "../types";

chrome.runtime.onMessage.addListener((request: RequestMessage, _, sendResponse) => {
  if (request.from === "POPUP" && request.to === "BACKGROUND" && request.instruction === "EXTRACT_CODE") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].id) {
        const message: RequestMessage = {
          from: "BACKGROUND",
          to: "CONTENT",
          instruction: "EXTRACT_CODE",
        };

        chrome.tabs.sendMessage(tabs[0].id, message, (response: ResponseMessage<string>) => {
          sendResponse(response);
        });
      }
    });

    return true;
  }
});
