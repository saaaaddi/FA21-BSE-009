import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TicTacToeApp = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');

  const handlePress = (index) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.playerText}>Current Player: {player}</Text>
      <View style={styles.board}>
        {board.map((value, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cell}
            onPress={() => handlePress(index)}
          >
            <Text style={styles.cellText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetButtonText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerText: {
    fontSize: 20,
    marginBottom: 20,
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  cellText: {
    fontSize: 40,
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default TicTacToeApp;
