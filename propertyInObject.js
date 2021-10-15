/* JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method 
and the other uses the in keyword. If we have an object users with a property of Alan, we could check for its presence in either of the following ways:

users.hasOwnProperty('Alan');
'Alan' in users;
*/

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// If at least one name is not found using the hasOwnProperty method, the every method returns false.
// Uses arrow function with one param (username) which represents the elements in the array.
function isEveryoneHere(userObj) {
  return ['Alan', 'Jeff', 'Sarah', 'Ryan'].every(username =>
    userObj.hasOwnProperty(username)
    );
}

console.log(isEveryoneHere(users));
