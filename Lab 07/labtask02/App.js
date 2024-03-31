import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const StudentMarksApp = () => {
  const [name, setName] = useState('');
  const [subject1, setSubject1] = useState('');
  const [subject2, setSubject2] = useState('');
  const [subject3, setSubject3] = useState('');
  const [studentsList, setStudentsList] = useState([]);

  const handleSubmit = () => {
    if (name !== '' && subject1 !== '' && subject2 !== '' && subject3 !== '') {
      const newStudent = {
        name: name,
        marks: [parseFloat(subject1), parseFloat(subject2), parseFloat(subject3)],
      };
      setStudentsList([...studentsList, newStudent]);
      setName('');
      setSubject1('');
      setSubject2('');
      setSubject3('');
    }
  };

  const handleReset = () => {
    setStudentsList([]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.studentItem}>
      <Text>Name: {item.name}</Text>
      <Text>Subject 1: {item.marks[0]}</Text>
      <Text>Subject 2: {item.marks[1]}</Text>
      <Text>Subject 3: {item.marks[2]}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Student Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Subject 1 Marks"
          value={subject1}
          onChangeText={setSubject1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Subject 2 Marks"
          value={subject2}
          onChangeText={setSubject2}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Subject 3 Marks"
          value={subject3}
          onChangeText={setSubject3}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: (name !== '' && subject1 !== '' && subject2 !== '' && subject3 !== '') ? 'blue' : 'gray' }]}
          onPress={handleSubmit}
          disabled={!(name !== '' && subject1 !== '' && subject2 !== '' && subject3 !== '')}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={studentsList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  list: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  studentItem: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
});

export default StudentMarksApp;
