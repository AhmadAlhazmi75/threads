import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
function UserPage() {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={322}
        postImg="/post1.png"
        postTitle="Let's talk about threads"
      />
      <UserPost
        likes={64}
        replies={12}
        postImg="/post2.png"
        postTitle="LeetCode clone is launched now!"
      />
      <UserPost
        likes={297}
        replies={142}
        postImg="/post3.png"
        postTitle="The Greatest of all Time"
      />
      <UserPost
        likes={297}
        replies={142}
        postTitle="I hate anybody with a name that starts with E and ends with Musk"
      />
    </>
  );
}

export default UserPage;
