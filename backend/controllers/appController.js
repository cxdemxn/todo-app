const db = require('./../db/queries')


exports.addList = async (req, res) => {
    const newList = req.body
    // console.log(newList)
    const data = await db.insertList(newList)

    // console.log(data)

    res.status(201).json(newList)
}

exports.getList = async (req, res) => {
    console.log(req.params.id)

    const data = await db.getList(req.params.id)
    console.log(data)

    res.json({
        id: data.list_id,
        name: data.name,
        color: data.color,
        btnId: data.btn_id
    })
}

exports.allLists = async (req, res) => {
    const data = await db.allLists()
    console.log(data)

    const allLists = []
    data.forEach(list => {
        allLists.push({
            id: list.list_id,
            name: list.name,
            color: list.color,
            btnId: list.btn_id
        })
    });

    res.json(allLists)
}