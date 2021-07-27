const users  = require('../users')
const getRoute = (fastify,options,done)=>{
    fastify.get('/items',(req,res)=>{
        res.send(users)
    })
    fastify.get('/items/:id',(req,res)=>{
        const {id} = req.params
        const item = users.find(i=>i.id==id)
        res.send(item)
    })
    done()
}
module.exports = getRoute