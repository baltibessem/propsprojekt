import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types";
import MyProfile from './profile/MyProfile';

function App() {
  
  
  const fullName = "My name is Balti Bessem  ";
  const bio = "I'm IT Developer";
  const profession = "and my profession is a Student"
  const decor = {color : "red" , backgroundColor : "wheat"}
  function getData () {
    return (
      alert([fullName])

    )
  }
  return (
    <div  style={decor}>

    <MyProfile fullName={fullName} bio={bio} profession={profession} data={getData}> <img src="./imgg.jpg" style={{width:"200px" , height:"200px"}}/> </MyProfile> 
    


    </div>
  );
}

export default App;
