import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Planets = (props) => {

    const { store, actions } = useContext(Context);

    return (
        <div className="card" style={{ width: "15rem" }}>
            <img id="charImg" src="https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg?region=280%2C0%2C720%2C720" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.planet.name}</h5>
                <Link to={"/planet/" + props.planet.uid} className="btn btn-primary">More Details</Link>
                <button className="favorite btn btn-warning bi bi-star" onClick={() => actions.addToFavs(props.planet.name, props.planet.uid, "planets")}></button>
            </div>
        </div>
    )

}

export default Planets;