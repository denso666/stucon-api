const { getConnection } = require('../Database/db');
const { getSession } = require('./Login.extends');
const Controller = {};

Controller.login = async (req, res) => {
    try {
        const conn = await getConnection();

        const user = [ req.params.email, req.params.password ];
        const query = `select * from User where email=${user[0]} and pass=${user[1]}`;
        const response = conn.query(query);

        // get all session data
        if (response.length()) {
            let session = await getSession(
                response[0].user_id,
                response[0].rol
            );

            delete session.password;
            res.status(200).response(session);
        }
        else {
            res.status(404).reponse([]);
        }
    }
    catch(error) {
        // internal server error
        res.status(500);
        console.log(error);
    }
}