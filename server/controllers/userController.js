const connection = require('../connection')
const createJWT = require('../helper/createJWT')

// create/post new user
const createUser = async (req, res) => {
  try {
    connection.query(`select * from users where email = '${req.body.email}'`, function(err, user) {
      if(user[0] === undefined) {
      connection.query(`INSERT INTO users SET ?, password = sha2('${req.body.password}',512)`,
        {
          username: req.body.username,
          email: req.body.email,
        }
      )} else {
          console.log('Login not successful.')
          return res.status(400).json({success:false, error:"Login not successful."})
      }
        connection.query(`select * from users where email = '${req.body.email}';`, function(err, user) {
        const token = createJWT(user)
        res.status(200).json({
          success: true,
          token: token,
          message: 'Created user successfully.',
        })
    })
  })}
  catch (err) {
    console.log(err)
    res.status(500).json({success:false, message:"Failed logging in user, something went wrong."})
  }
} 

loginUser = (req, res) => {
  try {
    connection.query(`select * from users where email = '${req.body.email}' && password = sha2('${req.body.password}',512);`, function(err, user) {
      if(user[0] !== undefined) {
        console.log('Login was successful.')
          const token = createJWT(user)
          res.status(200).json({
            success: true,
            token: token,
            message: 'Login was successful.',
          })
      } else {
          console.log('Login not successful.')
          return res.status(400).json({success:false, error:"Login not successful."})
      }
  })}
  catch (err) {
    console.log(err)
    res.status(500).json({success:false, message:"Failed logging in user, something went wrong."})
  }
}

const getUser = async (req, res) => {
    connection.query(`select * from users where user_id = '${req.user}';`, function(err, user) {
    if (err) {
      return res.status(500).end()
    }
    res.status(200).json({user: user})
  })
}

module.exports = {
    createUser,
    loginUser,
    getUser
}