import { NavigationContainer } from '@react-navigation/native';
import { BottomTabs } from '../Navigators';

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
