import React from 'react';
import PropTypes from 'prop-types';

const App = ()=> {
  const profiles = [
    {
      name: "shin",
      age: 10
    },
    {
      name: "nonono",
      age: 18
    },
    {
      name: "nononos",
      age: 3
    }
    
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User key= {index} name={profiles.name} age={profiles.age}></User>
        })
      }

    </div>
  )
}
const User = (props)=> {
return <div>this is {props.name}, and {props.age} years old</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
