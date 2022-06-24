//Import React
import React, {useState, useEffect} from 'react';
//Additional import
import axios from 'axios';
//create component
const App = () => {
// LETS CREATE A VARIABLE TO HOLD OUR APPLICATION STATE
  const [users, setUsers] = useState ([]);
// LETS CREATE OUR EFFECT
  useEffect (()=> {
// Create a helper function to make api calls

        const helperFunction = async () => {
                  // Retrieve data from api

            const response = await axios.get ('https://randomuser.me/api/?results=20')
                    // Lets retrieve the data from the response object
            const data = response.data;
            setUsers(data.results)
            // console.log(data)
        };
        helperFunction();
    }, []);
    console.log(users)
    // console.log(typeof users.results)
    const usersList = users.map((element)=>{
        return (
            <h1>
                {element.name}
            </h1>
        )
    })

    // console.log(usersArray)
      // Create our userList
    // const userList = users.map((element)=> {
    //     return(<h1>{element}</h1>)
        
    // })
    // usersArray.map(({gender})=>{
    //     console.log(gender)
    // })
    return (
        <div>
            <h1>
                {usersList}
            </h1>
        </div>
    )
}
export default App;