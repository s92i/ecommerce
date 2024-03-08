import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import About from "./screens/About";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Payment from "./screens/Payment";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
