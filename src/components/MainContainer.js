import { useSelector } from "react-redux"
import VideoBackGround from "./VideoBackGround"
import VideoTitleContainer from "./VideoTitleContainer"

function MainContainer() {
    const movies=useSelector(store=>store?.movie?.nowPlayingMovies)
    if(movies ===null)return
    const mainMovie=movies?.results[0]
    const {original_title,overview,id}=mainMovie


    return (
        <div>
           <VideoTitleContainer title={original_title} overview={overview} /> 
           <VideoBackGround id={id}/>
        </div>
    )
}

export default MainContainer
