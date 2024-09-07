const db = require('../db/queries')


exports.addList = async (req, res) => {
    const newList = req.body

    try {
        const data = await db.insertList(newList)
    } catch (error) {
        console.error(`Error saving list to db:\n ${error.message}`)
        res.status(500).json({ errorMessage: error.message })
    }


    res.status(201).json(newList)
}

exports.getList = async (req, res) => {

    try {
        const data = await db.getList(req.params.id)
        const tasks = await db.getTasks(req.params.id)
        res.json({
            list: {
                id: data.list_id,
                name: data.name,
                color: data.color,
                btnId: data.btn_id,
                size: tasks.length
            },
            tasks
        })
    } catch (error) {
        console.error('Error fetching list: ', error.message)
        res.status(500).json({ errorMessage: error.message })
    }
    
}

exports.allLists = async (req, res) => {
    const data = await db.allLists()

    // const allLists = []
    // data.forEach(async list => {
    //     allLists.push({
    //         id: list.list_id,
    //         name: list.name,
    //         color: list.color,
    //         btnId: list.btn_id,
    //         size: await db.getTaskCount(list.list_id)
    //     })
    // });

    const allLists = await Promise.all(data.map(async list => {
        return {
            id: list.list_id,
            name: list.name,
            color: list.color,
            btnId: list.btn_id,
            size: await db.getTaskCount(list.list_id)  // This is async, so we need to await it
        };
    }));
    

    // console.log(allLists)

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

exports.getTasks = async (req, res) => {
    console.log(req.body)
}