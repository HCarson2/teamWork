//Import React
import React, {useState, useEffect} from 'react';
//Additional import
import axios from 'axios';
import Card from 'react-bootstrap/Card'//create component
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
            <div>
                {/* <h2>
                {element.name.first}
                </h2> */}
                <Card className = 'cards'style={{ width: '18rem', borderStyle: 'groove' }}>
  <Card.Img style={{borderRadius: '65px'}}variant="top" src={element.picture.large} />
  <Card.Body>
    <Card.Title><h2>{element.name.first} {element.name.last}</h2></Card.Title>
    <Card.Text>
        <h3>{element.location.street.number} {element.location.street.name} <br/>{element.location.city}, {element.location.state}<br/>{element.location.country}</h3>
    </Card.Text>
  </Card.Body>
  {/* <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
  {/* </ListGroup> */}
</Card>
            </div>
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
            <p>
                {usersList}
            </p>
        </div>
    )
}
export default App;