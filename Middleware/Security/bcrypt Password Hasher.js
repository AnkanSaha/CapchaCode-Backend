// This file is part of the Express Project for hashing password.

// import bcrypt for hashing password
import {genSalt, hash, compare} from 'bcrypt';

export async function BcrypthashPassword(NormalPassword){
    let Salt = await genSalt(5) //  generating salt for hashing password
    let HashedPassword = await hash(NormalPassword, Salt) // hashing the password
    return HashedPassword; // returning the hashed password
}

export async function BcryptComparePassword(NormalPassword, HashedPassword){
    let PasswordCompare = await compare(NormalPassword, HashedPassword) // comparing the password
    return PasswordCompare; // returning the result
}