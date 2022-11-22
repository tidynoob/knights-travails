const isMoveValid = move => {
  const [ x, y ] = move;
  return x >= 0 && x < 8 && y >= 0 && y < 8;
};

const movesTree = (start, parent = null) => {
  const moves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  const getMoves = () => {
    const [x, y] = start;

    const movesArray = moves.map(([dx, dy]) => 
       [x + dx, y + dy]
    ).filter(isMoveValid);
    return movesArray.map(move => movesTree(move, movesTree(start, parent)));
  };

  return {
    start,
    parent,
    getMoves,
    path() {
      const path = [];
      let node = this;
      while (node) {
        // console.log(node.start);
        path.unshift(node.start);
        node = node.parent;
      }
      return path;
    },
  };
};

const knightMoves = (start,end) => {
  const root = movesTree(start);
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node.start[0] === end[0] && node.start[1] === end[1]) {
      return node.path();
    }
    const moves = node.getMoves();
    queue.push(...moves);
  }
  return null;
};

export default knightMoves;