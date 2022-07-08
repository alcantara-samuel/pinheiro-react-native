import React from 'react';
import {View,
        Text,
        StyleSheet,
        Image,
        TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';



export default function Home(){
    const navigation = useNavigation();
    return(      
        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" deslay={500} style={styles.containerHeader}>
        
                <Text style={styles.textHome}>Página Inicial</Text>
            </Animatable.View>
        
            <Animatable.View deslay={600} animation='fadeInUp' style={styles.containerBottom}>

                <Text style={styles.message1}>Bem-vindo de volta</Text>
                <Text style={styles.message2}>Comece aqui!</Text>
            
                
                <TouchableOpacity style={styles.bottomPesquisar}>
                    <Text style={styles.textPesquisar}>Pesquisar Nota</Text>

                </TouchableOpacity>
                
                <TouchableOpacity style={styles.bottomNova}>
                    <Text style={styles.textNova}>Nova Nota</Text>
                    
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.bottomRecentes}>
                    <Text style={styles.textRecentes}>Notas Recentes</Text>
                    
                </TouchableOpacity>                    

                <TouchableOpacity style={styles.bottomSair} onPress={ () => navigation.navigate('Welcome')}>
                    <Text style={styles.textSair}>Sair</Text>
                </TouchableOpacity>
            </Animatable.View>



        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#069A8E'
    },
    containerHeader:{
        marginTop: '35%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    textHome:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    message1:{
        fontSize: 25,
        marginTop: '10%'

    },
    message2:{
        fontSize:20,
        color: '#a1a1a1',
        marginBottom: '10%'
        
    },
    containerBottom:{
        flex:3,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    
    },
    bottomPesquisar:{
        backgroundColor: '#069A8E',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 20,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textPesquisar:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    bottomNova:{
        backgroundColor: '#069A8E',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 20,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textNova:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    bottomRecentes:{
        backgroundColor: '#069A8E',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 20,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textRecentes:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    bottomSair:{
        backgroundColor: '#D13737',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 20,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textSair:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }

})