import React, { lazy, Suspense } from 'react';

const LazyWeatherBackground = lazy(() => import('./WeatherBackground'));

const WeatherBackground = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyWeatherBackground {...props} />
  </Suspense>
);

export default WeatherBackground;
