import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Back = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <Path
            stroke="#14A300"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7.334 12.667 2.667 8l4.667-4.667m6 4.667H2.667h10.667Z"
        />
    </Svg>
)
export default Back
