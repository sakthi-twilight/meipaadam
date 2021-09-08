
module.exports.Response = () => {
    return {
        meta : {
            statusCode: 200,
            message: 'Success',
            error: null,
            pageSize: 0,
            offset: 0 ,
            total: 0,
            data: {}
        }
    }
}

