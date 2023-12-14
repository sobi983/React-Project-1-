import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"


//Two componnets are being used because they all will be rendered from the API 
//There is also the PostPage.jsx file where I haven't used the components. I have designed the page in that file because it will be a page from a particular post selected. It is itself acting as a components. 
const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost />
    </>
  )
}

export default UserPage