import * as React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";
import Fire from '../firebase/firebase'
import { useEffect, useState } from 'react';

export default function GroupChat({ route }){
  const [ messages, updateMessages ] = useState([]);
  const [ user, updateUser ] = useState({
    email:'',
    _id:'',
    name:'',
    avatar:'',  
  })

  useEffect(() => {
    let newUser = route.params.user.user;
    let newUserObj = {
      _id: newUser.id,
      name: newUser.name,
      avatar: newUser.photoUrl,  
    } 
    updateUser(newUserObj)
    Fire.get(message => updateMessages( previous => GiftedChat.append(previous, message)  )   )

    return ()=>{
      Fire.off();
    }
  },[]);

  return(
    <KeyboardAvoidingView style={{flex:1}} keyboardVerticalOffset={10} enabled>
      <GiftedChat 
        messages={messages} 
        onSend={Fire.send} 
        user={user}
        renderUsernameOnMessage={true}
        placeholder="Type here..."
        showUserAvatar={true}
        alwaysShowSend={true}
        scrollToBottom={true}
        renderUsernameOnMessage={true}
      />
    </KeyboardAvoidingView>
  );
}