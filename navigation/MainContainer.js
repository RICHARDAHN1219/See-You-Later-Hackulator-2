import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SectionList from 'react-native/Libraries/Lists/SectionList';

// Screens
import HomeScreen from './screens/HomeScreen';
import TasksScreen from './screens/TasksScreen';
import RewardsScreen from './screens/RewardsScreen';
// import MapScreen from './screens/MapScreen';

//Screen names
const homeName = "Home";
const tasksName = "Tasks";
const rewardsName = "Rewards";
// const mapName = "Map";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({//arrow function
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === tasksName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === rewardsName) {
              iconName = focused ? 'trophy' : 'trophy-outline';
            }

            // else if(rn === mapName){
            //   iconName = focused ? 'ios-location' : 'ios-location-outline';
            // }
          
            return <Ionicons name={iconName} size={size} color={'white'} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white', 
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 20, fontSize: 20 },
          style: { padding: 30, height: 70, backgroundColor: "#5D2AA8"},
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={tasksName} component={TasksScreen} />
        <Tab.Screen name={rewardsName} component={RewardsScreen} />
        {/* <Tab.Screen name={mapName} component={MapScreen} /> */}

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;