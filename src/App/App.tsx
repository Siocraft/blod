import { withNavigation, withReactQuery, withRedux } from "@wrappers";
import { useForegroundPermissions } from "expo-location";
import React, { useEffect } from "react";
import { LogBox } from "react-native";
import "../Config/firebase";
import { RootStackNavigator } from "../Navigators";
LogBox.ignoreLogs([ "Warning: ..." ]); // Ignore log notification by message
LogBox.ignoreLogs([ "Setting a timer for a long period" ]);
LogBox.ignoreLogs([ "Animated: `useNativeDriver` was not specified." ]);
LogBox.ignoreLogs([ "(ADVICE) View ..." ]);
LogBox.ignoreAllLogs(); // Ignore all log notifications

export const InnerApp = () => {
  const [ status, requestPermission ] = useForegroundPermissions();

  useEffect(() => {
    if (status !== null && status.canAskAgain && !status.granted) {
      requestPermission();
    }
  }, [ status ]);

  return (
    <RootStackNavigator />
  );
};

export const App = withRedux(withReactQuery(withNavigation(InnerApp)));
