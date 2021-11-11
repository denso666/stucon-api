const { Router } = require('express');
const Controller = require('./Vacant.controller');

const router = Router();

router.route('/')
    .get( Controller.getAll );
//     .post( Controller.postClient );

router.route('/closed')
    .get( Controller.getAllClosed );

router.route('/:id')
    .get( Controller.getById );
//     .put( Controller.updateClient )
//     .delete( Controller.deleteClient );


module.exports = router;