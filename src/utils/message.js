import { message } from "antd";

export const successPOP = (content) => {
    message.open({
      type: "success",
      content: `${content}成功`,
    });
  };
  
  export const failPOP = (content) => {
    message.open({
      type: "error",
      content: `${content}`,
    });
  };
