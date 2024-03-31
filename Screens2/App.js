// App.js
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import WhatsAppHomeScreen from './Components/InstagramChatScreen';
import InstagramChatScreen from './Components/WhatsAppChatFeed'; 

const App = () => {
  const [isWhatsAppChat, setIsWhatsAppChat] = useState(true);

  const toggleChat = () => {
    setIsWhatsAppChat(!isWhatsAppChat);
  };

  return (
    <View style={{ flex: 1 }}>
      {isWhatsAppChat ? <WhatsAppHomeScreen /> : <InstagramChatScreen />}
      <Button title={isWhatsAppChat ? 'Switch to Instagram Chat' : 'Switch to WhatsApp Chat'} onPress={toggleChat} />
    </View>
  );
};

export default App;
