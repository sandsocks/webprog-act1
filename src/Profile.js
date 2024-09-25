import React from 'react' 
function Profile(props) {
    return(
       <><h1>{props.name}{props.Age}{props.Rank}{props.Location}</h1>
       </>

    );
}
    export default Profile;