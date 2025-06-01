import { Image,View,Text,StyleSheet } from 'react-native';

const RendfokozatKep = (props) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={props.imageSource}
      />
      <Text style={styles.megnevezes}>{props.rendfokozatMegnevezes}</Text>
      </View>  
  );

};
export default RendfokozatKep;
const styles = StyleSheet.create({
 
  megnevezes: {
    textAlign: 'center',
    padding:2
  },
  image:{
    width: 100,
    resizeMode: 'contain' 
  }

});
