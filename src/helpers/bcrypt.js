
import {  genSalt,compare,hash} from "bcrypt";

const Encrypt = {
    cryptPassword: (password) =>
        genSalt(10)
            .then(salt => hash(password, salt))
            .then(hashPwd => hashPwd),


    comparePassword: (password, hashPassword) =>
        compare(password, hashPassword)
            .then(resp => resp)
}

export default Encrypt;