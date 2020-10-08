import React, { useState } from 'react';
import './App.css';
import 'weather-icons/css/weather-icons.css';

function App() {

  const [isLogin, setIsLogin]=useState();

  function weatherDisplayIn(){
    setIsLogin(isLogin == true)
  }

  if (isLogin === false){
    return (
      <div className="weather">
	      <h1>Weather App</h1>
        <h2>London</h2>
        <i className="wi wi-day-sunny">25&deg;</i>
      <form>
        <input type="text" name="location" placeholder="Enter location here..." />
        <button type="submit" className="btn btn-primary btn-block btn-large">Submit</button>
        <br></br>
        <br></br>
        <button className="btn btn-primary btn-block btn-large">Sign Out</button>
    </form>
    </div>
    )
  }

  return (
    <>
    <div className="login">
	    <h1>Login</h1>
      <form>
    	  <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password"/>
        <button onClick={weatherDisplayIn} type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
    </form>
</div>
    </>
  );
}

export default App;
