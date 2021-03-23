import imageInSrc from "./imageInSrc.jpg"
import './App.css';
// import "node_modules/video-react/dist/video-react.css";

//  import WebDevelopment from "./WebDevelopment.mp4"
// import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}/>
      <h1 className='title red'>Your name here</h1>
      <br ></br> 
      
          <img src={imageInSrc} alt = 'imageInSrc' /> 
          <br></br> 
          <img src="/imageInPublic.jpg" alt="imageInPublic" />
          <br></br>
          <video src={"/WebDevelopment.mp4"} width="1000" height="500" controls="controls" autoplay="true" /> 
         
          

                    
      </header>
    </div>
  );
}

export default App;
