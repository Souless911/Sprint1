console.log('starting function pulling last copy')

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handler = function(e,ctx,cb){
   let scanningParameters= {
       TableName:'Copy-Atlas',
       Limit: 100
   };
   docClient.scan(scanningParameters,function(err,data){
       if(err){
           cb(err,null);
       }else{
           cb(null,data);
       }
   })
};
// este es el codigo que tiene la funcion lambda para sacar la informacion que tiene la base de datos.
