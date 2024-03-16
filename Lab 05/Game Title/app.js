import React, { useState } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';

const GameLayout = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonPress = (number) => {
    setInputValue(inputValue + number.toString());
  };

  return (
    <View>
      <Text>Enter Game Title</Text>
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        keyboardType="numeric"
        placeholder="Enter number"
      />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {[...Array(10).keys()].map((number) => (
          <TouchableWithoutFeedback
            key={number}
            onPress={() => handleButtonPress(number)}
          >
            <View style={{ padding: 10 }}>
              <Text>{number}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
};

export default GameLayout;
