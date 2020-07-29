import secrets from './secrets.mjs';

const isAuth = (req, res, next) => {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, secrets.JWT_SECRET, (err, decode) => {
            if(err) {
                return res.status(401).send({ success: false, message: 'Invalid token'});
            }

            req.user = token
            return next();
        });
    }

    return res.status(401).send({ success: false, message: 'Token is not supplied'});
}

const isAdmin = (req, res, next) => {
    if(req.user && req.user.isAdmin) {
        return next();
    }
    return res.status(401).send({ success: false, message: 'Admin token is not valid'});
}

export {
    isAuth,
    isAdmin
}