/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Text, ScrollView, TouchableOpacity } from 'react-native'


const CategoryList: React.FC = () => {
    const [active, setActive] = useState("All");
    return(
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={()=>{setActive("All")}} style={{paddingHorizontal:20, paddingVertical:10, backgroundColor: active == "All"? '#007fff': "#c2c2c2", marginRight:10, borderRadius:10 }}>
                <Text style={{color: active == "All"? '#fff': "#111", fontSize:18}}>
                    All
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setActive("Squats")}} style={{paddingHorizontal:20, paddingVertical:10, backgroundColor: active == "Squats"? '#007fff': "#c2c2c2", marginRight:10, borderRadius:10 }}>
                <Text style={{color: active == "Squats"? '#fff': "#111", fontSize:18}}>
                    Squats
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setActive("Pushup")}} style={{paddingHorizontal:20, paddingVertical:10, backgroundColor: active == "Pushup"? '#007fff': "#c2c2c2", marginRight:10, borderRadius:10 }}>
                <Text style={{color: active == "Pushup"? '#fff': "#111", fontSize:18}}>
                    Pushup
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setActive("Jumping")}} style={{paddingHorizontal:20, paddingVertical:10, backgroundColor: active == "Jumping"? '#007fff': "#c2c2c2", marginRight:10, borderRadius:10 }}>
                <Text style={{color: active == "Jumping"? '#fff': "#111", fontSize:18}}>
                    Jumping
                </Text>
            </TouchableOpacity>
    </ScrollView>
    );
}


export default CategoryList;
