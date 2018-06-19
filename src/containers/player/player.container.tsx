import {
  PlayerClash,
  PlayerProps,
  PlayerDispatch
} from "../../components/PlayerClash";
import { connect } from "react-redux";
import { playerFetchActions } from "./typings";
import { RoyalState } from "../app/app.reducers";
import { Dispatch } from "redux";

const mapStateToProps = (state: RoyalState): PlayerProps => {
  console.log("mapStateToProps RoyalState", state);

  const { playerInfo, isFetching, errorMessage } = state.player;
  return {
    playerInfo,
    isFetching,
    errorMessage,
    inError: errorMessage !== ""
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
