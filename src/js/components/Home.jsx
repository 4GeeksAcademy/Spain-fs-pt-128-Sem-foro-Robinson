import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
  const [luzActiva, setLuzActiva] = useState(false);

  useEffect(() => {
    if (luzActiva) {
      console.log(`Luz encendida: ${luzActiva}`);
    }
  }, [luzActiva]);

  const colorLuz = (color) =>
    `luz ${color} ${luzActiva === color ? "encendida" : ""}`;

  return (
    <div className="container-fluid">
      <div className="semaforo">
        <div
          className={colorLuz("rojo")}
          onClick={() => setLuzActiva(luzActiva === "rojo" ? false : "rojo")}
        />
        <div
          className={colorLuz("amarillo")}
          onClick={() =>
            setLuzActiva(luzActiva === "amarillo" ? false : "amarillo")}
        />
        <div
          className={colorLuz("verde")}
          onClick={() => setLuzActiva(luzActiva === "verde" ? false : "verde")}
        />
      </div>
    </div>
  );
};

export default Home;