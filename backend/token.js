import jwt from "jsonwebtoken";


const create_token = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.SECRTKEY, {
      expiresIn: '7d'
    });
    res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 604800000,
        secure: process.env.NODE_ENV === 'production',
      });
    };

    export default create_token;