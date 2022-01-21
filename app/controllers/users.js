const mongoose = require('mongoose')
const model = require('../models/user');

const options = {
    page: 1,
    limit: 10
}

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}

exports.getData = (req, res) => {
    model.paginate({}, options, (err, docs) => {
        res.send({ items: docs })
    })
}

exports.getSingleData = (req, res) => {
    model.findOne({ _id: parseId(req.params.id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}

exports.postData = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if (err) {
            console.log('Duplicate Registration', err);
            res.send({ error: 'Duplicate Registration' }, 422)
        } else {
            res.send({ data: docs })
        }
    })
}

exports.updateSingleData = (req, res) => {
    const { id } = req.params
    const body = req.body
    model.updateOne({ _id: parseId(id) },
        body,
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}

exports.deleteSingleData = (req, res) => {
    const { id } = req.params
    model.deleteOne({ _id: parseId(id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}