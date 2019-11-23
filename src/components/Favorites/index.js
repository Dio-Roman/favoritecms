import { connect } from "react-redux";
import { deleteFromFavorite } from "../../model/actions/favoriteAction";

import Favorites from "./Favorites";

const mapStateToProps = state => ({
  favoriteItem: state.favoriteReducer
});

const mapDispatchToProps = dispatch => ({
  deleteFromFavorite: item => dispatch(deleteFromFavorite(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
