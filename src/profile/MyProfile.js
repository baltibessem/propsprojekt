import React from 'react'
import PropTypes from "prop-types";

const MyProfile = (props) => {

    const { fullName = "Flen" , bio ="Kadhé" , profession="Kadhé" } = props;
    console.log(props);
     return (
        <div >
          {props.fullName} {props.bio} { props.profession} {props.children}
          <button onClick={props.data }>Call the function</button>


        </div>

    )
}
MyProfile.propTypes = {
    anyProp: PropTypes.any,
    booleanProp: PropTypes.bool,
    numberProp: PropTypes.number,
    stringProp: PropTypes.string,
    functionProp: PropTypes.func
   };

export default MyProfile
