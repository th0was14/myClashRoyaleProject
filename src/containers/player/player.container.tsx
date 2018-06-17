import {
  PlayerClash,
  PlayerProps,
  PlayerDispatch
} from "../../components/page/PlayerClash";
import { connect } from "react-redux";
import { playerFetchActions } from "../actions/typings";
import { RoyalState } from "../reducers/app.reducers";
import { Dispatch } from "redux";

const mapStateToProps = (state: RoyalState): PlayerProps => {
  console.log("mapStateToProps RoyalState", state);

  return {
    playerInfo: state.player.playerInfo
  };
};

const mapDispatchToProps = (dispatch: Dispatch): PlayerDispatch => ({
  fetchPlayer1: playerId =>
    dispatch({
      type: playerFetchActions.PLAYER_FETCH_REQUESTED,
      playerId
    })
});

export default connect<PlayerProps, PlayerDispatch>(
  mapStateToProps,
  mapDispatchToProps
)(PlayerClash);
