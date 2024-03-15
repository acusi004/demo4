import * as React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View, ViewToken } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from "react-native-reanimated";
import ListItem from "./component/ListItem.tsx";

import BodyPopular from "./component/BodyPopular.tsx";


// @ts-ignore
function Bai1({ navigation }) {
  const offset = useSharedValue(0);
  const animatedValue = withTiming(offset.value, {duration: 1000})

  const animatedStyles = useAnimatedStyle(()=>{
    return{
      transform : [{translateY : withSpring(offset.value*2)}],
    };
  });



  const animation = ()=>{
    offset.value += 10;
  }
  return (
    <>
      <View style={styles.container}>
        <Button title={'move'} onPress={animation} />
        <Button title={'bai2'} onPress={()=> navigation.navigate('Bai2')} />
        <Animated.View style={[styles.box, animatedStyles]}/>
      </View>
    </>
  );
}


// @ts-ignore
function Bai2({ navigation }) {


  const data = new Array(50).fill(0).map((_, index)=>({id:index}));

  const viewableItems = useSharedValue<ViewToken[]>([])

  return (
    <View style={{flex:1}}>
      <Button title={'Bai3'} onPress={()=> navigation.navigate('Bai3')}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <FlatList data={data}
                contentContainerStyle={{paddingTop:40}}
                renderItem={({item})=>{
                  return <ListItem item={item} viewableItems={viewableItems}/>
                }}
                onViewableItemsChanged={({viewableItems: vItems})=>{
                  console.log(viewableItems);
                  viewableItems.value = vItems
                }}
      />
    </View>
  );




}

// @ts-ignore
function Bai3({ navigation }) {

  return (
   <View>
      <BodyPopular/>
   </View>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bai1" component={Bai1} />
      <Stack.Screen name="Bai2" component={Bai2} />
      <Stack.Screen name="Bai3" options={{headerShown:false}} component={Bai3} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  box:{
    width:50,
    height:50,
    borderRadius:10,
    backgroundColor:'violet'
  },
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  listView:{
    height:80,
    width:'90%',
    backgroundColor:'violet',
    marginTop:25,
    alignSelf:'center',
    borderRadius:15
  },


});
