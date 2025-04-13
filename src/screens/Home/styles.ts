import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    background:{
        flex: 1,
    },
    topBackground:{
        height: 173,
        backgroundColor: '#0D0D0D',
    },
    bottomBackground:{
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    inputContainer:{
        position: 'absolute',
        marginTop: 130,
        paddingHorizontal: 24,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    input:{
        flex: 1,
        backgroundColor: '#1F1E25',
        height: 54,
        width: '70%',
        borderRadius: 5,
        color: '#808080',
        padding: 16,
        fontSize: 16,
        marginTop: 15,
        marginRight: 10,
        fontFamily: 'Inter_400Regular',
        
    },
    button:{
        width: 54,
        height: 54,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgContainer:{
        alignItems: 'center',
        top: '45%',
    },
    infoContainer:{
        flexDirection: 'row',
        marginTop: 50,
        marginHorizontal: 24,
        justifyContent: 'space-between',
    },
    labelCriadas:{
        fontSize: 18,
        color: '#4EA8DE',
        fontFamily: 'Inter_700Bold',
    },
    labelConcluidas:{
        fontSize: 18,
        color: '#8284FA',
        fontFamily: 'Inter_700Bold',
    },
    contadorContainer:{
        backgroundColor: '#333333',
        borderRadius: '40%',
        marginLeft: 12,
    },
    labelContador:{
        fontSize: 18,
        color: '#D9D9D9',
        fontWeight: 'bold',
        paddingHorizontal: 12,
        paddingVertical: 2,
    },
    tarefasContainer:{
        marginTop: 20,
        marginHorizontal: 24,
    },
    listEmptyContainer:{
        marginTop: 40,
        alignItems: 'center',
    },
    listEmptyTitulo:{
        color: '#808080',
        fontSize: 16,
        fontFamily: 'Inter_700Bold',
    },
    listEmptySubtitulo:{
        color: '#808080',
        fontSize: 15,
        fontFamily: 'Inter_400Regular',
    }
});