"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStrToDate = void 0;
exports.dateStrToDate = function (dateString) {
    var dateParts = dateString
        .split('/')
        .map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
