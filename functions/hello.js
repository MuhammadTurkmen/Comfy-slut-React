
// domian/.netlify/functions/hello
const items = [
    {id: 1, name: 'john'},
    {id: 2, name: 'susan'}
]

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: 'hello world'
    }
}