import { ScreenWidth } from "@freakycoder/react-native-helpers";

export function container(backgroundColor) {
  return {
    height: 45,
    marginTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 10,
    alignSelf: "center",
    alignContent: "center",
    width: ScreenWidth * 0.95,
    backgroundColor: backgroundColor
  };
}

export function _shadowStyle(shadowColor) {
  return {
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowColor: shadowColor,
    shadowOffset: { width: 2, height: 1 }
  };
}

export default {
  containerGlue: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    top: 2,
    left: 8,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  backArrowContainer: {
    alignContent: "center",
    justifyContent: "center"
  }
};
