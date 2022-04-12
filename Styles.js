import { StyleSheet } from "react-native"
import Constants  from "expo-constants";

const margemtopo = Constants.statusBarHeight;
const Styles = StyleSheet.create({
    bordaPrimaria:{borderColor:'red', borderWidth:1,},
    bordaGeral:{borderColor:'red', borderWidth:1},
    inputEmail:{borderColor:'#ADADAD', borderWidth:1, height:40, width:255, padding:10, marginBottom:3, fontSize:20},
    inputSenha:{borderColor:'#ADADAD', borderWidth:1, height:40, width:255, padding:10, fontSize:20},
    caixadetexto:{borderColor:'red', borderWidth:1, textAlign:"center"},
    view1:{height:60, alignItems:"center", alignContent:"center"},
    viewEmaileSenha:{height:40, alignItems:'center', justifyContent:'center'},
    butaoCadastro:{backgroundColor:'black',borderColor:'black', borderWidth:1, borderRadius:6, height:50, justifyContent:"center", width:157},
    butaoEntrar:{backgroundColor:'black', borderColor:'black', borderWidth:1, borderRadius:6, height:50, justifyContent:"center", width:157, marginLeft:3},
});

export default Styles;