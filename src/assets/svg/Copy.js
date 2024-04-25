import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
const Copy = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <G stroke="#000" strokeLinecap="round" strokeLinejoin="round" opacity={0.5}>
            <Path d="M5 2.5V10a1.25 1.25 0 0 0 1.25 1.25h5A1.25 1.25 0 0 0 12.5 10V4.526a1.25 1.25 0 0 0-.376-.893l-2.072-2.027a1.25 1.25 0 0 0-.874-.356H6.25A1.25 1.25 0 0 0 5 2.5v0Z" />
            <Path d="M10 11.25v1.25a1.25 1.25 0 0 1-1.25 1.25h-5A1.25 1.25 0 0 1 2.5 12.5V5.625a1.25 1.25 0 0 1 1.25-1.25H5" />
        </G>
    </Svg>
)
export default Copy
