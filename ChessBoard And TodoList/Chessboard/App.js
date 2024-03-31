import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Text, AppRegistry } from 'react-native';

const App = () => {
  const n = 8; // Number of rows
  const m = 8; // Number of columns
  const [chessBoard, setChessBoard] = useState([]);

  useEffect(() => {
    const result = [];
    for (let i = 0; i < n; i++) {
      const row = Array.from({ length: m });
      result.push(row);
    }
    setChessBoard(result);
  }, []);

  return (
    <>
      {chessBoard.length > 0 &&
        chessBoard.map((row, rIndex) => {
          return (
            <View style={styles.row} key={rIndex}>
              {row.map((_, cIndex) => {
                return (
                  <View
                    key={cIndex}
                    style={[
                      styles.square,
                      (rIndex + cIndex) % 2 === 0 ? styles.black : styles.white,
                    ]}
                  />
                );
              })}
            </View>
          );
        })}
    </>
  );
};

const { width } = Dimensions.get('window');
const squareSize = width / 8;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  square: {
    width: squareSize,
    height: squareSize,
  },
  black: {
    backgroundColor: '#000',
  },
  white: {
    backgroundColor: '#FFF',
  },
});

// Register the component using AppRegistry
AppRegistry.registerComponent('ChessBoardScreen', () => ChessBoardScreen);

export default App;
