import { useState } from "react";
import { cyclingRoute } from "../api/TDX/transport";
import { failPOP } from "../utils/message";

const useShape = () => {
  const [spots, setSpots] = useState([]);
  const search = async ({ city }) => {
    const tail = "%24top=30&%24format=JSON";
    const finalUrl = `${city}?${tail}`;
    try {
      const { data } = await cyclingRoute.get(finalUrl);
      console.log("useShape", data);
      setSpots(data);
    } catch (error) {
      failPOP("權限到期，請重新整理後再試一次");
    }
  };
  return [spots, search];
};

export default useShape;
