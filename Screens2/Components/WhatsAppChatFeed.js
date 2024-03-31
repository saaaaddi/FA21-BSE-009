import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const WhatsAppChatFeed = () => {
  const chats = [
    { id: 1, name: 'Saadi', message: 'Kya hal hai?', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Hammad', message: 'Kal Ajana', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 3, name: 'Najam', message: 'Drive Par chalien?', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 3, name: 'Huzafa', message: 'Araha hon?', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { id: 3, name: 'Jameel', message: 'Coming in 10 mins?', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 3, name: 'Javed', message: 'Konsi Car?', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { id: 3, name: 'Salman', message: 'Game khelien? lobby ajao', image: 'https://randomuser.me/api/portraits/men/90.jpg' },
    { id: 3, name: 'Saad Aziz', message: 'Semester 6th?', image: 'https://randomuser.me/api/portraits/men/21.jpg' },
    { id: 3, name: 'Huzafa Jameel', message: 'CS Dept ajao ', image: 'https://randomuser.me/api/portraits/men/20.jpg' },
    { id: 3, name: 'Salman Bangash', message: 'FYP ban gaya', image: 'https://randomuser.me/api/portraits/men/25.jpg' },
    { id: 3, name: 'Abdullah', message: 'Nice', image: 'https://randomuser.me/api/portraits/men/15.jpg' }
   
  ];

  const ChatItem = ({ chat }) => {
    return (
      <View style={styles.container}>
        <Image source={{ uri: chat.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{chat.name}</Text>
          <Text style={styles.message}>{chat.message}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatItem chat={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#888',
  },
});

export default WhatsAppChatFeed;
