import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const propStyle = (percent, baseDegrees) => {
    const rotateBy = baseDegrees + (percent * 3.6);
    return {
        transform:[{rotateZ: `${rotateBy}deg`}]
    };
}

const renderThirdLayer = (percent, commonStyles) => {
    if(percent > 50){
        return <View style={[styles.secondProgressLayer, propStyle((percent - 50), 45), commonStyles ]}></View>
    } else {
        return <View style={[styles.offsetLayer, commonStyles]}></View>
    }
}

const CircularProgress = ({percent, radius, ringWidth, textFontSize, text}) => {
    const commonStyles = {
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        borderWidth: ringWidth
    };

    const DEFAULT_DEG_ROTATION = -135;
    let firstProgressLayerStyle;
    if(percent > 50){
        firstProgressLayerStyle = propStyle(50, DEFAULT_DEG_ROTATION);
    } else {
        firstProgressLayerStyle = propStyle(percent, DEFAULT_DEG_ROTATION);
    }

    return(
        <View style={[styles.container, commonStyles]}>
            <View style={[styles.firstProgressLayer, firstProgressLayerStyle, commonStyles]}></View>
            {renderThirdLayer(percent, commonStyles)}
            <Text style={[styles.display, {fontSize: textFontSize}]}>{text} hr ago</Text>
        </View>
    );
}

CircularProgress.defaultProps = {
    percent: 0,
    radius: 100,
    ringWidth: 20,
    textFontSize: 40,
    textFontWeight: 'bold'
  }

const styles = StyleSheet.create({
  container: {
    borderColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center"
  },
  firstProgressLayer: {
    position: "absolute",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "#3498db",
    borderTopColor: "#3498db",
    transform:[{rotateZ: "-45deg"}]
  },
  secondProgressLayer: {
    position: "absolute",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "#3498db",
    borderTopColor: "#3498db",
    transform: [{rotateZ: "45deg"}]
  },
  offsetLayer: {
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "lightgrey",
    borderTopColor: "lightgrey",
    transform:[{rotateZ: "-135deg"}]
  },
  display: {
    position: "absolute",
    textAlign: "center"
  }
});

export default CircularProgress;