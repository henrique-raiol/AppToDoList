import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Image } from 'expo-image';

type objTarefas = {
    key: string;
    descricao: string;
    status: boolean;
};

type Props = {
    descricaoTarefa: objTarefas;
    onSelected: () => void;
    onRemove: () => void;
};

export function Tarefa({descricaoTarefa, onSelected, onRemove}: Props){

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkboxContainer} onPress={onSelected}>
                <View style={[styles.checkboxBase, descricaoTarefa.status && styles.checkboxMarcado]}>
                    {/*descricaoTarefa.concluida && <View style={styles.checkboxInner} />*/}
                    {
                        descricaoTarefa.status &&
                        <Image
                            style={{ width: '50%', height: '50%' }}
                            source={require('../../../assets/check_ok.svg')}
                        />
                    }
                </View>
            </TouchableOpacity>
            <View style={styles.textoDescricaoContainer}>
                <Text style={[styles.textoDescricao, descricaoTarefa.status && styles.textoDescricaoMarcado]} numberOfLines={2} ellipsizeMode="tail">{descricaoTarefa.descricao}</Text>
            </View>
            <TouchableOpacity style={styles.removerContainer} onPress={onRemove}>
                <Image
                    style={{ width: 18, height: 18 }}
                    source={require('../../../assets/trash.svg')}
                />
            </TouchableOpacity>
        </View>
    );
}