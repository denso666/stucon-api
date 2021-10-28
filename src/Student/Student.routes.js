const { Router } = require('express');
const Controller = require('./Student.controller');

const router = Router();

router.route('/')
    .get( Controller.getAll );
//     .post( Controller.postClient );

router.route('/:id')
    .get( Controller.getById );
//     .put( Controller.updateClient )
//     .delete( Controller.deleteClient );

module.exports = router;