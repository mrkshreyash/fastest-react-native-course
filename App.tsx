import { View, Text, TextInput, Pressable } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-100 px-4">
      <Text className="mb-4 text-3xl font-bold text-slate-900">Welcome!</Text>

      <TextInput
        placeholder="Email"
        className="mb-3 h-12 w-full rounded-lg border border-slate-300 bg-white px-4"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="mb-4 h-12 w-full rounded-lg border border-slate-300 bg-white px-4"
      />

      <Pressable className="rounded-lg bg-blue-600 px-6 py-3">
        <Text className="text-lg font-semibold text-white">Login</Text>
      </Pressable>
    </View>
  );
}
