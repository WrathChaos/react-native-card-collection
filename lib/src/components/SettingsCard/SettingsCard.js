import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Ripple from "react-native-material-ripple";
import Icon from "react-native-dynamic-vector-icons";
import Text from "@freakycoder/react-native-custom-text";
import styles, { container, _shadowStyle } from "./styles/SettingsCard.style";

const SettingsCard = props => {
  const {
    text,
    onPress,
    shadowColor,
    rippleColor,
    primaryIconSize,
    primaryIconName,
    primaryIconType,
    backgroundColor,
    primaryIconColor,
    backArrowIconSize,
    backArrowIconName,
    backArrowIconType,
    backArrowIconColor,
    rippleContainerBorderRadius,
    secondaryComponent,
    ...rest
  } = props;
  return (
    <Ripple
      onPress={onPress}
      rippleColor={rippleColor}
      rippleContainerBorderRadius={rippleContainerBorderRadius}
      style={[container(backgroundColor), _shadowStyle(shadowColor)]}
    >
      <View style={styles.containerGlue}>
        <View style={styles.contentContainer}>
          <Icon
            size={primaryIconSize}
            name={primaryIconName}
            type={primaryIconType}
            color={primaryIconColor}
          />
          <Text {...rest} style={styles.textStyle}>
            {text}
          </Text>
        </View>
        <View style={styles.backArrowContainer}>
          {secondaryComponent || (
            <Icon
              size={backArrowIconSize}
              name={backArrowIconName}
              type={backArrowIconType}
              color={backArrowIconColor}
            />
          )}
        </View>
      </View>
    </Ripple>
  );
};

SettingsCard.propTypes = {
  text: PropTypes.string,
  shadowColor: PropTypes.string,
  rippleColor: PropTypes.string,
  shadowColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  primaryIconSize: PropTypes.number,
  primaryIconType: PropTypes.string,
  primaryIconName: PropTypes.string,
  primaryIconColor: PropTypes.string,
  backArrowIconSize: PropTypes.number,
  backArrowIconName: PropTypes.string,
  backArrowIconType: PropTypes.string,
  backArrowIconColor: PropTypes.string,
  rippleContainerBorderRadius: PropTypes.number
};

SettingsCard.defaultProps = {
  primaryIconSize: 20,
  backArrowIconSize: 20,
  shadowColor: "#757575",
  rippleColor: "#9896e0",
  backgroundColor: "white",
  text: "Terms & Conditions",
  primaryIconColor: "#b3b6c3",
  backArrowIconColor: "#757575",
  primaryIconType: "FontAwesome",
  primaryIconName: "user-secret",
  rippleContainerBorderRadius: 10,
  backArrowIconType: "MaterialIcons",
  backArrowIconName: "keyboard-arrow-right"
};

export default SettingsCard;
