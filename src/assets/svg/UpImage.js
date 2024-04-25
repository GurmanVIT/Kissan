import * as React from "react"
import Svg, { Path } from "react-native-svg"

const UpImage = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={9}
    fill="none"
    {...props}
  >
    <Path
      fill="#14A300"
      d="M6.973 4.234c-.055.066-.143.1-.265.1H4.667v4.5c0 .048-.028.088-.082.12a.419.419 0 0 1-.21.046h-1.75a.419.419 0 0 1-.21-.047c-.054-.031-.082-.071-.082-.12v-4.5H.292c-.128 0-.216-.033-.265-.099-.048-.066-.033-.126.046-.182l3.19-4A.415.415 0 0 1 3.473 0c.085 0 .158.017.218.052l3.236 4c.079.056.094.116.046.182Z"
    />
  </Svg>
)
export default UpImage;
