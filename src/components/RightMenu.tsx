import { FC, Suspense } from "react";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import UserInformationCard from "./UserInformationCard";
import UserMediaCard from "./UserMediaCard";
import Ad from "./Ad";
import { User } from "@prisma/client";

type RightMenuProps = {
  user: User;
};

const RightMenu: FC<RightMenuProps> = ({ user }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback={"loading..."}>
            <UserInformationCard user={user} />
          </Suspense>
          <Suspense fallback={"loading..."}>
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
