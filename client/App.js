import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import About from "./screens/About";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Payment from "./screens/Payment";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Account from "./screens/account/Account";
import Notifications from "./screens/account/Notifications";
import Profile from "./screens/account/Profile";
import Orders from "./screens/account/Orders";
import Dashboard from "./screens/admin/Dashboard";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
