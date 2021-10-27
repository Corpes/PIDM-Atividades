import React, {Component} from "react";
import {View, Text} from 'react-native'

export default class Cabecalho extends Component{
    render(){
        return(
            <View>
                <Text style={{fontSize:22, fontWeight:'bold'}}>
                    Nome: {this.props.nome}
                </Text>
                <Text style={{fontSize:22, fontWeight:'bold'}}>
                    Curso: {this.props.curso}
                </Text>
            </View>
        )
    }
}