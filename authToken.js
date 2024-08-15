const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
        const authHeader = req.headers['authorization']
        const Token = authHeader && authHeader.split(' ')[1]
        if (Token == null) return res.sendStatus(401).send('No Token');
    
        jwt.verify(Token, process.env.SECRET_KEY, (err,user) => { 
            if (err) return res.sendStatus(403).send('Invalid Token')
            req.user = user
            next()
        })
    }
module.exports = authenticateToken;
