import React, {useEffect, useState} from "react";
import {View, Text, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import { Image } from 'expo-image';
import { styles } from "./styles";
import {Tarefa} from '../../components/Tarefa';

type objTarefas = {
    key: string;
    descricao: string;
    status: boolean;
};

export default function Home(){
    const [nomeTarefa, setNomeTarefa] = useState<string>('');
    const [listaTarefas, setListaTarefas] = useState<objTarefas[]>([]);
    const [numeroTarefasCriadas, setNumeroTarefasCriadas] = useState(0);
    const [numeroTarefasConcluidas, setNumeroTarefasConcluidas] = useState(0);

    useEffect(()=>{
        handleCountStatus();
    },[listaTarefas]);

    function handleCountStatus() {
        setNumeroTarefasCriadas(listaTarefas.length);
        setNumeroTarefasConcluidas(listaTarefas.filter( item => item.status).length);
    }

    function handleAddTask(dsTarefa: string){
        if (dsTarefa === ''){
            Alert.alert('Ops!', 'Você precisa descrever sua tarefa.');
            return;
        }
        const listaKeys = listaTarefas.map( item => parseInt(item.key, 10)).sort( (a,b) => a - b);
        const ultimaKey = listaKeys.length > 0 ? listaKeys[listaKeys.length - 1] : 0;
        setListaTarefas(prevState => [...prevState, {
            key: `${ultimaKey + 1}`,
            descricao: dsTarefa,
            status: false
        }]);
        setNomeTarefa('');
        handleCountStatus();
    }

    function handleRemoveTask(tasKey: string){
        Alert.alert('Excluir tarefa', `Você confirma a exclusão da tarefa?`, [
            {
              text: 'Sim',
              onPress: () => {
                setListaTarefas(prevState => prevState.filter( item => item.key !== tasKey))
                handleCountStatus();
                }
            },
            {
              text: 'Não',
              style: 'cancel'
            }
          ]);
    }

    function handleSelectTask(tasKey: string){
        setListaTarefas(listaTarefas.map( (item) => {
            if(item.key === tasKey){
                return {...item, status: !item.status}
            };
            return item;
        }));
        handleCountStatus();
    }

    return(
        <View style={styles.container}>
            <View style={styles.background}>
                <View style={styles.topBackground}>
                    <View style={styles.imgContainer}>
                        <Image
                        source={require('../../../assets/Logo.png')}
                        style={{ width: 110, height: 32 }}
                        />
                    </View>
                </View>
                <View style={styles.bottomBackground}>
                    <View style={styles.infoContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.labelCriadas}>Criadas</Text>
                            <View style={styles.contadorContainer}>
                                <Text style={styles.labelContador}>{numeroTarefasCriadas}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.labelConcluidas}>Concluídas</Text>
                            <View style={styles.contadorContainer}>
                                <Text style={styles.labelContador}>{numeroTarefasConcluidas}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.tarefasContainer}>
                        <FlatList
                            data={listaTarefas}
                            keyExtractor={ (item) => item.key}
                            renderItem={ ({item}) => <Tarefa descricaoTarefa={item} onSelected={() => handleSelectTask(item.key)} onRemove={()=> handleRemoveTask(item.key)} />}
                            showsVerticalScrollIndicator={false}
                            ListEmptyComponent={() => (
                                <View style={styles.listEmptyContainer}>
                                    <Image
                                        source={require('../../../assets/Clipboard.svg')}
                                        style={{ width: 80, height: 80, marginBottom: 20 }}
                                    />
                                    <Text style={styles.listEmptyTitulo}>Você ainda não tem tarefas cadastradas</Text>
                                    <Text style={styles.listEmptySubtitulo}>Crie tarefas e organize seus itens a fazer</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor='#6B6B6B'
                    onChange={e => setNomeTarefa(e.nativeEvent.text)}
                    value={nomeTarefa}
                />
                <TouchableOpacity style={styles.button} onPress={() => handleAddTask(nomeTarefa)}>
                    <Image
                        style={{ width: '40%', height: '40%' }}
                        source={require('../../../assets/plus.svg')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}