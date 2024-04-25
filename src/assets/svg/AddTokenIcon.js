import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AddTokenIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <Path
            fill="#14A300"
            d="M11 8c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4Zm-1-5V1h2v2h2v2h-2v2h-2V5H8V3h2ZM6 4c0-1.6.8-3 2-4H7C3.1 0 0 .9 0 2c0 1 2.6 1.8 6 2Zm1 9c-3.9 0-7-.9-7-2v3c0 1.1 3.1 2 7 2s7-.9 7-2v-3c0 1.1-3.1 2-7 2Zm2.8-4.2c-.9.1-1.9.2-2.8.2-3.9 0-7-.9-7-2v3c0 1.1 3.1 2 7 2s7-.9 7-2V8c-.9.7-1.9 1-3 1-.4 0-.8-.1-1.2-.2ZM7 8h1c-1-.7-1.7-1.8-1.9-3C2.7 4.9 0 4 0 3v3c0 1.1 3.1 2 7 2Z"
        />
    </Svg>
)
export default AddTokenIcon
