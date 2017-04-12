module.exports.init=init;
module.exports.routes=routes;

var err=null;
var auth;
var logger;

function init(options,cb){
    if(options){
        if(options.auth){
            auth=options.auth;
        }
        if(options.logger){
            logger=options.logger;
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
    if(logger){
        logger.log("connection:"+req.svr.port+" requesting:"+req.url);
    }
};
    
