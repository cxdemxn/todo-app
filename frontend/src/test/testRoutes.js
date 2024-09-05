import { loadIndex } from "../Core/controlla";

export default [
    {
        path: '/',
        controller: router('/')
    },
    {
        path: `/list/:id`,
        controller: router(id)
    }
]