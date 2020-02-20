import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  PlayerClash,
  PlayerDispatch,
  PlayerProps
} from "components/PlayerClash";
import { chestFetchAction, playerFetchAction } from "./typings";
import { RoyalState } from "store/reducers";

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
  fetchPlayerInfo: () => dispatch(playerFetchAction.started(playerId)),
  fetchPlayerChest: () => dispatch(chestFetchAction.started(playerId))
});

export default connect<PlayerProps, PlayerDispatch, PlayerContainerProps>(
  mapStateToProps,
  mapDispatchToProps
)(PlayerClash);
