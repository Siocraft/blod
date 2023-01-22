import { FC } from "react"
import Svg, { Circle, Path } from "react-native-svg"

export const HeartBeatSvg: FC = () => {
  return <Svg width="56" height="57" viewBox="0 0 56 57" fill="none">
    <Circle cx="28" cy="28.3715" r="28" fill="#DFF2FF"/>
    <Path d="M6.27417 22.0098C8.02274 13.5755 18.4113 7.23268 28.2856 18.4441C42.377 2.29553 57.4285 22.3184 47.2113 32.6384L28.2856 50.0898L17.2113 39.8041" stroke="#106BFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M5.99988 31.2328H14.5713L19.7142 24.3756L26.5713 36.3756L31.7142 29.5185H36.857" stroke="#106BFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>
}  