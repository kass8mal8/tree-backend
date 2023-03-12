// contains post and get request for trees route
const Tree = require('../model/trees_model')

const post_tree = async(req, res) => {
    const { owner, owner_id, owner_pic, type } = req.body

    const tree = await Tree.create({ owner, owner_id, owner_pic, type })
    console.log(tree)
    res.send(tree)
}

const get_trees = async(req, res) => {
    try{
        const trees = await Tree.find({})
        res.send(trees)

    }
    catch(e){
        res.status(500).send(e)
    }
}

const get_tree = async(req, res) => {
    const param= req.params.parameter

    try {
        if(param === 'today'){
            const date = new Date().toLocaleDateString()
            const trees = await Tree.find({})
    
            const arr = []
            for(const tree of trees){
                tree.createdAt.toLocaleDateString() === date && arr.push(tree)
            }
            res.send(arr.reverse())
        }
        else if(param === 'latest'){
            const trees = await Tree.find({})
            const last = trees[trees.length - 1].createdAt

            const diff = new Date().getTime()
            console.log(diff)
        }
        else{
            const trees = await Tree.find({ owner_id: param })
            res.send(trees)
        } 
    }
    catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    post_tree,
    get_trees,
    get_tree,
}