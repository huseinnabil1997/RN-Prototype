import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';

const Prototype = () => {
  const viewShotRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const FullWidth = Dimensions.get('window').width;
  const [imageDimensions, setImageDimensions] = useState({ width: 300, height: 200 });
  const [selectedImage, setSelectedImage] = useState('');
  const [timestamp, setTimestamp] = useState('')

  const captureView = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      setCapturedImage(uri);
      saveImageToGallery(uri);
    } catch (error) {
      console.error('Error capturing view: ', error);
    }
  };

  const saveImageToGallery = async (uri) => {
    try {
      const imageUrl = uri; // Use the captured image URI directly
      const fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
      const picturesPath = `${RNFS.ExternalStorageDirectoryPath}/Pictures`;

      console.log('picturesPath', picturesPath);

      // Ensure the Pictures directory exists
      await RNFS.mkdir(picturesPath);

      // Move the captured image to the Pictures directory
      await RNFS.moveFile(imageUrl, `${picturesPath}/${fileName}`);

      // Notify the gallery about the new file
      await RNFS.scanFile(`${picturesPath}/${fileName}`);

      console.log('Image saved to Pictures successfully');
    } catch (error) {
      console.error('Error saving image to Pictures:', error);
    }
  };

  const chooseImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      const uri = response?.assets?.[0]?.uri;
      if (uri) {
        const currentDate = new Date();
        setTimestamp(currentDate.toLocaleString());
        setSelectedImage(uri);
        getImageDimensions(uri);
      }
    });
  };

  const takePhoto = () => {
    const options = {
      title: 'Take Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    // Launch camera to take a photo
    launchCamera(options, response => {
      const uri = response?.assets?.[0]?.uri;
      if (uri) {
        const currentDate = new Date();
        setTimestamp(currentDate.toLocaleString());
        setSelectedImage(uri);
        getImageDimensions(uri);
      }
    });
  };

  const getImageDimensions = (uri) => {
    Image.getSize(uri, (width, height) => {
      const aspectRatio = width / height;
      const calculatedHeight = FullWidth / aspectRatio;
      setImageDimensions({ width: FullWidth, height: calculatedHeight });
    });
  };

  useEffect(() => {
    // waterMark()
  }, []);

  return (
    <ImageBackground
      source={require('assets/educationbg.png')}
      resizeMode={'cover'}
      style={{ flex: 1 }}>
      <View
        style={{ flex: 1.55, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>Prototype</Text>
      </View>
      <View
        style={{
          flex: 9,
          paddingTop: 15,
        }}>
        <ScrollView>
          <View style={{ alignItems: 'center', padding: 10 }}>
            {selectedImage && (
              <>
                <Image
                  source={{ uri: selectedImage }}
                  style={imageDimensions}
                />
                {/* Watermark */}
                <View>
                  <ViewShot ref={viewShotRef}>
                    <Image
                      source={{ uri: selectedImage }}
                      style={imageDimensions}
                    />
                    <View style={styles.overlay}>
                      <Text style={styles.text}>{timestamp}</Text>
                    </View>
                  </ViewShot>
                </View>
              </>
            )}
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 10,
                  marginHorizontal: 5,
                }}
                onPress={() => chooseImage()}
              >
                <Text style={{ color: 'white' }}>
                  {selectedImage ? 'Choose Another' : 'Choose Image'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}
                onPress={() => takePhoto()}
              >
                <Text style={{ color: 'white' }}>Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                  marginHorizontal: 5,
                }}
                onPress={captureView}
              >
                <Text style={{ color: 'white' }}>Save Watermarked Image</Text>
              </TouchableOpacity>
            </View>
            {capturedImage && (
              <Image
                source={{ uri: capturedImage }}
                style={{ width: FullWidth, height: imageDimensions.height, resizeMode: 'contain' }}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Prototype;
