import * as React from 'react';
import { Button, View, SafeAreaView, ToastAndroid } from 'react-native';
import { signInWithGoogle } from '../Auth/GoogleAuthentication';

export default function GroupChatSignIn({ navigation }){
  return(
    <SafeAreaView>
      <View style={{
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
      }}>
        <Button 
          title="SignIn with Google"
          onPress={()=>{
            signInWithGoogle().then((res) => {
              if (res.success){  
                global.ID_TOKEN = res.idToken;
                navigation.push("groupchat",{ user:res });
              } else {
                ToastAndroid.show(res.message,ToastAndroid.SHORT)
                ToastAndroid.show("Please try again",ToastAndroid.SHORT)
              }
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
}