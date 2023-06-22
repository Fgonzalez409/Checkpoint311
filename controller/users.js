const users = require("../data/index")
// const createUser = require("../data/sampleUser")

//getAll
const list = (req,res) => {
    res.json(users)
}

//getByID
const show = (req, res) =>{
    const {id} = req.params

    const foundUser = users.find((user) => {
        return user.id === Number(id)
    })
    if(foundUser){
        res.json(foundUser)
    } else{
        res.status(404).json({message: `${id} is not found`})
    }
    
}

const create = (req, res) => {
    const {body} = req
    const user = {
        id: users.length + 1,
        ...body
    }
    users.push(user)
    res.json(user)
}

const update = (req, res) => {
    const {id} = req.params

    const foundUser = users.find((user) => {
        return user.id === Number(id)
    })
    if(foundUser){
        const index = users.indexOf(foundUser)
        const updateUsers = {
            ...foundUser,
            ...req.body
        }
        users.splice(index, 1, updateUsers)
        res.json(updateUsers)
    }
        else{
            res.status(400).json({
            msg: `No user with ID: ${id}`
        })
    }
}


const deleteUser = (req, res) => {
    const {id} = req.params

    const foundUser = users.find((user) => {
        return user.id === Number(id)
    })
    if(foundUser != -1){
        const index = users.indexOf(foundUser)
        users.splice(index, 1)
        res.json({message: "User Deleted"})
    }
    else{
        res.status(404).json({message: "User not found"})
    }
}

module.exports = {
    list,
    show,
    create,
    update,
    deleteUser
}