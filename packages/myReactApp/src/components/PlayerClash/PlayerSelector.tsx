import React from "react";
import { match } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PlayerClash from "components/PlayerClash/PlayerClash";
import { isEmpty } from "lodash";
import { chestFetchAction, playerFetchAction } from "containers/player/action";
import { Alert } from "reactstrap";
import { PlayerState, RoyalState } from "store/typings";

interface Props {
  match: match<{ playerId: string }>;
}

const PlayerSelector: React.FC<Props> = ({ match }) => {
  const playerId = match.params.playerId;
  const dispatch = useDispatch();

  const [isReady, setReady] = React.useState(false);
  const { isFetching, playerInfo, playerChest, errorMessage } = useSelector<RoyalState, PlayerState>(
    s => s.player
  );

  React.useEffect(() => {
    dispatch(playerFetchAction.started(encodeURIComponent(`#${playerId}`)));
    setReady(true);
  }, [dispatch, playerFetchAction, chestFetchAction]);

  const displayContent = !isFetching && isEmpty(errorMessage) && isReady;

  return (
    <>
      {!isEmpty(errorMessage) && <Alert color="danger">{errorMessage}</Alert>}
      {isFetching && <span>Loading ...</span>}
      {displayContent && (
        <PlayerClash
          name={playerInfo.name}
          clanName={playerInfo.clanName}
          currentDeck={playerInfo.currentDeck}
          upcomingChests={playerChest.upcomingChests}
        />
      )}
    </>
  );
};

export default PlayerSelector;
