import {
  PlayerClash,
  PlayerProps,
  PlayerDispatch
} from "../../components/PlayerClash";
import { connect } from "react-redux";
import { playerFetchActions } from "./typings";
import { RoyalState } from "../app/app.reducers";
import { Dispatch } from "redux";

export interface PlayerContainerProps {
  playerId: string;
}

const mapStateToProps = (state: RoyalState): PlayerProps => {
  const { playerInfo, isFetching, errorMessage } = state.player;
  return {
    playerInfo,
    isFetching,
    errorMessage,
    inError: errorMessage !== ""
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  { playerId }: PlayerContainerProps
): PlayerDispatch => ({
  fetchPlayer1: () =>
    dispatch({
      type: playerFetchActions.PLAYER_FETCH_REQUESTED,
      playerId
    })
});

export default connect<PlayerProps, PlayerDispatch, PlayerContainerProps>(
  mapStateToProps,
  mapDispatchToProps
)(PlayerClash);
