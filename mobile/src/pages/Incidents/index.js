import React , {useEffect , useState} from 'react';
import{ FlatList , View , Text , Image , TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles';
import logoImg from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native' 
import api from '../../services/api';

export default function Incident(){

    const navigation = useNavigation();
    const [incident,setIncident] = useState([]);
    const [total,setTotal] = useState(0);

    async function loadIncidents(){
        const resp = await api.get('incidents');
        setIncident(resp.data);
        setTotal(resp.headers['x-total-count'])
    }

    useEffect(() => {
        loadIncidents();
    });

    function navigateToDetail(incident){
        navigation.navigate("Detail",{incident});
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total}</Text> casos
                </Text>
            </View>
            <Text style={styles.title}>
                Bem vindo
            </Text>
            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia
            </Text>
            <FlatList
                style={styles.incidentsList}
                keyExtractor={incident=>String(incident.id)}
                showsVerticalScrollIndicator={false}
                data={incident}
                renderItem={({item : incident})=> (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}> ONG : </Text>
                        <Text style={styles.incidentValue}> {incident.name} </Text>

                        <Text style={styles.incidentProperty}> CASO : </Text>
                        <Text style={styles.incidentValue}> {incident.title}</Text>

                        <Text style={styles.incidentProperty}> VALOR : </Text>
                        <Text style={styles.incidentValue}> {Intl.NumberFormat('pt-BR',{style : "currency" ,currency:"BRL"}).format(incident.value)} </Text>

                        <TouchableOpacity 
                            style={styles.detailButton} 
                            onPress={()=>{navigateToDetail(incident)}}
                        >
                            <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color={"#e02041"} />
                        </TouchableOpacity>
                    </View>
                )}
            />                        
        </View>
    );
}