import { StyleSheet } from "react-native";

export const colors = {
    darkGray: '#2D2D2D',
    lightGray: '#aaaaaa',
    orange: '#FF9427',
    textPrimary: 'white',
    textSecondary: '#666666',
    background: '#000000',
}

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background,
    },
    mainResult: {
        color: colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '300',
    },
    subResult: {
        color: colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300',
    },
    calculatorContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-end',
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: 'red',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold', // Cambiado a negrita
    },    
    row: {
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    

});
