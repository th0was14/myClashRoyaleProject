import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  PlayerClash,
  PlayerDispatch,
  PlayerProps
} from "../../components/PlayerClash";
import { RoyalState } from "../app/app.reducers";
import { playerFetchActions } from "./typings";

export interface PlayerContainerProps {
  playerId: string;
}

const mapStateToProps = (state: RoyalState): PlayerProps => {
  const { playerInfo, playerChest, isFetching, errorMessage } = state.player;
  return {
    playerInfo,
    playerChest,
    isFetching,
    errorMessage,
    inError: errorMessage !== ""
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  { playerId }: PlayerContainerProps
): PlayerDispatch => ({
  fetchPlayerInfo: () =>
    dispatch({
      type: playerFetchActions.PLAYER_FETCH_REQUESTED,
      playerId
    }),
  fetchPlayerChest: () =>
    dispatch({
      type: playerFetchActions.CHEST_FETCH_REQUESTED,
      playerId
    })
});

export default connect<PlayerProps, PlayerDispatch, PlayerContainerProps>(
  mapStateToProps,
  mapDispatchToProps
)(PlayerClash);
