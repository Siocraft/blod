import { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface LocationSvgProps {
  variant?: "primary" | "secondary";
}

export const LocationSvg: FC<LocationSvgProps> = ({ variant = "primary" }) => {
  if (variant === "secondary")
    return (
      <Svg width="14" height="19" viewBox="0 0 14 19" fill="none">
        <Path
          d="M9.02185 9.46362L9.19913 9.18747C9.6694 8.58139 9.98875 7.87791 10.1322 7.13212C10.1881 6.60422 10.1083 6.07112 9.89989 5.58049C9.69146 5.08987 9.36093 4.65705 8.93788 4.32077C8.42563 3.92178 7.80129 3.68195 7.14642 3.63263H6.88516C6.34729 3.63533 5.81844 3.76693 5.34559 4.01571C4.87273 4.2645 4.47049 4.62276 4.17466 5.0587C3.92728 5.42811 3.75471 5.83987 3.66617 6.27197C3.56312 6.71186 3.57756 7.17001 3.70814 7.60296C3.87153 8.0824 4.09896 8.53901 4.3846 8.96111V8.98827C4.44992 9.0924 4.51989 9.20104 4.58521 9.31421C4.74849 9.58132 4.90711 9.85296 5.05173 10.1246C5.1357 10.2604 5.21502 10.3962 5.29433 10.532L5.86815 11.4918C5.9148 11.5733 5.96612 11.6729 6.01744 11.777C6.13788 12.0968 6.34402 12.3796 6.6146 12.5964C6.68268 12.6321 6.75882 12.6508 6.83619 12.6508C6.91356 12.6508 6.9897 12.6321 7.05778 12.5964C7.2213 12.4825 7.34763 12.3253 7.42168 12.1437L7.49164 12.0215L7.78555 11.5235"
          fill="#DFF2FF"
        />
        <Path
          d="M6.84786 8.72116C8.02792 8.72116 8.98454 7.79285 8.98454 6.64772C8.98454 5.50259 8.02792 4.57428 6.84786 4.57428C5.66781 4.57428 4.71118 5.50259 4.71118 6.64772C4.71118 7.79285 5.66781 8.72116 6.84786 8.72116Z"
          fill="#106BFF"
        />
        <Path
          d="M11.6484 11.94C12.866 10.0521 13.981 8.20506 13.6964 5.89168C13.5136 4.37146 12.7971 2.95863 11.6674 1.89062C10.5376 0.822615 9.06349 0.164543 7.49266 0.0269808C5.92183 -0.110582 4.35005 0.280749 3.04152 1.13523C1.73299 1.98971 0.767459 3.25525 0.30716 4.71916C-1.0131 8.67137 2.23857 12.1029 4.07201 15.367C4.70648 16.4943 5.37362 18.1693 6.99245 18.0335C8.36403 17.9158 8.9052 16.5305 9.50235 15.5255C10.2581 14.2579 8.24271 13.117 7.49161 14.3801C7.35165 14.611 6.98311 15.444 6.77317 15.4214C6.56324 15.3987 5.92409 13.95 5.74682 13.6558C4.84176 12.1075 3.82941 10.6045 2.985 9.0245C1.11891 5.53858 4.23996 1.17439 8.36403 2.5099C9.23541 2.81437 9.99273 3.36531 10.5383 4.09159C11.0838 4.81787 11.3925 5.68615 11.4244 6.58435C11.4618 8.17791 10.4634 9.50889 9.63297 10.7946C8.80255 12.0803 10.8506 13.1714 11.6484 11.94Z"
          fill="#106BFF"
        />
      </Svg>
    );

  return (
    <Svg width="15" height="19" viewBox="0 0 15 19" fill="none">
      <Path
        d="M9.52185 9.46362L9.69913 9.18747C10.1694 8.58139 10.4887 7.87791 10.6322 7.13212C10.6881 6.60422 10.6083 6.07112 10.3999 5.58049C10.1915 5.08987 9.86093 4.65705 9.43788 4.32077C8.92563 3.92178 8.30129 3.68195 7.64642 3.63263H7.38516C6.84729 3.63533 6.31844 3.76693 5.84559 4.01571C5.37273 4.2645 4.97049 4.62276 4.67466 5.0587C4.42728 5.42811 4.25471 5.83987 4.16617 6.27197C4.06312 6.71186 4.07756 7.17001 4.20814 7.60296C4.37153 8.0824 4.59896 8.53901 4.8846 8.96111V8.98827C4.94992 9.0924 5.01989 9.20104 5.08521 9.31421C5.24849 9.58132 5.40711 9.85296 5.55173 10.1246C5.6357 10.2604 5.71502 10.3962 5.79433 10.532L6.36815 11.4918C6.4148 11.5733 6.46612 11.6729 6.51744 11.777C6.63788 12.0968 6.84402 12.3796 7.1146 12.5964C7.18268 12.6321 7.25882 12.6508 7.33619 12.6508C7.41356 12.6508 7.4897 12.6321 7.55778 12.5964C7.7213 12.4825 7.84763 12.3253 7.92168 12.1437L7.99164 12.0215L8.28555 11.5235"
        fill="#FFEBF4"
      />
      <Path
        d="M7.34786 8.72116C8.52792 8.72116 9.48454 7.79285 9.48454 6.64772C9.48454 5.50259 8.52792 4.57428 7.34786 4.57428C6.16781 4.57428 5.21118 5.50259 5.21118 6.64772C5.21118 7.79285 6.16781 8.72116 7.34786 8.72116Z"
        fill="#FF4055"
      />
      <Path
        d="M12.1484 11.94C13.366 10.0521 14.481 8.20506 14.1964 5.89168C14.0136 4.37146 13.2971 2.95863 12.1674 1.89062C11.0376 0.822615 9.56349 0.164543 7.99266 0.0269808C6.42183 -0.110582 4.85005 0.280749 3.54152 1.13523C2.23299 1.98971 1.26746 3.25525 0.80716 4.71916C-0.513102 8.67137 2.73857 12.1029 4.57201 15.367C5.20648 16.4943 5.87362 18.1693 7.49245 18.0335C8.86403 17.9158 9.4052 16.5305 10.0024 15.5255C10.7581 14.2579 8.74271 13.117 7.99161 14.3801C7.85165 14.611 7.48311 15.444 7.27317 15.4214C7.06324 15.3987 6.42409 13.95 6.24682 13.6558C5.34176 12.1075 4.32941 10.6045 3.485 9.0245C1.61891 5.53858 4.73996 1.17439 8.86403 2.5099C9.73541 2.81437 10.4927 3.36531 11.0383 4.09159C11.5838 4.81787 11.8925 5.68615 11.9244 6.58435C11.9618 8.17791 10.9634 9.50889 10.133 10.7946C9.30255 12.0803 11.3506 13.1714 12.1484 11.94Z"
        fill="#FF4055"
      />
    </Svg>
  );
};