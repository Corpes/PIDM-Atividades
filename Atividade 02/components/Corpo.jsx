import React, {Component} from "react";
import {View, Image} from 'react-native'

export default class ChrisRock extends React.Component {
        render(){
                let figura = {uri:'https://guiadanetflix.com.br/wp-content/uploads/2017/11/todo-mundo-odeia-o-chris-2.jpg'}

                return(
                        <Image 
                        source={figura}
                        style={{width:150, height:150}}/>
                )
        }
}