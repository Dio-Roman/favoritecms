import { connect } from "react-redux";

import Nav from "./Nav";

const mapStateToProps = state => ({
  favoriteItem: state.favoriteReducer
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
