import { FlatList,StyleSheet,View } from 'react-native';

const RendfokozatBlock = (props) => {
  return (
    <FlatList
       style={styles.flatList}
        data={props.items}
        numColumns={4}
        renderItem={Item}
        keyExtractor={(item) => item.alt}
        scrollEnabled={false}
      />

      
  );

};

export default RendfokozatBlock;

const Item = ({ item }) => {
  return <View style={styles.item}>{item.icon}</View>;
};
const styles = StyleSheet.create({
 
  flatList:{
    height:190,
   
  },
  item: {
    flex: 1,
    alignItems: "center",
    borderColor: "#fff"
  },

});
