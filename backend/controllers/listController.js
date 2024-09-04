const db = require('../db/queries')


exports.addList = async (req, res) => {
    const newList = req.body
    // console.log(newList)
    const data = await db.insertList(newList)

    // console.log(data)

    res.status(201).json(newList)
}

exports.getList = async (req, res) => {

    const data = await db.getList(req.params.id)

    res.json({
        id: data.list_id,
        name: data.name,
        color: data.color,
        btnId: data.btn_id
    })
}

exports.allLists = async (req, res) => {
    const data = await db.allLists()

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

exports.getListCount = async (req, res) => {
    try {
        const result = await db.getListCount()
        const count = result.rows[0].count

        res.json({ listCount: parseInt(count, 10) })
    } catch (error) {
        console.error(error.message)
        res.status(400).json({ error: 'Internal Server Error' })
    }
}