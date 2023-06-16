import { ColorsEnum } from "@theme";
import { LinearGradient } from "expo-linear-gradient";
import { FC, useEffect } from "react";
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { BText } from "../BText";

interface SkeletonProps {
  variant: 'smallText' | 'text' 
  color?: 'primary' | 'secondary' | 'gray'
  style?: StyleProp<ViewStyle>
}

const skeletonColors = {
  primary: ColorsEnum.primary,
  secondary: ColorsEnum.secondary,
  gray: ColorsEnum.white
} as const

export const Skeleton: FC<SkeletonProps> = ({
  variant,
  color = 'gray',
  style
}) => {

  const animatedValue = new Animated.Value(0)

  const animated = () => {
    animatedValue.setValue(0)
    Animated.timing(
      animatedValue,
      {
        toValue: 1,
        duration: 350,
        useNativeDriver: true
      }
    ).start(() => {
      setTimeout(() => {
        animated()
      }, 500);
    })
  }

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 400]
  })

  useEffect(() => {
    animated()
  }, [])
  
  return <LinearGradient
    colors={[
      ColorsEnum.whitesmoke,
      ColorsEnum.silver,
      ColorsEnum.whitesmoke,
      ColorsEnum.silver,
    ]}
    start={[0, 1]} end={[1, 1]}
    style={StyleSheet.flatten([
      styles[variant],
      styles.container,
      style
    ])}>
    <Animated.View style={StyleSheet.flatten([
      styles.animatedView,
      { transform: [{ translateX }] },
      { backgroundColor: skeletonColors[color] }
    ])}>
      <LinearGradient
        colors={[
          ColorsEnum.whiteOverlay,
          ColorsEnum.whiteOverlay,
          ColorsEnum.white,
          ColorsEnum.whiteOverlay,
          ColorsEnum.whiteOverlay,
        ]}
        style={{ height: '100%' }}
        start={[0, 1]} end={[1, 1]}
      />
    </Animated.View>
  </LinearGradient>
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 4
  },
  text: {
    height: 16,
  },
  smallText: {
    height: 12,
  },
  animatedView: {
    width: '30%',
    height: '100%',
    opacity: 0.8,
  }
})
