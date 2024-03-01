import React from 'react';
import "./index.css";



function Tecnologies() {
return(
<section id="services" className="tecnologies">
  <h2>Habilidades</h2>
  <div className="cards">
    <div className="card card-tecnologies">
      <img src="../src/assets/vector.png" alt="" />
      <span>Desenvolvedor Front-end</span>
    </div>
    <div className="card card-tecnologies">
      <img src="../src/assets/quadrado.png" alt="" />
      <span>Desenvolvedor Web</span>
    </div>
    <div className="card card-tecnologies">
      <img src="../src/assets/dev.png" alt="" />
      <span>Desenvolvedor Mobile</span>
    </div>
  </div>
</section>
)
}

export default Tecnologies;