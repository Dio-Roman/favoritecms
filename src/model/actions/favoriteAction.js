export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const addToFavorite = item => ({
  type: ADD_TO_FAVORITE,
  item
});

export const DELETE_FROM_FAVORITE = 'DELETE_FROM_FAVORITE';
export const deleteFromFavorite = item => ({
  type: DELETE_FROM_FAVORITE,
  item
});
