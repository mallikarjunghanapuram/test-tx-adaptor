"use strict";

exports.paginate = function (queryParams) {
    const pagination = {};
    const sort = {};
    const limit = !!queryParams.limit ? queryParams.limit : 10;
    const page = !!queryParams.page ? queryParams.page : 1;
    const sortBy = !!queryParams.sortBy ? queryParams.sortBy : 'desc';
    const orderBy = !!queryParams.orderBy ? queryParams.orderBy : 'createdAt';
    delete queryParams.sortBy;
    delete queryParams.orderBy;
    if (page && limit) {
        pagination.skip = parseInt((page * limit) - limit);
        pagination.limit = parseInt(limit);
        delete queryParams.page;
        delete queryParams.limit;
    }
    sort[orderBy] = sortBy;
    pagination.sort = sort;
    return {pagination, queryParams};
};