import { ScrollView, StyleSheet, Text, View, Animated, TouchableOpacity, Image } from "react-native";
import { useRef } from "react";


const BodyPopular=()=>{
  const data = [
    {
      id:1,
      title:"Product design",
      comment:10,
      content:'Design System',
      name:'jack'
    },
    {
      id:2,
      title:"Product design",
      comment:10,
      content:'Design System',
      name:'jack'
    },
    {id:3,
      title:"Product design",
      comment:10,
      content:'Design System',
      name:'jack'},
    {id:4,
      title:"Product design",
      comment:10,
      content:'Design System',
      name:'jack'},
    {id:5,
      title:"Product design",
      comment:10,
      content:'Design System',
      name:'jack'},
    {id:6,
      title:"Product design",
      comment:10,
      content:'Design System',
      name:'jack'},
    {id:7,
      title:"Product design",
      comment:10,
      content:'Design System',
      name:'jack'},
    {id:8,
      title:"Product design",
      comment:10,
      content:'Design System',
      name:'jack'},
    {id:9,
      title:"Product design",
      comment:10,
      content:'Design System',
      name:'jack'},
    {id:10,
      title:"Product design",
      comment:10,
      content:'Design System',
      name:'jack'},
    {id:11,
      title:"Product design",
      comment:10,
      content:'Design System',
      name:'jack'},
    {id:12,
      title:"Product design",
      comment:10,
      content:'Design System',
      name:'jack'},
    {id:13,
      title:"Product design",
      comment:10,
      content:'Design System',
      name:'jack'},
    {id:14,
      title:"Product design",
      comment:10,
      content:'Design System',
      name:'jack'},

  ]

  const ScollOffsetY = useRef(new Animated.Value(1)).current;

  const Header_max_Height = 100;
  const Header_min_Height = 220;
  const Scroll_Distance = Header_min_Height-Header_max_Height

  const DynamicHeader = ({value}:any)=>{

    const animatedHeader = value.interpolate({
      inputRange:[1,Scroll_Distance],
      outputRange:[Header_min_Height,Header_max_Height],
      extrapolate: 'clamp',
    })

    const animatedHeaderColor = value.interpolate({
      inputRange:[0, Scroll_Distance],
      outputRange:['#099058', '#099058'],
      extrapolate: 'clamp',
    })

    return(
      <Animated.View
      style={[style.header,{
        height: animatedHeader,
        backgroundColor: animatedHeaderColor,
      }
      ]}>
        <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>Netguru</Text>
        <Image style={{width:40, height:40, marginTop:65}} source={{uri: 'https://cdn-icons-png.flaticon.com/512/6853/6853583.png'}}/>
        <Text style={{fontSize:24, fontWeight:'bold', color:'white', marginTop:10}}>Mornin' Mark!</Text>
        <Text  style={{fontSize:24, fontWeight:'bold', color:'white'}}>Ready for a quiz ?</Text>
      </Animated.View>
    )
  }

  return(
    <View>
      <DynamicHeader value={ScollOffsetY}/>
      <ScrollView
        style={[style.scrollview, style.shadowProp]}
        scrollEventThrottle={2}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: ScollOffsetY, }}}
        ],{useNativeDriver:false} )}
      >

        <Text style={style.title}>Popular Quizes</Text>
        {data.map(item =>{
          return(
            <View style={style.container}>
              <View style={{flexDirection:'row', justifyContent:'space-between', }}>
                <Text style={{color:'black', fontSize:15}}>{item.title}</Text>
                <TouchableOpacity style={{width:60, height:40, backgroundColor:'#3C0BF6', borderRadius:10,alignItems:'center', justifyContent:'center'}}>
                  <Text style={{ fontSize:15, }}>{item.comment}</Text>
                </TouchableOpacity>
              </View>
              <Text style={{fontSize:26, fontWeight:'bold', color:'black'}}>{item.content}</Text>
              <Text style={{fontSize:16, fontWeight:'bold', color:'black', marginTop:20}}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    height:150,
    width:'90%',
    backgroundColor:'white',
    marginTop:25,
    alignSelf:'center',
    borderRadius:15,
    padding:16
  },
  header:{
    padding:17,
    left:0,
    right:0,


  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',

  },
  scrollview:{
    padding:10
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 9

  },

})
export default BodyPopular;
