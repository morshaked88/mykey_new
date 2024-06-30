import { FC } from "react";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import UserInformationCard from "./UserInformationCard";
import UserMediaCard from "./UserMediaCard";
import Ad from "./Ad";

type RightMenuProps = {
  userId?: string;
};

const RightMenu: FC<RightMenuProps> = ({ userId }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInformationCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
