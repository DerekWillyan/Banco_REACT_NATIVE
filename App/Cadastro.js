import { Text, TextInput, View, TouchableOpacity} from "react-native";
import React, {useState} from 'react';
import Login from "./Login";
import Styles from "../Styles";

export default function Cadastro(){

    const[pagina, setPagina] = useState('cadastro');
    if (pagina == 'cadastro') {
        return(
            <View style={{justifyContent:'center', alignItems:"center", height:'100%'}}>
                <View>
                    <Text style={{textAlign:"center", fontWeight:"bold", fontSize:40}}>CADASTRAR</Text>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <View style={Styles.viewEmaileSenha}>
                                <Text style={{fontSize:20}}>Nome:</Text>
                            </View>
                            <View style={Styles.viewEmaileSenha}>
                                <Text style={{fontSize:20}}>Email:</Text>
                            </View>
                            <View style={Styles.viewEmaileSenha}>
                                <Text style={{fontSize:20}}>Senha:</Text>
                            </View>
                        </View>
                        <View>
                            <TextInput style={Styles.inputEmail} maxLength={40} placeholder='nome' keyboardType='name-phone-pad'/>
                            <TextInput style={Styles.inputEmail} maxLength={40} placeholder='email@email.com' autoComplete='email' keyboardType='email-address'/>
                            <TextInput style={Styles.inputSenha} maxLength={40} placeholder='senha' keyboardType='visible-password'/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:6}}>
                        <TouchableOpacity onPress={() => setPagina('login')} style={Styles.butaoCadastro}><Text style={{color:'white', textAlign:'center',fontSize:20}}>Voltar</Text></TouchableOpacity>
                        <TouchableOpacity style={Styles.butaoEntrar}><Text style={{color:'white', textAlign:'center',fontSize:20}}>Cadastrar</Text></TouchableOpacity>  
                    </View>
                </View>
            </View>
        );
    } else if (pagina == 'login') {
        return(
            <View>
                <Login/>
            </View>
        );
    }

}