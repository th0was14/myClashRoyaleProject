import * as React from "react";
import { ClashFriend } from "api/service/jsonServer/typings";
import { Link } from "react-router-dom";
import { fetchByTypeAndId } from "api/service/jsonServer";
import { map } from "lodash";

const ListFriend: React.FC = () => {
  const [friendList, setFriendList] = React.useState<ClashFriend[]>();

  React.useEffect(() => {
    fetchByTypeAndId("clashFriend").then((friendList: ClashFriend[]) =>
      setFriendList(friendList)
    );
  }, []);

  return (
    <React.Fragment>
      {friendList && (
        <ul>
          {map(friendList, ({ name, id, clashId }) => (
            <li key={id}>
              <span>{`${name} :`}</span>
              <Link to={`/playerClash/${clashId}`}>{clashId}</Link>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default ListFriend;
