export type RequestMessage = {
  instruction: string;
  to: "BACKGROUND" | "CONTENT" | "POPUP";
  from: "BACKGROUND" | "CONTENT" | "POPUP";
};

export type ResponseMessage<T> = {
  to: "BACKGROUND" | "CONTENT" | "POPUP";
  from: "BACKGROUND" | "CONTENT" | "POPUP";
  content: T;
};
