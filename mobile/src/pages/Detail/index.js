import React from 'react';
import{ Linking , View , Text , TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import styles from './sytles';
import logoImg from '../../assets/logo.png';
import * as MailComposer from 'expo-mail-composer';


export default function Incident(props){

    const message = `Olá ${incident.email} estou entrando em contato contigo através do app be the hero`;
    const navigation = useNavigation();
    const incident = props['route'].params.incident;

    console.log("teste");
    console.log(incident);
    return;

    function navigateBack(){      
      navigation.goBack()
    }

    function sendMail(){
      MailComposer.composeAsync({
        subject : "Cadelinha atropelada",
        recipients : "",
        body : message
      })
    }

    function sendWhatsapp(){
      Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }

    return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={logoImg}/>
            <TouchableOpacity onPress={navigateBack}>
              <Feather name="arrow-left" size={28} color={"#e82041"} />
            </TouchableOpacity>
          </View>                    
          <View style={styles.incident}>
                        <Text style={[styles.incidentProperty , { marginTop: 0}]}> ONG : </Text>
                        <Text style={styles.incidentValue}> {incident.title} </Text>

                        <Text style={styles.incidentProperty}> CASO : </Text>
                        <Text style={styles.incidentValue}> {incident.description} </Text>

                        <Text style={styles.incidentProperty}> VALOR : </Text>
                        <Text style={styles.incidentValue}> {incident.value} </Text>                        
          </View>          
          <View style={styles.contactBox}>
            <Text style={styles.heroTitle}>Salve o dia !</Text>
            <Text style={styles.heroTitle}>Seja o herói desse caso !</Text>
            <Text style={styles.heroDescription}>Entre em contato</Text>
            <View style={styles.action}>
              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={sendWhatsapp}
              >
                <Text style={styles.actionText}>Whatsapp</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.actionButton} 
                onPress={sendMail}
              >
                <Text style={styles.actionText}>Email</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    );
}