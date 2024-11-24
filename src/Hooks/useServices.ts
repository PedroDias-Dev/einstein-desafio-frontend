import { ServicesContext } from "Contexts/Services";
import { useContext } from "react";

const useServices = () => {
  const { api } = useContext(ServicesContext);

  return {
    api,
  };
};

export default useServices;
