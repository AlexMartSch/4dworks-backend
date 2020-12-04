const bcrypt = require('bcrypt');
const validator = require('email-validator')

const login = (req, res) => {
    try {
        const {email, password} = req.body
        // TODO - User Model

    } catch (error) {
        
    }
}

const createUser = async (req, res) => {
    
    const {username, name, email, password} = req.body

    try {

        if (!validator.validate(email)){
            return res.status(402).send({
                status: 'ERROR',
                message: "Invalid Email"
            })
        }

        // TODO: Validate usernames


        const passwordHash = await bcrypt.hash(password, 15)

        db.query('INSERT INTO users SET ?',
        {username, name, email, password:passwordHash},
        (error, results, fields) => {
            if (error) {
                return res.status(402).send({
                    status: 'ERROR',
                    message: "SQL - Error created user. ["+error.message+"]"
                })
            }
            console.log("New user created: " + username);
            res.send({
                status: "SUCCESS",
                data: {
                    username,
                    name,
                    email
                }
            })
        });
    } catch (error) {
        res.status(402).send({
            status: 'ERROR',
            message: error.message
        })
    }

}

const deleteUser = (req, res) => {
    //TODO
}

const getUsers = (req, res) => {
    //TODO
}

const getUser = (req, res) => {
    
}

const updateUser = (req, res) => {
    //TODO
}


module.exports = {
    createUser,
    deleteUser,
    updateUser,
    getUser,
    getUsers
}