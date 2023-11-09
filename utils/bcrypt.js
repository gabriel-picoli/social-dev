import bcryptjs from 'bcryptjs'

export const hashPassword = (password) => // ? senha convertida de maneira indecifravel 
    bcryptjs.hashSync(password)

export const comparePassword = (password, hash) =>
    bcryptjs.compareSync(password, hash)
