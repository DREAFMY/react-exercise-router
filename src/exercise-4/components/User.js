import React from 'react';

const tranFun = (props) => {
  console.log()
  if (Number.isInteger(props.match.params.user) && props.match.params.user != "about") {
    return "User profile page.";
  } else {
    return "404 Not Found.";
  }
}

const User = (props) => {
  return (
    <div>
      {tranFun(props)}
    </div>
  );
};

export default User;