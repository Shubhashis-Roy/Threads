import React from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={"12k"}
        replies={"2k"}
        postImg={"/post1.png"}
        postTitle={"New post"}
      />
    </>
  );
};

export default UserPage;
