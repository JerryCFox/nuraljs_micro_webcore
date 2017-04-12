module.exports.init=init;
module.exports.routes=routes;

var err=null;

function init(options,cb){
    if(options){
        if(options.auth){
            auth=options.auth;
        }
        cb(err,"Webcore Enabled");
    }
    else{
        cb(err,"Webcore Init without Auth");
    }
};

function routes(req,res,cb){
    res.writeHead(200);
    cb(err,res);
    console.log(req);
    if(logger){
        logger.log(req);
    }
};
    
