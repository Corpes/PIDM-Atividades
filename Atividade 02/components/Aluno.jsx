import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Aluno extends Component{
    render(){
        return(
            <view>
                <text style= {{fontSize:20, fontWeight:'bold'}}>
                    Murilo Corpes do Nascimento Neto
                </text> 

                <text style={{fontSize:17, fontWeight:'sans', display:'block', textAlign:'center'}}>
                    23 anos
                </text> 

                <text style={{fontSize:17, fontWeight:'sans', display:'block', textAlign:'center'}}>
                    Fortaleza
                </text> 

                <text style={{fontSize:17, fontWeight:'sans', display:'block', textAlign:'center'}}>
                    Design Digital
                </text>
            </view>
        )
    }
}

export default Aluno