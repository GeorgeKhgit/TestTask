import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch} from 'react-redux';
export const PickerItem = ({info, history}) => {
  const dispatch = useDispatch();
  const choosePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 350,
      height: 400,
      cropping: true,
    }).then((image) => {
      dispatch({type: 'SETIMAGE', payload: {id: info.id, data: image.path}});
    });
  };
  const detailInfo = () => {
    history.navigate('image', {
      detailinfo: info.uri,
      title:info.name
    });
  };
  return (
    <View style={styles.container}>
      {!info.uri ? (
        <>
          <Text style={styles.containerText}>{info.name}</Text>

          <TouchableOpacity onPress={choosePhotoFromGallery}>
            <Text>ADD IMG</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          onPress={() => {
            detailInfo();
          }}
          style={styles.imgItemContainerWrapper}>
          <Image style={styles.imgItemContainer} source={{uri: info.uri}} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#E5E5E5',
    marginLeft: 10,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginRight: 15,
  },
  imgItemContainerWrapper: {
    width: '100%',
    height: '100%',
  },
  imgItemContainer: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  containerText: {
    color: '#333E42',
  },
});
