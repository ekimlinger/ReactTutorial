/*
A reducer take in two things:

1 - the action (info about what happened)
2 - copy of the current state

*/

function posts(state = [], action) {
  console.log("The post is changing");
  return state;
};


export default posts;
