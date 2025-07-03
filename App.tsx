import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import './global.css';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Your Login Information', `Email: ${email}\nPassword: ${password}`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed.'),
      },
    ]);
  };

  return (
    <View className="flex-1 items-center justify-center bg-slate-100 px-4">
      <Text className="mb-4 text-3xl font-bold text-slate-900">Welcome!</Text>

      <TextInput
        placeholder="Email"
        className="mb-3 h-12 w-full rounded-lg border border-slate-300 bg-white px-4"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="mb-4 h-12 w-full rounded-lg border border-slate-300 bg-white px-4"
        value={password}
        onChangeText={setPassword}
      />

      <Pressable className="rounded-lg bg-blue-600 px-6 py-3">
        <Text className="text-lg font-semibold text-white" onPress={handleLogin}>
          Login
        </Text>
      </Pressable>
    </View>
  );
}
