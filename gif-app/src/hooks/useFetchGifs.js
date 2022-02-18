import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category, limit) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category, limit).then((images) => {
      setState({
        data: images,
        loading: false,
      });
    });
  }, [category, limit]);

  return state;
};

export default useFetchGifs;
