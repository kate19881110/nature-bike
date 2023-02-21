import { useState } from "react";
import { rentBike } from "../api/TDX/transport";
import { failPOP } from "../api/apiUtil";

const useAvailability = () => {
  const [spots, setSpots] = useState([]);

  const search = async ({ city }) => {
    const finalUrl = `Availability/City/${city}?%24top=30&%24format=JSON`;

    try {
      const { data } = await rentBike.get(finalUrl);
      setSpots(data);
    } catch (error) {
      failPOP(error);
    }
  };
  return [spots, search];
};

export default useAvailability;
