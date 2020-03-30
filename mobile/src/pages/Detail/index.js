import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import { Feather } from '@expo/vector-icons'

import styles from './style'
import logoImg from '../../assets/logo1.png'

export default function Detail(){
    return (
        <View style = {styles.container }>
            <View   style = {styles.header}>
                <Image source = {logoImg} />
                
                <TouchableOpacity onPress={() => {}}>
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
                    <TouchableOpacity style = {styles.action} onPress={()=>{}}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.action} onPress={()=>{}}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}