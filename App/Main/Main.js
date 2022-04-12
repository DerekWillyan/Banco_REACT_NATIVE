import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Text, Alert} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button, TextInput } from 'react-native-paper';
import Login from '../Login';

export default function Main(){
    
    var[saldo, setSaldo] = React.useState(parseInt(0));
    var[saldoGuardado, setSaldoGuardado] = React.useState(parseInt(0));
    const[dropContacorrenteButton, setdropContacorrenteButton] = React.useState(false);
    const[dropGuardarButton, setGuardarButton] = React.useState(false);
    const[valorSaque, setValorSaque] = React.useState('');
    const[voltarLogin, setVoltarLogin] = React.useState('conta');
    const[valueContCor, setContCor] = React.useState(0);
    const[valueSaldoGuardado, setValueSaldoGuardado] = React.useState(parseInt(0));
    const[dropSacar, setDropSacar] = React.useState(false);
    
    if (voltarLogin === 'conta') {
        function Saldo({navigation}){
            return(
                <View style={{flex:1}}>
                    <View style={{height:'10%',paddingTop:40,backgroundColor:'black'}}>
                        <Text style={{fontSize:20,textAlign:'center', color:'white', fontWeight:'bold'}}>Saldo</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
                        <Text style={{color:'#A8A8A8', fontSize:20}}>Saldo em Conta:</Text>
                        <Text style={{fontSize:60, color:'#A8A8A8'}}>R$ {saldo}</Text>
                        <Text style={{color:'#A8A8A8', fontSize:20}}>Saldo Guardado:</Text>
                        <Text style={{fontSize:60, color:'#A8A8A8'}}>R$ {saldoGuardado}</Text>
                    </View>
                </View>
            );
        }
        
        function Depositar({navigation}){
            return(
                <View style={{flex:1}}>
                    <View style={{height:'10%',paddingTop:40,backgroundColor:'black'}}>
                        <Text style={{fontSize:20,textAlign:'center', color:'white', fontWeight:'bold'}}>Depositar</Text>
                    </View>
                    <View style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
                        <View style={{width:'70%'}}>
                            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <View style={{justifyContent:'center', alignItems:'center', marginRight:5}}>
                                    <Text style={{color:'#A8A8A8', fontSize:20}}>Saldo em Conta:</Text>
                                    <Text style={{fontSize:40, color:'#A8A8A8'}}>R$ {saldo}</Text>
                                </View>
                                <View style={{justifyContent:'center', alignItems:'center', marginLeft:5}}>
                                    <Text style={{color:'#A8A8A8', fontSize:20}}>Saldo Guardado:</Text>
                                    <Text style={{fontSize:40, color:'#A8A8A8'}}>R$ {saldoGuardado}</Text>
                                </View>
                            </View>
                            <Text style={{color:'#A8A8A8', fontSize:20, textAlign:'center', marginBottom:5}}>Onde você quer depositar?</Text>
                            <Button onPress={()=>{setdropContacorrenteButton(!dropContacorrenteButton); setGuardarButton(false)}} style={{marginBottom:5}} color='black' mode='contained' >Conta Corrente</Button>
                            {
                                dropContacorrenteButton?
                                <View>
                                    <TextInput onChangeText={(text)=>setContCor(parseInt(text))} label='Valor' mode='outlined' activeOutlineColor='black' selectionColor='black' keyboardType='decimal-pad' placeholder='R$0.00'/>
                                    <Button onPress={() => {setSaldo(saldo+=valueContCor); setContCor(0);}} mode='contained' color='black' style={{alignSelf:'center',marginTop:5 ,marginBottom:5, width:'50%'}}>Depositar</Button>
                                </View>:null
                            }
                            <Button onPress={()=>{setGuardarButton(!dropGuardarButton);setdropContacorrenteButton(false)}} color='black' mode='contained'>Guardar</Button>
                            {
                                dropGuardarButton?
                                <View>
                                    <TextInput onChangeText={(text) => setValueSaldoGuardado(parseInt(text))}label='Valor' mode='outlined' activeOutlineColor='black' selectionColor='black' placeholder='R$0.00'/>
                                    <Button onPress={()=>{(valueSaldoGuardado > saldo) || (valueSaldoGuardado < 0)?(Alert.alert('Saldo Insuficiente, Seu saldo é insuficiente para tal ação'), setValueSaldoGuardado(parseInt(0))): (setSaldoGuardado(saldoGuardado+=valueSaldoGuardado),setSaldo(saldo-=valueSaldoGuardado),setValueSaldoGuardado(parseInt(0)))}} mode='contained' color='black' style={{alignSelf:'center', marginTop:5 ,marginBottom:5, width:'50%'}}>Depositar</Button>
                                </View>:null
                            }
                        </View>     
                    </View>
                </View>
            );
        
        }
        
        function Sacar({navigation}){
            return(
                <View style={{flex:1}}>
                    <View style={{height:'10%',paddingTop:40,backgroundColor:'black'}}>
                        <Text style={{fontSize:20,textAlign:'center', color:'white', fontWeight:'bold'}}>Sacar</Text>
                    </View>
                    <View style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
                        <View style={{ width:'70%'}}>
                            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <View style={{justifyContent:'center', alignItems:'center', marginRight:5}}>
                                    <Text style={{color:'#A8A8A8', fontSize:20}}>Saldo em Conta:</Text>
                                    <Text style={{fontSize:40, color:'#A8A8A8'}}>R$ {saldo}</Text>
                                </View>
                                <View style={{justifyContent:'center', alignItems:'center', marginLeft:5}}>
                                    <Text style={{color:'#A8A8A8', fontSize:20}}>Saldo Guardado:</Text>
                                    <Text style={{fontSize:40, color:'#A8A8A8'}}>R$ {saldoGuardado}</Text>
                                </View>
                            </View>
                            <TextInput label='Valor de Saque' keyboardType='numeric' onChangeText={text => setValorSaque(text)} mode='outlined' selectionColor='black' activeOutlineColor='black' placeholder='R$0,00'/> 
                            <Button onPress={()=>setDropSacar(!dropSacar)} style={{marginTop:5, height:50, alignItems:'center', justifyContent:'center'}} color='black' icon='cash' mode='contained'>Sacar</Button>
                            {
                                dropSacar?
                                    <View style={{alignItems:'center'}}>
                                        <Button onPress={()=>{valorSaque > saldo || valorSaque < 0?(Alert.alert('Algo errado', 'Saldo Insuficiente ou Valor menor que zero'), setValorSaque(0)): (setSaldo(saldo-valorSaque), setValorSaque(0))}} mode='contained' color='black' labelStyle={{fontSize:12, fontWeight:'bold'}} style={{marginTop:5, width:'85%'}}>Sacar da Cont.Corrente</Button>
                                        <Button mode='contained' color='black' labelStyle={{fontSize:12, fontWeight:'bold'}} style={{marginTop:5, width:'85%'}} onPress={()=>{valorSaque > saldoGuardado || valorSaque < 0?(Alert.alert('Algo errado', 'Saldo Insuficiente ou Valor menor que zero'), setValorSaque(0)): (setSaldoGuardado(saldoGuardado-valorSaque), setValorSaque(0))}} >Sacar da Cont.Guardado</Button>
                                    </View>
                                :null
                            }                        
                        </View>
                    </View>
                </View>
            );
        }
        
        function Transferir({navigation}){
            return(
                <View style={{flex:1}}>
                    <View style={{height:'10%',paddingTop:40,backgroundColor:'black'}}>
                        <Text style={{fontSize:20,textAlign:'center', color:'white', fontWeight:'bold'}}>Transferir</Text>
                    </View>
                    <View style={{ flex: 1,  alignItems:'center', justifyContent:'center'}}>
                        <View style={{width:"70%"}}>
                            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                <View style={{justifyContent:'center', alignItems:'center', marginRight:5}}>
                                    <Text style={{color:'#A8A8A8', fontSize:20}}>Saldo em Conta:</Text>
                                    <Text style={{fontSize:40, color:'#A8A8A8'}}>R$ {saldo}</Text>
                                </View>
                                <View style={{justifyContent:'center', alignItems:'center', marginLeft:5}}>
                                    <Text style={{color:'#A8A8A8', fontSize:20}}>Saldo Guardado:</Text>
                                    <Text style={{fontSize:40, color:'#A8A8A8'}}>R$ {saldoGuardado}</Text>
                                </View>
                            </View>
                            <TextInput label='Digite a Chave' mode='outlined' selectionColor='black' activeOutlineColor='black'/>
                            <TextInput style={{marginTop:5}} label='Digite o valor' mode='outlined' selectionColor='black' activeOutlineColor='black' placeholder='R$0.00'/>
                            <Button mode='contained' color='black' style={{marginTop:5}}>Transferir</Button>
                        </View>
                    </View>
                </View>
            );
        }
        
        function Conta({navigation}){
            return(
                <View style={{flex:1}}>
                    <View style={{height:'10%',paddingTop:40,backgroundColor:'black'}}>
                        <Text style={{fontSize:20,textAlign:'center', color:'white', fontWeight:'bold'}}>Conta</Text>
                    </View>
                    <View style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                <View style={{backgroundColor:'black', width:100, height:100, borderRadius:70}}/>
                                <Text style={{textAlign:'center', fontSize:30}}>Derek Willyan</Text>
                                <Button re onPress={()=>setVoltarLogin('login')} mode='contained' style={{width:100}} color='black'>sair</Button>
                            </View>
                    </View>
                </View>
            );        
        }
        
        const Tap = createMaterialBottomTabNavigator();
    
        return(
            <NavigationContainer>
                <Tap.Navigator initialRouteName='Saldo' activeColor="white" barStyle={{ backgroundColor: 'black' }}>
                    <Tap.Screen name='Saldo' component={Saldo} options={{tabBarLabel:'Saldo', tabBarIcon:({color})=>(<MaterialCommunityIcons name='bank' color={color} size={26}/>)}}/>
                    <Tap.Screen name='Depositar' component={Depositar} options={{tabBarLabel:'Depositar', tabBarIcon:({color})=>(<MaterialCommunityIcons name='cash-refund' color={color} size={26}/>)}}/>
                    <Tap.Screen name='Sacar' component={Sacar} options={{tabBarLabel:'Sacar', tabBarIcon:({color})=>(<MaterialCommunityIcons name='cash' color={color} size={26}/>)}}/>
                    <Tap.Screen name='Transferir' component={Transferir} options={{tabBarLabel:'Transferir', tabBarIcon:({color})=>(<MaterialCommunityIcons name='bank-transfer' color={color} size={26}/>)}}/>
                    <Tap.Screen name='Conta' component={Conta} options={{tabBarLabel:'Conta', tabBarIcon:({color})=>(<MaterialCommunityIcons name='face-profile' color={color} size={26}/>)}}/>                        
                </Tap.Navigator>
            <StatusBar style='light'/>
            </NavigationContainer>
        );        
    } else if (voltarLogin === 'login') {
        return(
            <View style={{height:'100%'}}>
                <Login/>
             <StatusBar style='dark'/>
            </View>
        );
    }
    
}