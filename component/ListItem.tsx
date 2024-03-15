import { StyleSheet, View, ViewToken } from "react-native";
import * as React from "react";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";


type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>
  item: {
    id: number
  }
}

const ListItem: React.FC<ListItemProps> = React.memo(({ item, viewableItems }) => {

  const style = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((item) => item.isViewable)
        .find((viewableItems) => viewableItems.item.id === item.id))
    return {
      opacity: withTiming(isVisible?1:0),
      transform:[
        {
          scale:withTiming(isVisible?1:0.6),
        },
      ],
    };
  }, []);

  return (
    <Animated.View style={[styles.listView, style]}/>

  );
});


const styles = StyleSheet.create({
  listView: {
    height: 80,
    width: "90%",
    backgroundColor: "violet",
    marginTop: 25,
    alignSelf: "center",
    borderRadius: 15
  }
});
export default ListItem;
