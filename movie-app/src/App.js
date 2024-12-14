import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [searchinput, setSearchinput] = useState("");
  const [imgdta, setImgdata] = useState("");
  const [actor, setActor] = useState("");
  const [writer,setWriter]=useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");
  const [lan, setLan] = useState("");
  const [parentcontainer, setParentcontainer] = useState(false);
  const [loadingcontainer, setLoadingcontainer] = useState(false);
  const [notfound1, setNotfound1] = useState(false);
  const [home, setHome] = useState(true);
  const [title, setTitle] = useState("");
  const [responseData, setResponseData] = useState(null);

  const apikey = "cdb94eeb";

  const work = async () => {

    if(searchinput===""){
      setHome(true);
      setNotfound1(false);
      alert("please enter movie name");
   
    }
    else{

    
    // Reset states and start loading
    setLoadingcontainer(true);
    setParentcontainer(false);
    setNotfound1(false);
    setHome(false);

    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&t=${searchinput}`);
      const data = await response.json();
      console.log(data);
      setResponseData(data); // Update response data for useEffect to handle
    } catch (err) {
      setLoadingcontainer(false);
      setHome(true);
      console.error("Error fetching data:", err);
      setResponseData(null); // Handle error case
      alert("error fetching data:",err)

    }
  };
}

  // Handle side effects of responseData updates
  useEffect(() => {
    if (responseData === null) {
      // No response or error occurred
      setLoadingcontainer(false);
      setNotfound1(false);
      setParentcontainer(false);
      return;
    }

    if (responseData.Response === "True") {
      // Movie found
      setTitle(responseData.Title);
      setImgdata(responseData.Poster);
      setActor(responseData.Actors);
      setDirector(responseData.Director);
      setYear(responseData.Released);
      setLan(responseData.Language);
      setWriter(responseData.Writer);

      setParentcontainer(true);
      setNotfound1(false);
    } else {
      // Movie not found
      setNotfound1(true);
      setParentcontainer(false);
    }

    setLoadingcontainer(false); // Stop loading in all cases
  }, [responseData]);


  return (
    <>
      <nav className="container">
        <h1>Movies</h1>
        <input
          type="search"
          placeholder="Search movie"
          onChange={(e) => setSearchinput(e.target.value)}
          value={searchinput}
        />
        <button onClick={work}>Search</button>
      </nav>

      {loadingcontainer && (
        <section className="loading_container">
          <div className="loading_container1"></div>

        </section>
      )}

      {parentcontainer && (
        <section className="parent_container">
          <section className="body_container">
            <div className="img_container">
              <img src={imgdta} alt="Movie Poster" />
            </div>
            <div className="data_container">
              <div className="heading">
                <h1>{title}</h1>
              </div>
              <h1>Actor Name: <span>{actor}</span></h1>
              <h1>Director: <span>{director}</span></h1>
              <h1>Writer:<span>{writer}</span></h1>
              <h1>Year: <span>{year}</span></h1>
              <h1>Language: <span>{lan}</span></h1>
            </div>
          </section>
        </section>
      )}

      {notfound1 && (
        <section className="movie_notfound">
          <h1>Sorry, movie not found.</h1>
        </section>
      )}

      {home && (
        <section className="home">
          <h1>welcome to movies </h1>
        </section>
      )}
    </>
  );
};

export default App;
