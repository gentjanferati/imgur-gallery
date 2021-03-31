import React, {useState, useEffect} from "react";
import './App.css';
import CardList from './components/cardList/card-list.component';
import CardDetails from './components/cardDetails/cardDetails.component';
import { useSelector } from 'react-redux'
function App() {
  const showDetails = useSelector( state => state.id.clicked);
  const idToFind = useSelector(state => state.id.id)
  
  const useFetch = (url) =>{
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState([]);
  // eslint-disable-next-line
    useEffect( async () => {
      const headers = { 'Authorization': 'Client-ID 1b5f1da9585ec80'}
  
      const response = await fetch( url, { headers });
      const result = await response.json()
          setIsLoaded(true);
          setImages(result.data);
            
          setIsLoaded(true);
        // eslint-disable-next-line
    },[url])
    return {images, isLoaded};

  }
  const [section, setSection] = useState("hot/");
  const [viral, setViral] = useState(false);
  const [sort, setSort] = useState("");
  const [isTop, setIsTop] = useState(null);
  const [window, setWindow] = useState(null);

  const getSection = (e) => {
    const valueSelector = e.target.value;
    setSection(valueSelector);
    
  } 
  const getViral = (e) =>{
    const valueSelector = e.target.checked;
    setViral(valueSelector)
    
  }
  const getSort = (e) =>{
    const valueSelector = e.target.value;
    setSort(valueSelector)
    const top = "top/";
    const isTop = top.localeCompare(valueSelector)
    console.log(isTop);
    if(isTop === 0){
      setIsTop(true);
    }
    else{
      setIsTop(false);
    }
    
  }

  const getWindow = (e) =>{
    const valueSelector = e.target.value;
    setWindow(valueSelector)
    
  }
  const {images, isLoaded} = useFetch(`https://api.imgur.com/3/gallery/${section}${sort}${window}?showViral=${viral}&mature=true&album_previews=true`)
  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    
   const details = images.find(images => images.id === idToFind );
   console.log(details);
    return (
      <div className="body">
        {showDetails ? <CardDetails details={details}/> : null}
      <div className="header">
        
        <select onChange={getSection} className="section">
            <option value="hot/">Hot</option>
            <option value="top/">Top</option>
            <option value="user/">User</option>
        </select>
        
        
        <input  type="checkbox" id="viral" name="ViralImages" onChange={getViral}/>
        <label className="label">Viral Images</label>
        
        <select onChange={getSort} className="section">
            <option value="time/">Time</option>
            <option value="top/">Top</option>
            <option value="rising/">Rising</option>
        </select>
        {isTop ? <select onChange={getWindow} className="section">
            <option value="day/">Day</option>
            <option value="week/">Week</option>
            <option value="month/">Month</option>
            <option value="year/">Year</option>
            <option value="all/">All</option>
        </select> 
        :
        null
        }
        
        
      </div>
        {console.log(images)}
        
      <CardList images={images} />
      </div>
    );
  }
}

export default App;
