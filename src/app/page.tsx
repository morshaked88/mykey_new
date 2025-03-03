import { LeftMenu, RightMenu, Stories, CreatePost, Feed } from "@/components";
import { auth } from "@clerk/nextjs/server";

const Homepage = () => {
  const { userId } = auth();
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-1/2">
        <div className="flex flex-col gap-6">
          <Stories />
          <CreatePost />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
};

export default Homepage;
