import Header from "./Header";
import useNowPlaying from "../customHook/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
function Browse() {
useNowPlaying()

  return (
    <div>
   
      <Header />
     
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
}

export default Browse;
