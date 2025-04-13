import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 64,
        backgroundColor: '#262626',
        borderColor: '#333333',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    checkboxContainer: {
        width: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    checkboxBase:{
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 12, // Metade da largura/altura para torná-lo redondo
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checkboxMarcado: {
        borderColor: '#5E60CE',
        backgroundColor: '#5E60CE',
    },
    checkboxInner: {
        width: 12,
        height: 12,
        backgroundColor: 'blue',
        borderRadius: 6,
    },
    textoDescricaoContainer:{
        width: '80%',
        paddingHorizontal: 15,
    },
    textoDescricao:{
        fontSize: 15,
        color: '#F2F2F2',
        textAlign: 'left',
        fontFamily: 'Inter_400Regular',
    },
    textoDescricaoMarcado:{
        textDecorationLine: 'line-through',
        color: '#808080',
    },
    removerContainer:{
        width: '10%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
});