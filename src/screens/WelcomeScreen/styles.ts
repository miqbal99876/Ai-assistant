import {StyleSheet} from 'react-native';
import { ThemeColors } from '../../globals/constaints';


 export  const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'space-evenly',
           alignItems:'center',
            backgroundColor: ThemeColors.white,
        },
   title:{
    fontSize:24,
    fontWeight:'bold',
    color:ThemeColors.black
   },
   subTitle:{
    fontSize:10,
    fontWeight:'bold',
    color:ThemeColors.black,
    textAlign:'center'
   },
   icon:{
    height:250,
    width:250,
    resizeMode:'contain',
  
   },
   btn:{
    backgroundColor:'#10b981',
    padding:15,
    width:'90%',
    borderRadius:10
   },
   getStarted:{
    color:ThemeColors.white,
    textAlign:'center',
   },
});