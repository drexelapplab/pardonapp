const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const formdata = require('../models/formdata1')

router.get('/', function(req, res, next) {
    formdata.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

router.get('/:id', function(req, res, next) {
    formdata.find(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/', function(req, res, next) {
    formdata.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/:id', function(req, res, next) {
    formdata.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.delete('/:id', function(req, res, next) {
    formdata.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;