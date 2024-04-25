import { StyleSheet } from "react-native";
import { colors } from "../../../theme";

const styles = StyleSheet.create({
    wrapStyle: {
        // backgroundColor: colors.white,
        flex: 1,

    },
    wrapInsideStyle:
    {
        borderRadius: 25,
        borderColor: colors.borderColor,
        backgroundColor: colors.white,
        width: '100%',
        borderWidth: 1,
        marginTop: 15,
        paddingVertical: 15,
        paddingHorizontal: 20

    },
});
export default styles