import postModel from "./post.model";

export const createPost = async (body, user) => {
    return await postModel.create({
        text: body.text,
        createDate: new Date(),
        createdBy: user.id
    }
    )
}

export const getPosts = async (limit = 10) => {
    return await postModel.find()
        .populate('createdBy', 'user')
        .sort({ createDate: -1 })
        .limit(limit)
}