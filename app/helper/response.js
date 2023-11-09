let {
    dump
} = require("../helper/logs");

exports.failedRes = function (res, message = 'Failed') {
    let response = {
        code: 100,
        message: message,
        error: message // Include the error message in the response
    };
    res.json(response);
};

exports.successRes = function (res, message = 'Success', data = {}, status) {
    let response = {
        code: 200,
        message: message,
    };
    if (status === true || status === false) {
        response = Object.assign(response, {
            status: status
        });
    } else {
        response = Object.assign(response, {
            data: data
        });
    }
    res.json(response);
};

exports.authFailedRes = function (res, message = 'Failed') {
    let response = {
        code: 401,
        message: message,
        error: message // Include the error message in the response
    };
    res.json(response);
};
