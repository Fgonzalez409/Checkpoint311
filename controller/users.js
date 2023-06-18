const users = require("../data/index")

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
    // console.log(body.body)

    const user = {
        id: users.length + 1,
        ...body,
        postId: 1
    }
    users.push(user)
    res.json(users)
}

const update = (req, res) => {
    const {id} = req.params

    const foundUser = users.find((user) => {
        return user.id === Number(id)
    })
    if(foundUser){
        const updateUsers = {
            ...req.body
        }
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
        users.splice(foundUser, 1)
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