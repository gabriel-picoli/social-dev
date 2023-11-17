import Joi from "joi"
import { withIronSessionApiRoute } from "iron-session/next"

import createHandler from "../../../lib/middlewares/nextConnect"
import validation from "../../../lib/middlewares/validation"

import { signupUser } from "../../../modules/user/user.service"
import { signupSchema } from "../../../modules/user/user.schema"

import { ironConfig } from "../../../lib/middlewares/iron-sessions"

const signup = createHandler()

signup.post(validation({ body: signupSchema }), async (req, res) => {
    try {
        const user = await signupUser(req.body)

        req.session.user = {
            id: user._id,
            user: user.user
        }
        await req.session.save()

        res.status(201).json({ ok: true })
    } catch (err) {
        console.error(err)
        throw err
    }
})

export default withIronSessionApiRoute(signup, ironConfig)