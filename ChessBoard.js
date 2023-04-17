

/*Chess game*/

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native';

const ChessBoard = () => {
  const [boardState, setBoardState] = useState([
    ['BR', 'BN', 'BB', 'BQ', 'BK', 'BB', 'BN', 'BR'],
    ['BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP'],
    ['WR', 'WN', 'WB', 'WQ', 'WK', 'WB', 'WN', 'WR'],
  ]);

  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleSquarePress = (row, col) => {
    if (selectedPiece) {
      // Move selected piece to new square
      const newBoardState = [...boardState];
      newBoardState[row][col] = selectedPiece;
      newBoardState[selectedPiece.row][selectedPiece.col] = '';
      setBoardState(newBoardState);

      setSelectedPiece(null);
    } else if (boardState[row][col]) {
      // Select piece on square
      setSelectedPiece({ piece: boardState[row][col], row, col });
    }
  };

  const renderSquare = (row, col) => {
    const backgroundColor = (row + col) % 2 === 0 ? '#f0d9b5' : '#b58863';

    return (
      <Button
        mode="contained"
        style={[styles.square, { backgroundColor }]}
        onPress={() => handleSquarePress(row, col)}
      >
        {boardState[row][col]}
      </Button>
    );
  };

  return (
    <View style={styles.container}>
      {[...Array(8)].map((_, row) => (
        <View key={row} style={styles.row}>
          {[...Array(8)].map((_, col) => (
            <View key={col}>{renderSquare(row, col)}</View>
          ))}
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    
    

  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'black',
    
  },
});

export default ChessBoard; 
