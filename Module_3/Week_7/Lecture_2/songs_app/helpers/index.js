const bcrypt = require('bcrypt');

const getUserWithId = (id, users) => {
  const user = users[id]
  if (user){
    return user
  }

  return null
}

const getUserWithEmail = (email, users) => {
  for (let id in users) {
    if(users[id].email === email) {
      return users[id]
    }
  }
  return null
}

const authenticateUser = (email, password, users) => {
  const user = getUserWithEmail(email, users)
  if (user){
    // if(user.password === password){
    if(bcrypt.compareSync(password, user.password)){
      return user
    }
  } 
  return null
}

module.exports = {getUserWithId, getUserWithEmail, authenticateUser}