import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const Hero = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        {...props}
    >
        <Path fill="url(#a)" d="M0 0h55v55H0z" />
        <Defs>
            <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#b" transform="scale(.01563)" />
            </Pattern>
            <Image
                xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QBsUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAFAcAigASkZCTUQwZjAwMDc1NzAxMDAwMGNjMDEwMDAwYWMwMjAwMDBmNzAyMDAwMDU2MDMwMDAwNmEwNDAwMDA1NDA1MDAwMDdjMDUwMDAwAP/bAEMACwgICggHCwoJCg0MCw0RHBIRDw8RIhkaFBwpJCsqKCQnJy0yQDctMD0wJyc4TDk9Q0VISUgrNk9VTkZUQEdIRf/bAEMBDA0NEQ8RIRISIUUuJy5FRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRf/CABEIAEAAQAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgQFBgcBA//EABkBAAMBAQEAAAAAAAAAAAAAAAACAwEEBf/aAAwDAQACEAMQAAAA1wOBxWf31HWjypAX8510Y195GwpWLfFO5our3GEx5meqcvUd129FEylUtFvwejZw+3O2iYJ+iAOvhn2kJXc50H1UAA2f/8QAIBAAAwEAAgIDAQEAAAAAAAAAAgMEAQURABASFCAVIv/aAAgBAQABBwH0JYed+iLAzv33nhVaHMast+IbqG49AMyrS5nFd5vq1+zSNbyr+wVqjzK1MdbmH3K/4Hg6f2LmlxLe1vOJ+0yLaTsqCiKYvmhoLBQcMvLTEbAF+4v7RvDri5vF0E/ilOF2ShPDdBleYYycmK2+G3ZePBDLiaAvyxht2iOphzMVkPJYtfkMGSdn65uIxx9Wyb/KGhM3fFFVwMJ/5p/DkhQolu4xqI7lo4xr4oQQkJ1Cr8kOEO4I4A4Pv//EABsRAAMBAAMBAAAAAAAAAAAAAAABAhEDECES/9oACAECAQE/ACbVFWl1d+ErX8i9IvPGOE3pnHo1x0KEnvTnRTnX/8QAIhEAAQMCBgMAAAAAAAAAAAAAAQACERASAwQTITFRMmGh/9oACAEDAQE/AE5hamsJpBCxMZzW3LUIXlurjEIjMHjv1wmDMtme/k7q4xFAYRM0/8QALRAAAgEDAgQFAgcAAAAAAAAAAQIDABESITEQICIyEyNCUWFSsUFDU3GRofD/2gAIAQEACD8B4KbjixsOWFvJn1I9jQoeoVM3kw6gfUb1ffgN1FQsc27rfT80yM0O3iL/AL3p3NttFNIxA171tUMbGLbP3+alJyi6dfwWjuwqfSSxUn7GpLqY4sWqJ80zWzWtfUUX1Nuij1hV1SoCEz9eVrH3r82Zcf3NQdUlgoP3NI5inTtkWikDM4xPVvVrBCDZ11uDtU8SJJf9M3pWTKQFSpU4m1eEHQnphxvSRwJjoq5dlO5lnfukbjndWAXGs1IQDJb605UBr4Rqf6rMY7Y/zyyrkjbirswXBo2+BegzKHzaRviolxRdhzEXBpRYDQcn/8QAHhABAQACAgMBAQAAAAAAAAAAAREAITFBECBhUYH/2gAIAQEAAR4Q8HSJ2eXpQ7fRAahCvzNLeK03x74BozgAo/HvRr29ekEIEFPvgCxrLgAkoTSy471hz44FdYTuOPKvogrmsaJXK5xEm0HCVAPCtmV/KU0jidq7f7R+mYQxJFX3WGGHQdnzGS1LxWLkvXQ5X8WQ1DAyu/YZzej0JxuvTkJkhMkGhjROQqgRj4AKbquDk+GSHBgu8yVr2+jLrTWisi1iQ3XBnPUobBHqVQETHUS+tYTIH5jmDwBA9gTCRHswJAwDoPT/xAAfEAEAAgEEAwEAAAAAAAAAAAABABARICFRcTAxQGH/2gAIAQEAHz8Q8Sd0RejSWnuAP2YulMYrjyUkZvnYgzFBwaV8n//Z"
                id="b"
                width={64}
                height={64}
            />
        </Defs>
    </Svg>
)
export default Hero
