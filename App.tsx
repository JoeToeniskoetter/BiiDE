import React, {useEffect, useRef, useState} from 'react';
import Lottie from 'lottie-react-native';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const lottieFile = require('./assets/lottie/Biide_intro.json');
import LinearGradient from 'react-native-linear-gradient';

export default function AnimationWithImperativeApi() {
  const animationRef = useRef<Lottie>(null);
  const [fadeAnim] = useState(new Animated.Value(0));

  const fadeIn = () =>
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start();

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <LinearGradient
      colors={['#FFA030', '#F88822', '#F57F28', '#F9751B', '#F1541D']}
      style={{width: '100%', height: '100%'}}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}>
      <Lottie
        ref={animationRef}
        source={lottieFile}
        loop={false}
        onAnimationFinish={fadeIn}
        style={{flex: 1}}
      />
      <View style={styles.buttonSection}>
        <Animated.View
          style={{
            opacity: fadeAnim,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 120,
          }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[{...styles.buttonBase}, {backgroundColor: 'white'}]}>
              <Text style={[{color: '#F16424'}, {...styles.textBase}]}>
                Join
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[{...styles.buttonBase}, {backgroundColor: '#F16424'}]}>
              <Text style={[{color: 'white'}, {...styles.textBase}]}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingTop: 20,
              paddingHorizontal: 10,
              alignItems: 'center',
            }}>
            <Text style={{textDecorationLine: 'underline', color: 'white'}}>
              Trouble Logging In?
            </Text>
            <Text style={styles.tos}>
              By registering with BiiDE you are confirming that you are at least
              19 years of age and that you agree to our Terms of Service and End
              User License Agreement. Learn about how we process and use your
              data in our Privacy Policy.
            </Text>
          </View>
        </Animated.View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,

    elevation: 5,
  },
  textBase: {
    fontWeight: '700',
    fontSize: 15,
  },
  buttonSection: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'column',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  tos: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: 20,
    color: 'white',
  },
});
