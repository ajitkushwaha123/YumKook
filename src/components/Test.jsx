import React from 'react';
import {getDatabase, ref, set} from 'firebase/database'
import {app} from './Firebase';

const Test = () => {

   // const db = getDatabase(app);

   const clickme = () => {
      console.log("clicked");
   }

    function writeUserData(userId, name, email) {
        const db = getDatabase(app);
        set(ref(db, 'users/' + userId), {
          username: name,
          email: email,
        });

        console.log(userId , name , email);
      }

  return (
    <div>
      <button onClick={() => {writeUserData(123 , "Ajit Kushwaha" , "ajit@snehavats.com")}}>Click Me</button>
    </div>
  )
}

export default Test
