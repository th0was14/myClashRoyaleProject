import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { friendFetchAction } from "containers/friend/action";
import { Home } from "components/HomePage/Home";
import { ClashFriend } from "api/service/jsonServer/typings";
import { RoyalState } from "store/typings";

export interface Props {
  id: string;
}

const HomeSelector: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();

  const friends = useSelector<RoyalState, ClashFriend[]>(state => state.friend.friends);

  React.useEffect(() => {
    dispatch(friendFetchAction.started(null));
  }, [dispatch]);

  return <Home id={id} friends={friends} />;
};

export default HomeSelector;
