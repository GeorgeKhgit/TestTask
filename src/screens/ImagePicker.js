import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {PickerItem} from '../components/PickerItem';
import {sendDataToApi} from '../actions'

export const ImagePicker = ({navigation}) => {
  const dispatch = useDispatch()
  const images = useSelector((state) => state.images);
  const saveImages =()=>{
    let checkArray = images.filter(item=>item.uri)
    if(checkArray.length === 5){
      dispatch(sendDataToApi(images))
    }
    else{
      return Alert.alert(
        'Alert',
        'select all 5 image please and then try again',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>car photos adding</Text>
      </View>

      <View style={styles.wrapperFlatlist}>
        <FlatList
          data={images}
          renderItem={({item}) => (
            <PickerItem history={navigation} info={item} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          saveImages();
        }}
        style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleWrapper: {
    width: Dimensions.get('window').width,
    height: 45,
    backgroundColor: '#EBF0F1',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    color: '#333E42',
    paddingLeft: 25,
    textTransform: 'uppercase',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 140,
    paddingVertical: 13,
    backgroundColor: '#EBF0F1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
  },
  buttonText: {
    color: '#333E42',
    textTransform: 'uppercase',
  },
  wrapperFlatlist: {
    height: 400,
  },
});
