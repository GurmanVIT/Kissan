import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Play = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <G filter="url(#a)">
            <Path
                fill="#007CFF"
                d="M12 0a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 20.429A9.429 9.429 0 1 0 12 1.57a9.429 9.429 0 0 0 0 18.858Zm-1.179-6.08L15.845 11l-5.024-3.349v6.698Zm.261-8.414 6.126 4.084a1.18 1.18 0 0 1 0 1.962l-6.126 4.084a1.179 1.179 0 0 1-1.832-.98v-8.17a1.179 1.179 0 0 1 1.832-.981v.001Z"
            />
        </G>
        <Defs></Defs>
    </Svg>
)
export default Play
