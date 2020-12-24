import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from './shared/Header';
import GroupChat from './screens/GroupChat';
import GroupChatSignIn from './screens/GroupChatSignIn';

const groupChatStack = createStackNavigator();
function GroupChatStack() {
  return (
    <groupChatStack.Navigator>
      <groupChatStack.Screen 
        name="groupchatsignin" 
        component={GroupChatSignIn} 
        options={({navigation})=>({
          header: () => <Header title='Group Chat Signin' navigation={navigation}/> 
        })}
      />
      <groupChatStack.Screen 
        name="groupchat" 
        component={GroupChat} 
        options={({navigation})=>({
          header: () => <Header title='Group Chat' navigation={navigation}/>
        })}
      />
    </groupChatStack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GroupChatStack/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}