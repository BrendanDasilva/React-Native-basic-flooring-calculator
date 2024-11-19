import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FlooringCalculator from "./FlooringCalculator";
import AboutScreen from "./AboutScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Flooring Calculator") {
                iconName = focused ? "calculate" : "calculate";
              } else if (route.name === "About") {
                iconName = focused ? "info" : "info-outline";
              }

              return (
                <MaterialIcons name={iconName} size={size + 5} color={color} />
              );
            },
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarStyle: {
              height: 75,
            },
            tabBarIconStyle: {
              marginTop: 8,
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="Flooring Calculator"
            component={FlooringCalculator}
          />
          <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
