import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const Calendars = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <G clipPath="url(#a)">
            <Path
                fill="#14A300"
                d="M11.38 4.375h10.781V1.641c0-.906.802-1.641 1.797-1.641.996 0 1.797.735 1.797 1.64v2.735h2.995c2.643 0 4.792 1.958 4.792 4.375v21.875c0 2.413-2.15 4.375-4.792 4.375H4.792C2.145 35 0 33.038 0 30.625V8.75c0-2.417 2.145-4.375 4.792-4.375h2.994V1.641C7.786.735 8.588 0 9.583 0c.996 0 1.797.735 1.797 1.64v2.735Zm-7.786 26.25c0 .602.536 1.094 1.198 1.094H28.75c.659 0 1.198-.492 1.198-1.094V16.042H3.594v14.583Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h33.542v35H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default Calendars
