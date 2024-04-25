import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DownImage = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={7}
        height={9}
        fill="none"
        {...props}
    >
        <Path
            fill="#D80000"
            d="M6.973 4.766c-.055-.066-.143-.1-.265-.1H4.667v-4.5c0-.048-.028-.088-.082-.12A.419.419 0 0 0 4.375 0h-1.75a.419.419 0 0 0-.21.047c-.054.031-.082.071-.082.12v4.5H.292c-.128 0-.216.033-.265.099-.048.066-.033.126.046.182l3.19 4c.06.035.13.052.21.052a.434.434 0 0 0 .218-.052l3.236-4c.079-.056.094-.116.046-.182Z"
        />
    </Svg>
)
export default DownImage