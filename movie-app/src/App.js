  import React, { useState } from "react";
  import "./App.css";

  const App = () => {
    const [searchinput, setSearchinput] = useState("");
    const [data, setData] = useState("");
    const [imgdta, setImgdata] = useState("");
    const [actor, setActor] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");
    const [lan,setLan]=useState("");
    var title="";




    const apikey = "cdb94eeb";
    

    const work = async () => {
      const databody=document.querySelector(".parent_container");
      const loadingbody=document.querySelector(".loading_container");
      const notfoundbody=document.querySelector(".notfound_container")
      setData(searchinput);

      try{
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&t=${data}`);

      const responseData = await response.json();
    
      

      title = responseData.Title;

      setImgdata(responseData.Poster);
      console.log(responseData);
      setActor(responseData.Actors);
      setDirector(responseData.Director);
      setYear(responseData.Released);
      setLan(responseData.Language)
      console.log(responseData.Actors);

      setData(searchinput);
      
      console.log(responseData.Title);
      console.log(title.toString());
      }
      catch(err){
        console.log("error:"+err);
      
      }
    }









    return (<>


      <nav className="container">
        <h1>Movies</h1>
        <input type="search" placeholder="search movie" onChange={(e) => setSearchinput(e.target.value)} value={searchinput}></input>
        <button onClick={work}>Search</button>
      </nav>

      <section className="parent_container">
        <section className="body_container">
          <div className="img_container">
            <img src={imgdta} />

          </div>
          <div className="data_container">
            <div className="heading">
              <h1>{title}</h1>
            </div>
            <h1>actor name:<span>{actor}</span></h1>
            <h1>director:<span>{director}</span></h1>
            <h1>year:<span>{year}</span></h1>
            <h1>language:<span>{lan}</span></h1>
          </div>


        </section>
      </section>

      <section className="loading_container">
        <h1>Loading.....</h1>
      </section>

      <section className="movie_notfound">
        <h1>Sorry. Movie not found.</h1>
      </section>

      <section className="home">
        <h1>Search movie .......</h1>
      </section>

    </>
    )
  }

  export default App;