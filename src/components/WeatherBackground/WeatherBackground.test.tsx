import React from 'react';
import ReactDOM from 'react-dom';
import WeatherBackground from './WeatherBackground';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherBackground />, div);
  ReactDOM.unmountComponentAtNode(div);
});