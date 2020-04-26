var orm = requires('../config/orms.js');

var burger = {
    all: function(cb){
        orm.all('burgers',function(res){
           cb(res);
        })
    }
}

module.exports = burger;