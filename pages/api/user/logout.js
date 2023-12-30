import { withIronSessionApiRoute } from 'iron-session/next'

import createHandler from '../../../lib/middlewares/nextConnect'
import { ironConfig } from '../../../lib/middlewares/iron-sessions'

const logout = createHandler()

logout.post(async (req, res) => {
    req.session.destroy()
    res.send({ ok: true })
})

export default withIronSessionApiRoute(logout, ironConfig)