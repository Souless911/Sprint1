console.log('starting function pulling last copy')

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});


const createMessage = async(_params)=>{
    try{
        await docClient.put(_params).promise();
    }catch(err){
        console.log(err)
        return err;
    }
}
exports.handler = async (event) => {
    try{
        let form=event.body;
        let params= {
            Item:{ IdItem:3 , Cantidad:form.cantidad , Costo:form.costo , Nombre:form.Nombre},
            TableName:'Copy-Atlas'
        }

         await createMessage(params);
    const response = {
        statusCode: 200,
        body: JSON.stringify('added data'),
    };
    return response;
    }catch(err){
        const response = {
        statusCode: 400,
        body: JSON.stringify(err),
    };
        
    }
// este es el codigo que tiene la funcion lambda para meter informacion a la base de datos (COPIA)
