import React, { Fragment } from "react";
import { ClashFriend } from "../service/jsonServer/typings";
import { Link } from "react-router-dom";
import { fetchByTypeAndId } from "../service/jsonServer";

export interface ListFriendState {
  friendList: ClashFriend[];
}

export class ListFriend extends React.Component<any, ListFriendState> {
  constructor(props) {
    super(props);
    fetchByTypeAndId("clashFriend").then((friendList: ClashFriend[]) =>
      this.setState({ friendList })
    );
  }
  public state: ListFriendState = { friendList: [] };

  public render() {
    return (
      <Fragment>
        <ul>
          {this.state.friendList
            ? this.state.friendList.map(friend => (
                <li key={friend.id}>
                  {friend.name} :{" "}
                  <Link to={"/playerClash/" + friend.clashId}>
                    {friend.clashId}
                  </Link>
                </li>
              ))
            : ""}
        </ul>
      </Fragment>
    );
  }
}
