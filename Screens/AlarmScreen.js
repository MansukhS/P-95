import React,{Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert} from 'react-native';
import MyHeader from './Component/MyHeader';


export default class AlarmScreen extends Component{
    render(){
        return(
            <View>
             <MyHeader title = 'Alarm Screen'/>
           
            
            <View>
            <TouchableOpacity>
                <Text>
                Add Alarm
                </Text>
            </TouchableOpacity>
                   
            <TouchableOpacity onPress={()=>{
                Alert.alert();
                <Text>Which Alarm(s) would you like to delete? Press on them and they will be deleted.</Text>
                if(alarmPressed){
                
                   
                }
            }}>
                <Text>
                Delete Alarm
                </Text>
            </TouchableOpacity>
            </View>
            </View>
        )

    }
}

