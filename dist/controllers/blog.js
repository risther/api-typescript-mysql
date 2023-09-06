"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBLOG = exports.updateBLOG = exports.postBLOG = exports.getBLOGs = exports.getBLOG = void 0;
const error_handle_1 = require("../utils/error.handle");
const getBLOG = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_BLOG'");
    }
};
exports.getBLOG = getBLOG;
const getBLOGs = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_BLOGS'");
    }
};
exports.getBLOGs = getBLOGs;
const updateBLOG = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_UPDATE_BLOGS'");
    }
};
exports.updateBLOG = updateBLOG;
const postBLOG = ({ body }, res) => {
    try {
        res.send(body);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_POST_BLOGS'");
    }
};
exports.postBLOG = postBLOG;
const deleteBLOG = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_DELETE   _BLOGS'");
    }
};
exports.deleteBLOG = deleteBLOG;
