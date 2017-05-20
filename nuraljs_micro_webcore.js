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
    if(logger){
        logger.log("conn:"+req.svr.sckt+" req:"+req.url);
    }
    res.writeHead(200);
    //if(bmpenabled){
    //    bmp.getPressure(function(d) {
    //        res.write("Temperature: " + d.temperature + " C");
    //        cb(err,res);
    //    });
    //}
    else{
        cb(err,res);
    }
};
    
