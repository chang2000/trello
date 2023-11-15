import {auth, currentUser, UserButton} from '@clerk/nextjs'


const ProtectedPage = async () => {
  const user = await currentUser();
  const {userId} = auth()
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is protected by authentication.</p>
      User: {user?.firstName}
      UserID: {userId}
      <UserButton 
      afterSignOutUrl='/'
      /> 
    </div>
  );

  }
  export default ProtectedPage;