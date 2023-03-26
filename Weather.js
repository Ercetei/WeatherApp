import React from "react";
import { ReactSVG } from 'react-svg'

export class Weather extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    getClouds() {
        // data.weather[0] = few clouds SVG * 2
        // data.weather[0] = snow SVG * 4
        // data.weather[0] = scattered clouds SVG * 4
        // data.weather[0] = broken clouds SVG * 4 + black clouds * 2
        // data.weather[0] = shower rain SVG * 4 + black clouds * 2
        // data.weather[0] = rain SVG * 4
        // data.weather[0] = thunderstorm SVG * 4 + black clouds * 2
        // position aléatoire Math.Rand()
    }

    getLight() {
        // pareil que getClouds + sunset + sunrise à prendre en compte
    }

    getRain() {
        // data.weather[0] = shower rain or rain or thunderstorm
    }
  


    render() {
        return (
            <div className="Weather">
                <div><ReactSVG src="https://assets1.lottiefiles.com/temp/lf20_Stdaec.json"/></div>
            </div>
        );
    }
    
  
}

