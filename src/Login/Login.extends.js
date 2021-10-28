const { getConnection } = require('../Database/db');

const getSession = async ( user_id, userType ) => {
    try {
        const conn = await getConnection();

        let query = 'select * from ';
        switch( userType ) {
            case 'STUDENT': query += 'Student'; break;
            case 'COMPANY': query += 'Compay';  break;
            case 'ROOT':    query += 'User';    break;
        }
        query += ` where user_id=${user_id}`
        
        const response = await conn.query(query);
        return response[0];
    }
    catch(error) {
        console.log(error);
    }
    return session;
}

module.exports = getSession;