import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Delete = (props) => (

    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <Path
            fill="#14A300"
            d="M1 13.833c0 .917.75 1.667 1.667 1.667h6.667c.916 0 1.666-.75 1.666-1.667v-10H1v10ZM3.05 7.9l1.175-1.175L6 8.492l1.767-1.767L8.942 7.9 7.175 9.667l1.767 1.766-1.175 1.175L6 10.842l-1.766 1.766-1.175-1.175 1.766-1.766L3.05 7.9Zm5.867-6.567L8.084.5H3.917l-.833.833H.167V3h11.667V1.333H8.917Z"
        />
    </Svg>

)
export default Delete
