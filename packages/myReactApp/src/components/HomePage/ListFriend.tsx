import * as React from "react";
import { ClashFriend } from "api/service/jsonServer/typings";
import { Link } from "react-router-dom";
import { map } from "lodash";

interface Props {
  friends: ClashFriend[];
}

const ListFriend: React.FC<Props> = ({ friends }) => (
  <React.Fragment>
    {friends && (
      <ul>
        {map(friends, ({ name, id, clashId }) => (
          <li key={id}>
            <span>{`${name}: `}</span>
            <Link to={`/playerClash/${clashId}`}>{clashId}</Link>
          </li>
        ))}
      </ul>
    )}
  </React.Fragment>
);

export default ListFriend;
