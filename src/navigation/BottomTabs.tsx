import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardScreen from '../screens/01_DashboardScreen';
import DocumentsScreen from '../screens/02_DocumentsScreen';
import MediAssistScreen from '../screens/03_MediAssistScreen';
import ProfileScreen from '../screens/04_ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
      />

      <Tab.Screen
        name="Documents"
        component={DocumentsScreen}
      />

      <Tab.Screen
        name="MediAssist"
        component={MediAssistScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
