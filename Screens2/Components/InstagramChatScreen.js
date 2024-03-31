// InstagramChatScreen.js
import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const InstagramChatScreen = () => {
  const chats = [
    { id: 1, username: 'alice', message: 'Hello!', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, username: 'bob', message: 'Hi there!', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 1, username: 'alice', message: 'Hello!', avatar: 'https://randomuser.me/api/portraits/men/13.jpg' },
    { id: 2, username: 'bob', message: 'Hi there!', avatar: 'https://randomuser.me/api/portraits/men/14.jpg' },
    { id: 1, username: 'alice', message: 'Hello!', avatar: 'https://randomuser.me/api/portraits/men/15.jpg' },
    { id: 2, username: 'bob', message: 'Hi there!', avatar: 'https://randomuser.me/api/portraits/men/16.jpg' },
    { id: 1, username: 'alice', message: 'Hello!', avatar: 'https://randomuser.me/api/portraits/men/17.jpg' },
    { id: 2, username: 'bob', message: 'Hi there!', avatar: 'https://randomuser.me/api/portraits/men/18.jpg' },
    { id: 1, username: 'alice', message: 'Hello!', avatar: 'https://randomuser.me/api/portraits/men/19.jpg' },
    { id: 2, username: 'bob', message: 'Hi there!', avatar: 'https://randomuser.me/api/portraits/men/111.jpg' },
    
  ];

  const ChatItem = ({ chat }) => {
    return (
      <View style={styles.container}>
        <Image source={{ uri: chat.avatar }} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.username}>{chat.username}</Text>
          <Text style={styles.message}>{chat.message}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>
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
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#888',
  },
  button: {
    backgroundColor: '#3897f1',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default InstagramChatScreen;
