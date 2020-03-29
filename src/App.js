import React from 'react';


const App = ()=> {
  const profiles = [
    {
      name: "TARO",
      age: 10
    },
    {
      name: "SHIN",
      age: 19
    },
    {
      name: "NONN"
      
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

User.defaultProps = {
  age:  1
}
export default App;
