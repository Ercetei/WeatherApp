import React, { FC } from 'react';
import { WeatherBackgroundWrapper, Clouds, Star, Mist, Particles } from './WeatherBackground.styled';

interface WeatherData {
   weather:[
      {
         description:string
      }
   ],
   sys: {
      sunrise: number,
      sunset: number
   },
   dt:number
}

interface WeatherBackgroundProps {
   data?: WeatherData;
}

/*
   Display a visual representation of the weather based on the data
   retrieved by the API calls
*/
const WeatherBackground: FC<WeatherBackgroundProps> = ({data}) => {
   if (!data) {
      return null;
   }
   const { weather, sys, dt } = data;
   let particlesImg = getParticles();
   
   // Get the appropriate cloud SVG 
   function getClouds() {
      // few clouds / snow scattered clouds broken clouds  shower rain  rain  thunderstorm 
      if(weather[0].description === "clear sky") { 
         return "" 
      };
      return (weather[0].description == "few clouds")? "/img/chotto_cloudy.svg": "/img/cloudy.svg";
   }

   // Return the Sun or the Moon in different state according to the weather description and
   // time of day
   function getStar() {
      let time = dayOrNight();
      let imgSrc = "";

      if(weather[0].description === "clear sky" || weather[0].description == "few clouds") {
         imgSrc = (time == "day") ? "/img/sun.svg" : "/img/moon.svg";
      } else {
         imgSrc = (time == "day") ? "/img/cloudy_sun.svg" : "/img/cloudy_moon.svg";
      }

      return <img src={imgSrc} />
   }

   // Return the color of the sky depending the hour of the day.
   function getSky() {
      let shade = "#231F20"; // default: dark shade
      
      if(!sys) { 
         return shade; 
      };

      // If it is less than one hour before/after sunrise or sunset, sky is orange
      if (dt > sys.sunrise - 3600 && dt < sys.sunrise ||  dt > sys.sunset && dt < sys.sunset + 3600) {
         shade = "#F15A29";
      // If current time is between sunrise and sunset; sky is blue
      } else if (dt >= sys.sunrise && dt <= sys.sunset) {
         shade = "#00A5ED";
      } 

      return shade;
   }

   // Return TRUE or FALSE if a mist is necessary. It will create a grey overlay over the sky color.
   function getMist() {
      return (dayOrNight() != "night" && weather[0].description != "clear sky" && weather[0].description != "few clouds") ? true : false;
   }

   // Check the datetime and return a string if it is day or night
   function dayOrNight() {
      return dt >= sys.sunrise && dt <= sys.sunset ? "day" : "night";
   }

   // Return SVG for rain or snow
   function getParticles() {
      let particle = ""
      if(weather) {
         if(weather[0].description.includes("rain") || weather[0].description === "thunderstorm") {
            particle = "/img/rain.svg";
         } else if (weather[0].description.includes("snow")) {
            particle = "/img/snow.svg";
         }
      }

      return particle;
   }

   return (
      <WeatherBackgroundWrapper bgColor={getSky()}>
         {(weather ? getMist(): null) && <Mist />}
         <Star>{weather ? getStar() : null}</Star>
         {weather && <Clouds bgImg={getClouds()}>{particlesImg !== "" && <Particles bgImg={particlesImg}/>}</Clouds>}
      </WeatherBackgroundWrapper>
   );
}


export default WeatherBackground;
