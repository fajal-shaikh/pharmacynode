var mysql = require('mysql');



module.exports = {
    getData: function(sql, param, callback){
        var connection = mysql.createConnection({
            host: '65.0.86.221',
            user: 'root',
            password: 'Akbar@786',
            database: 'pharmacy'
        });

	connection.on('error', function(err) {
	  console.log(err.code);
	});

        connection.connect(function(err){
            if(err)
            {
                console.log('error connecting database ...');
            }
        });
        if(param == null)
        {
            connection.query(sql, function(err, result){
                callback(result);
            });
        }
        else
        {
            connection.query(sql, param, function(err,result){
                callback(result);
            });
        }
    }
};



