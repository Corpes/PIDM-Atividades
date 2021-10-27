import React, {Component} from "react";
import {View, Text} from 'react-native'

class Disciplina extends Component{
    render(){
        return(
            <View>
                <Text>Disciplina = {this.props.nome}</Text>
            </View>
        )
    }
}

export default class Disciplinas extends Component{
    render(){
        return(
            <View>
                <Disciplina nome='PIDM' />
                <Disciplina nome='Sociologia'/>
            </View>
        )
    }
}