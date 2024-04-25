import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Search = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeWidth={2}
            d="m15.75 15.75-3.364-3.37 3.364 3.37Zm-1.5-7.875a6.375 6.375 0 1 1-12.75 0 6.375 6.375 0 0 1 12.75 0v0Z"
        />
    </Svg>
)
export default Search
