/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


const OnBoardingScreen = ({navigation:{navigate}}) => {
    const {height} = Dimensions.get("window");
    return (
        <>
        <ImageBackground source={require('../../assets/1.jpeg')} style={{flex:1, justifyContent:'flex-end'}}>
            <LinearGradient style={{height:height/3, paddingHorizontal:40}} colors={[ "rgba(0,0,0,0.1)", "#000"]}>
                <Text style={{fontSize:36, color:'white', fontWeight:'700', textAlign:'center'}}>
                    Stay health even if you stay at home
                </Text>

                <Text style={{fontSize:18, color:'white', fontWeight:'300', textAlign:'center', marginTop:15}}>
                   Staying fit to keep you in good condition can now go through mobile apps
                </Text>

                <TouchableOpacity onPress={() => navigate("Home")} style={{backgroundColor:"#007fff", paddingHorizontal:20, paddingVertical:20, borderRadius:10, alignItems:'center', marginTop:15}}>
                    <Text style={{fontSize:20, color:"#fff", fontWeight:'500'}}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </ImageBackground>
        </>
    );
   
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export default OnBoardingScreen;
