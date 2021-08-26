const favorites = ['id-2'];
const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [],
    },
  ],
};

const markFavorites = (obj, favoritesArr) => {
  const isFavorite = favoritesArr.includes(obj.id);
  return {
    ...obj,
    isFavorite,
    nodes: obj.nodes.map(child => markFavorites(child, favoritesArr)),
  };
};

const result = markFavorites(tree, favorites);
console.log(result);
