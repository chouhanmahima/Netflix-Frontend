import axios from "axios";
import { Now_Playing_Movies, options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/movieSlice";

const useNowPlayingMovies = async () => {

    const dispatch = useDispatch();

    try {
      const res = await axios.get(Now_Playing_Movies, options);
      dispatch(getNowPlayingMovies(res.data.results));
    } 
    catch (error) {
      console.log(error);
    }
}

export default useNowPlayingMovies;