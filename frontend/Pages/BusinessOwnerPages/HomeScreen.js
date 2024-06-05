import { View, Text, Animated, Easing, TouchableOpacity } from "react-native";
import React,{useEffect,useState,useContext} from "react";
import tw from "twrnc";
import LineChartComponent from "../../assets/Data/LineChart";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import api from "../../util/Util";
// import { BarChart, Grid } from 'react-native-svg-charts';
const HomeScreen = () => {
  const navigation = useNavigation();


  const {_businessOwnerId}=useContext(AuthContext)
  const {businessInfo,setBusinessInfo}=useState({})




  
   const data = [
    { label: 'Category 1', value: 20 },
    { label: 'Category 2', value: 40 },
    { label: 'Category 3', value: 60 },
    { label: 'Category 4', value: 80 },
    { label: 'Category 5', value: 100 },
  ];
  const scaleAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);


  useEffect(()=>{
    const getBuinesses=async()=>{
      await api.get(`business/get-one-by-business-owner/${_businessOwnerId,businessId}`)
      .then((res)=>{


        
      })


    }
    getBusinesses()


    
  },[])

  return (
    <View style={[tw`flex-1 items-center justify-center`, tw`bg-orange-100`]}>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.goBack();
         
        }}
      >
        <Text style={[tw`text-sm font-bold text-black -top-10`]}>go back</Text>
      </TouchableOpacity> */}
      <Text style={[tw`text-4xl font-bold text-black mb-8`]}>Dashboard</Text>

      {


      }

      <Animated.View
        style={[
          tw`bg-white rounded-lg p-6 shadow-xl mb-6`,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Text style={[tw`text-lg font-semibold text-gray-800`]}>
          Total Views: 100
        </Text>
      </Animated.View>
      <Animated.View
        style={[
          tw`bg-white rounded-lg p-6 shadow-xl mb-6`,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Text style={[tw`text-lg font-semibold text-gray-800`]}>
          Total Reviews: 50
        </Text>
      </Animated.View>
      <Animated.View
        style={[
          tw`bg-white rounded-lg p-6 shadow-xl mb-6`,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Text style={[tw`text-lg font-semibold text-gray-800`]}>
          Average Rating: 4.5
        </Text>
      </Animated.View>
      {/* <BarChart
        style={{ flex: 1 }}
        data={data}
        svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </BarChart> */}
      {/* <LineChartComponent /> */}
      {/* Add more summary cards or widgets as needed */}
    </View>
  );
};

export default HomeScreen;
