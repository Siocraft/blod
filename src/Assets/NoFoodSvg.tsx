import React, { FC } from "react";
import Svg, { Circle, Path } from "react-native-svg";

export const NoFoodSvg: FC = () => {
  return <Svg width="50" height="51" viewBox="0 0 50 51" fill="none">
    <Circle cx="25" cy="25.2297" r="25" fill="#DFF2FF"/>
    <Path d="M14.5409 9.15836V39.7706" stroke="#106BFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M22.1938 9.15836V16.8114C22.1938 17.8164 21.9958 18.8116 21.6112 19.7401C21.2266 20.6686 20.6629 21.5123 19.9523 22.2229C19.2416 22.9336 18.398 23.4973 17.4694 23.8819C16.5409 24.2665 15.5458 24.4645 14.5407 24.4645V24.4645C12.511 24.4645 10.5644 23.6582 9.12922 22.2229C7.694 20.7877 6.8877 18.8411 6.8877 16.8114V9.15836" stroke="#106BFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M7.14282 48.9542L46.9387 9.15836" stroke="#106BFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M42.0918 24.4644C43.3147 28.9488 43.8311 33.5965 43.6224 38.2399H29.8469" stroke="#106BFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M29.8469 24.4645V9.15836C33.1005 10.8526 35.8946 13.3106 37.9898 16.3216" stroke="#106BFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M29.8469 48.9542V35.1787" stroke="#106BFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>;
};