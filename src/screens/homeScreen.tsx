/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import CategoryList from '../components/categoryList';


const HomeScreen = ({navigation:{navigate}}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.imageContainer}>
                    <Image source={require("../../assets/2.jpeg")} style={styles.image}/>
                </View>
                <View style={styles.title}>
                    <Text style={styles.bigTitle}>Hi, Priyanka</Text>
                    <Text style={styles.smallTitle}>Apr 29, 2023</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Icon name="notifications-circle-outline" size={30} />
                </View>
            </View>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={true}>
                <CategoryList />
                <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:25}}>
                    <Text style={{color: "#111", fontSize:18}}>
                        Featured Workouts
                    </Text>
                    <TouchableOpacity>
                        <Text style={{color: "#007fff", fontSize:18}}>
                            See All
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} decelerationRate={'fast'} pagingEnabled snapToInterval={290}>
                    {
                        [1, 1, 1 ,1 ,1, 1 ,1].map((workout, index) => (
                            <TouchableOpacity key={index} onPress={()=>navigate("Detail")} style={{backgroundColor:"#fff", marginRight:15, borderRadius:10, overflow:"hidden"}}>
                                <Image source={require("../../assets/5.jpg")} style={{width:270, height:200}} />
                                <View style={{padding:10}}>
                                    <View style={{marginBottom:10, flexDirection:"row", justifyContent:"space-between" , alignItems:"center"}}>
                                        <Text style={{color: "#111", fontSize:18}}>
                                            leg muscle Strength
                                        </Text>
                                        <View style={{flexDirection:"row", alignItems:"center"}}>
                                            <Icon name="star" size={24} color={"gold"} />
                                            <Text style={{color: "#111", fontSize:18, marginLeft:5}}>
                                                5.0
                                            </Text>
                                        </View>
                                    </View>
                                    <Text style={{color: "#111", fontSize:16}}>
                                        Dasha Gaivornoski
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
                <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:25}}>
                    <Text style={{color: "#111", fontSize:18}}>
                       Trending Plans
                    </Text>
                    <TouchableOpacity>
                        <Text style={{color: "#007fff", fontSize:18}}>
                            See All
                        </Text>
                    </TouchableOpacity>
                </View>
                {
                        [1, 1, 1 ,1 ,1, 1 ,1].map((workout, index) => (
                            <TouchableOpacity key={index} onPress={()=>navigate("Detail")} style={{backgroundColor:"#fff", padding:5, marginBottom:10,borderRadius:10, flexDirection:"row"}}>
                                <Image source={require("../../assets/4.jpg")} style={{width:100, height:100, borderRadius:10}} />
                                <View style={{marginLeft:10, justifyContent:"space-between"}}>
                                    <Text style={{color: "#111", fontSize:18}}>
                                        leg muscle Strength
                                    </Text>
                                    <View style={{flexDirection:"row", alignItems:"center"}}>
                                        <Icon name="calendar-outline" size={20} color={"#111"} />
                                        <Text style={{color: "#111", fontSize:16, marginLeft:5}}>
                                            8 Weeks | Home
                                        </Text>
                                    </View>

                                    <View style={{flexDirection:"row", alignItems:"center"}}>
                                       <>
                                          <Icon name="star" size={20} color={"gold"} />
                                          <Icon name="star" size={20} color={"gold"} />
                                          <Icon name="star" size={20} color={"gold"} />
                                          <Icon name="star" size={20} color={"gold"} />
                                          <Icon name="star" size={20} color={"gold"} />
                                       </>
                                        <Text style={{color: "#111", fontSize:16, marginLeft:5}}>
                                           5.0
                                        </Text>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        ))
                    }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        flexDirection:"row",
        padding:15,
    },
    imageContainer:{
        height:50,
        width:50,
        borderRadius:25,
        overflow:"hidden",
        alignItems:"center",
        justifyContent:"center"
    },
    image:{
        height:"100%",
        width:"100%"
    },
    title:{
        paddingHorizontal:10,
        flex:1,
        justifyContent:"center"
    },
    bigTitle:{
        fontSize:18,
        fontWeight:'500',
    },
    smallTitle:{
        fontSize:14,
        fontWeight:'300',
        opacity:0.6
    },
    scroll:{
        margin:"3%",
        flex:1,
        paddingHorizontal:10,
    },
    
})

export default HomeScreen;
