import React from 'react'
import { useUser} from '@auth0/nextjs-auth0';

function Profile() {
    const {user,isLoading}:any=useUser();
  return (
    <div>
        <div> 
          {
              user &&(<div>
              <img src={user.picture}/>
              <h1>{user.name}</h1>
              
              </div> ) 
          }
        </div>
    </div>
  )
}

export default Profile