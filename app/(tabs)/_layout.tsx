import { Provider as PaperProvider } from "react-native-paper";
import LoginScreen from "./LoginScreen";

export default function App() {
  return (
    <PaperProvider>
      <LoginScreen />
    </PaperProvider>
  );
}
