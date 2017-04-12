module.exports.init=init;
module.exports.routes=routes;

var auth;
var logger;
var err=null;

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

function routes(req,res){
    console.log(req);
    if(logger){
        logger.log(req);
    }
};
    
