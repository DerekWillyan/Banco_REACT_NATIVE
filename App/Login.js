import { Alert,Text, TextInput, View,TouchableOpacity} from 'react-native';
import * as React from 'react';
import Styles from '../Styles';
import Cadastro from './Cadastro';
import { StatusBar } from 'expo-status-bar';
import Main from './Main/Main';

export default function Login(){
    const[pagina, setPagina] = React.useState('login');
    const[email, setEmail] = React.useState('');
    const[senha, setSenha] = React.useState('');
    
    if (pagina == 'login') { 
        return(
            <View style={{alignItems:'center',justifyContent:'center',height:'100%'}}>
                <View>
                    <Text style={{textAlign:"center", fontWeight:"bold", fontSize:40}}>LOGIN</Text>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <View style={Styles.viewEmaileSenha}>
                                <Text style={{fontSize:20}}>Email:</Text>
                            </View>
                            <View style={Styles.viewEmaileSenha}>
                                <Text style={{fontSize:20}}>Senha:</Text>
                            </View>    
                        </View>
                        <View>
                            <TextInput onChangeText={(text)=>setEmail(text)} style={Styles.inputEmail} maxLength={40} placeholder='email@email.com' autoComplete='email' keyboardType='email-address'/>
                            <TextInput onChangeText={(text)=>setSenha(text)} value={senha} style={Styles.inputSenha} autoCorrect={false} multiline={false} maxLength={40} placeholder='senha' keyboardType='default'/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:6}}>
                        <TouchableOpacity onPress={() => setPagina('cadastro')} style={Styles.butaoCadastro}><Text style={{color:'white', textAlign:'center',fontSize:20}}>Cadastrar</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{email==='derek'&&senha==='1234'?setPagina('main'):Alert.alert('Incorreto', 'Usuário e Senha Incorretos')}} style={Styles.butaoEntrar}><Text style={{color:'white', textAlign:'center',fontSize:20}}>Entrar</Text></TouchableOpacity>  
                    </View>
                </View>
            <StatusBar style='auto'/>
            </View>
        );
    } else if(pagina == 'cadastro'){
        return(        
            <View>
                <Cadastro/>
            </View>
        );
    } else if(pagina == 'main'){
        return(
            <View style={{height:'100%'}}>
                <Main/>
            </View>
        );
    }
}