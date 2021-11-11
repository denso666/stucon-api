const { getConnection } = require('../Database/db');
const Controller = {};

Controller.getAll = async (req,res) => {
    try {
        const conn = await getConnection();
       
        const query = `
            select U.id, U.name, U.email, U.rol, C.code, C.area, C.description
            from User as U
            left join Company as C
            on C.user_id=U.id
            where U.rol='COMPANY'`;

        const rows = await conn.query(query);
    
        res.status(200).json(rows);
        
    } catch (error) { 
        // internal server error
        res.status(500);
        console.log(error);
    }
}

Controller.getById = async (req,res) => {
    try {
        const conn = await getConnection();

        const id = req.params.id;
        if (!id) res.status(404);

        const query =`
            select U.id, U.name, U.email, U.rol, C.code, C.area, C.description
            from User as U
            left join Company as C
            on C.user_id=U.id
            where C.user_id=${id} and U.rol='COMPANY'`;

        const response = await conn.query(query);
        
        res.status(200).json(response);

    } catch (error) {
        // internal server error
        res.status(500);
        console.log(error);
    }
}

// Controller.postClient = async (req,res) => {
//     const newClient = new Client({
//         name: req.body.name,
//         rfc: req.body.rfc,
//         curp: req.body.curp,
//         address: req.body.address,
//         phone_number: req.body.phone_number,
//         email: req.body.email
//     });

//     await newClient.save((err,result) => {
//         if(!err)
//             res.json(result);
//         else {
//             console.log({dataDuplicated:err.keyValue});
//             res.json({
//                 message:"Failed query",
//                 dataDuplicated:err.keyValue
//             });
//         }
//     });
// }

// Controller.updateClient = async (req,res) => {
//     const id = req.params.id;
//     const client = {
//         name: req.body.name,
//         rfc: req.body.rfc,
//         curp: req.body.curp,
//         address: req.body.address,
//         phone_number: req.body.phone_number,
//         email: req.body.email
//     };

//     const response = await Client.updateOne({_id:id},client);

//     res.json(response);
// }
// Controller.deleteClient = async (req,res) => {
//     const id = req.params.id;
//     const response = await Client.deleteOne({_id:id});
//     res.json(response);
// }

module.exports = Controller;