import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NextIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <Path
            stroke="#14A300"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.666 12.667 13.333 8 8.666 3.333M2.666 8h10.667H2.666Z"
        />
    </Svg>
)
export default NextIcon
