"use strict";

exports.dateFilter = function (queryParams) {
    if(queryParams.dateFrom || queryParams.dateTo){
        queryParams.createdAt = {};
        if(queryParams.dateFrom){
            queryParams.createdAt['$gte'] = new Date(queryParams.dateFrom);
            delete queryParams.dateFrom;
        }
        if(queryParams.dateTo){
            const dateTo = new Date(queryParams.dateTo);
            dateTo.setDate(dateTo.getDate()+1);
            queryParams.createdAt['$lt'] = dateTo;
            delete queryParams.dateTo;
        }
    }
    return queryParams;
};