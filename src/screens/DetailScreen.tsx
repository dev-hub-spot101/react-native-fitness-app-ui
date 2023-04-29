/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';


const DetailScreen = ({navigation:{navigate, goBack}}) => {
    return (
        <View>
            <ScrollView style={{paddingHorizontal:20, marginBottom:70}}>
                <View style={{alignItems:"center", paddingVertical:10, justifyContent:"flex-start", flexDirection:"row"}}>
                    <TouchableOpacity style={{height:40, width:40, borderWidth:1, borderColor:"#c2c2c2", alignItems:"center", justifyContent:"center", borderRadius:10}} onPress={()=>{goBack()}}>
                        <Icon name='chevron-back' size={24} color={"#111"} />
                    </TouchableOpacity>
                    <Text style={{color: "#111", fontSize:20, marginLeft:10}}>
                        Leg Muscle Strength
                    </Text>
                </View>
                <ImageBackground source={require("../../assets/4.jpg")} style={{height:250, marginVertical:20, borderRadius:10, overflow:"hidden", justifyContent:"space-between", paddingVertical:10}}>
                    <View style={{paddingHorizontal:10, alignItems:"flex-end", borderWidth:0}}>
                        <Icon name='bookmark-outline' size={24} color={"#111"} />
                    </View>
                    <View style={{borderRadius:10, overflow:"hidden", marginHorizontal:20, backgroundColor:"#111",opacity:0.8, padding:10}}>
                        <View style={{padding:10, flexDirection:"row", justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Text style={{color: "#fff", fontSize:15}}>
                                    52 minutes
                                </Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Text style={{color: "#fff", fontSize:15}}>
                                    355 calories
                                </Text>
                            </View>

                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Text style={{color: "#fff", fontSize:15}}>
                                    5 exercises
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <Text style={{color: "#111", fontSize:25, fontWeight:"500"}}>
                        Leg Muscle Strength
                    </Text>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Icon name="star" size={24} color={"gold"} />
                        <Text style={{color: "#111", fontSize:18, marginLeft:5}}>
                            5.0
                        </Text>
                    </View>
                </View>
                <Text style={{color: "#111", fontSize:16, marginTop:2}}>
                    Dasha Gaivornoski
                </Text>

                <Text style={{color: "#111", fontSize:20, fontWeight:"400", marginTop:15}}>
                    Discription
                </Text>

                <Text style={{color: "#111", fontSize:16, marginTop:2}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Text>

                <Text style={{color: "#111", fontSize:20, fontWeight:"400", marginTop:15, marginBottom:15}}>
                    Exercises (5)
                </Text>

                {

                        [1, 1, 1 ,1 ,1].map((workout, index) => (
                            <TouchableOpacity key={index} style={{backgroundColor:"#fff", padding:10, marginBottom:20,borderRadius:10, flexDirection:"row"}}>
                                <Image source={require("../../assets/5.jpg")} style={{width:100, height:100, borderRadius:10}} />
                                <View style={{marginLeft:10, justifyContent:"space-between"}}>
                                    <Text style={{color: "#111", fontSize:18}}>
                                       Squats
                                    </Text>
                                    <View style={{flexDirection:"row", alignItems:"center"}}>
                                        <Icon name="time-outline" size={20} color={"#007fff"} />
                                        <Text style={{color: "#111", fontSize:16, marginLeft:5}}>
                                            10sec/3 set
                                        </Text>
                                    </View>

                                    <View style={{flexDirection:"row", alignItems:"center"}}>
                                        <Icon name="play" size={20} color={"#007fff"} />
                                        <Text style={{color: "#111", fontSize:16, marginLeft:5}}>
                                            play
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))

                }
            </ScrollView>

            <View style={{position:"absolute", bottom:0, width:"100%", paddingBottom:10, paddingTop:10, paddingHorizontal:20}}>
                <TouchableOpacity onPress={() => navigate("Home")} style={{backgroundColor:"#007fff", paddingHorizontal:20, paddingVertical:20, borderRadius:10, alignItems:'center', marginTop:15}}>
                    <Text style={{fontSize:20, color:"#fff", fontWeight:'500'}}>
                       Start Workout
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
   
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export default DetailScreen;
