const users = [
    {
        id: 1,
        name: 'luka',
        lastname: 'ivanishvili'
    }
]

const getUsers = (req, res) => {
    res.status(200).json(users)
}


module.exports = { getUsers }