import React from 'react';
import "./index.css";
import Button from "../Button";

function Info() {
return(
<section className="info">
  <div className="section-name">
    <h1>
      Hi, I'm
    </h1>
    <span> Danilo Barros </span>
    <div className="subtitle">
      <p>Software Developer</p>
    </div>
    <div className="buttons-container">
      <Button 
        text="Download CV" 
        link="https://drive.google.com/file/d/16XxGsbb3nZP4j8mnltruB5BAqrjr4s3x/view?usp=sharing" 
        variant="contained" 
        style={{ backgroundColor: '#27AE60' }}
        />
      {/* <Button 
        text="Saiba mais" 
        variant="outlined" 
        style={{ borderColor: '#fff', color: '#fff' }}
      /> */}
    </div>
  </div>
  <div className="section-image">
    <img src="../src/assets/foto.jpeg" alt="foto" />
  </div>
</section>

)
}

export default Info;