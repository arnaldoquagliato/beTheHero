import React from 'react';
import {View, Image, TouchableOpacity, Text, Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'
import styles from './style'
import logoImg from '../../assets/logo1.png'

export default function Detail(){

    const navigation = useNavigation();
    const message = 'Ola, Arnaldo estou entrando em contato pois gostaria de doar o valor de ajudar o "caso da dog" com o valor de R$ 120'


    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Heroi do caso: Cadelinha atropelada',
            recipients: ['arnaldoquagliato@gmail.com'],
            body: message,
        })
    }

    function sendWpp(){
        Linking.openURL(`whatsapp://send?phone=5585987329142&text=${message}`);
    }
    return (
        <View style = {styles.container }>
            <View   style = {styles.header}>
                <Image source = {logoImg} />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name = "arrow-left" size={28} color="#E82041"/>
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                    <Text style={[styles.incidentProperty, {marginTop:0}]}>ONG:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    <Text style={styles.incidentProperty}>Caso:</Text>
                    <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>


                    <Text style={styles.incidentProperty}>Valor:</Text>
                    <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>
            <View style ={styles.contactBox}>
                <Text style={styles.heroesTitle}>Salve o dia!</Text>
                <Text style={styles.heroesTitle}>Seja o heroi dessa caso.</Text>
                <Text style={styles.heroesDescripton}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style = {styles.action} onPress={sendWpp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}