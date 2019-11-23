import { connect } from "react-redux";
import {
  addToFavorite,
  deleteFromFavorite
} from "../../model/actions/favoriteAction";

import Instruments from "./Instruments";

const mapStateToProps = state => ({
  favoriteItem: state.favoriteReducer
});

const mapDispatchToProps = dispatch => ({
  addToFavorite: item => dispatch(addToFavorite(item)),
  deleteFromFavorite: item => dispatch(deleteFromFavorite(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Instruments);
