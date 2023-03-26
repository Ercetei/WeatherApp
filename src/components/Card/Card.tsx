import React, { FC } from 'react';
import { CardWrapper, CardContentWrapper, CardTitle, CardSubtitle, CardIcon, CardTemp, CardFeelsLike, CardDate } from './Card.styled';
import moment from 'moment';

interface CardData {
   name: string;
   dt: number;
   main: {
      temp: number;
      feels_like: number;
   };
   weather:[
      {
         description:string,
         icon:string
      }
   ],
}

interface CardProps {
   data?: CardData;
}

/*
   The Card simply display the Weather data retrived by the API in an centered box.
*/
const Card: FC<CardProps> = ({data}) => {
   if (!data) {
     return null;
   }  
 
   const { name, dt, main, weather } = data;
 
   const temperature = main && main.temp.toFixed(0);
   const feelsLike = main && main.feels_like.toFixed(0);
   const description = weather && weather[0].description;
   const iconUrl = weather && `http://openweathermap.org/img/w/${weather[0].icon}.png`;
   const date = moment(dt * 1000).format('ddd, MMMM Do');
 
   return (
     <CardWrapper>
       <CardContentWrapper>
         <CardTitle>{name}</CardTitle>
         <CardSubtitle>{description}</CardSubtitle>
         <CardIcon src={iconUrl} alt="weather icon" />
         <CardTemp>{temperature}&deg;C</CardTemp>
         <CardFeelsLike>Feels like {feelsLike}&deg;C</CardFeelsLike>
         <CardDate>{date}</CardDate>
       </CardContentWrapper>
     </CardWrapper>
   );
 };
 
 export default Card;
