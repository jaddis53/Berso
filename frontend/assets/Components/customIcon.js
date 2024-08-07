import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";


const iconMap = {
  FontAwesome,
  MaterialIcons,
  Ionicons,
  Entypo,
  Feather,
  FontAwesome6,
  FontAwesome5,
  Feather,
  AntDesign,
  Entypo,
  EvilIcons,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
  // Add other icon sets here
};

const CustomIcon = ({ iconName }) => {
  let IconComponent = null;


  // Iterate through each icon set
  for (const [iconSetName, iconSet] of Object.entries(iconMap)) {
    if (iconSet.hasOwnProperty(iconName)) {
      // If the icon name exists in the current icon set, assign the icon component
      IconComponent = iconSet;
      break; // Exit loop
    }
  }

  // If no matching icon set found, default to FontAwesome
  IconComponent = IconComponent || FontAwesome6 ;

  return <IconComponent name={iconName} size={30} style={tw`mb-2`} />;
};

export default CustomIcon;