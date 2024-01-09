import axios from "axios";
import useLocalStorage from "./useLocalStorage";

const useAxios = (key, url) => {
  const [res, setRes] = useLocalStorage(key);
  const fetchData = async (formatter = (data) => data, restOfUrl = "") => {
    const response = await axios.get(`${url}${restOfUrl}`);
    setRes((data) => [...data, formatter(response.data)]);
  };
  const remove = () => setRes([]);
  return [res, fetchData, remove];
};
export default useAxios;
