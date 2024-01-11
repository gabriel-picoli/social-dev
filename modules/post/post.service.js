import Post from "./post.model";

export const createPost = async (body, user) => {
    return await Post.create({
        text: body.text,
        createDate: new Date(),
        createdBy: user.id
    }
    )
}

export const getPosts = async (limit = 50) => {
    return await Post.find()
        .populate('createdBy', 'user')
        .sort({ createDate: -1 })
        .limit(limit)
}

export const deletePost = async (id, user) => {
    return await Post.findOneAndDelete({
        _id: id,
        createdBy: user.id
    })
}

export const editPost = async (body, user) => {
    return await Post.findOneAndUpdate({
        _id: body.id,
        createdBy: user.id
    }, {
        text: body.text
    }, {
        new: true
    })
}