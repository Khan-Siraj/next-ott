import AWS from "aws-sdk";
// const credentials = new AWS.SharedIniFileCredentials({profile: 's3User'});
console.log('Connecting to AWS...')
const credentials = new AWS.Credentials({
    accessKeyId:process.env.ACCESS_KEY_ID||'',
    secretAccessKey:process.env.SECRET_ACCESS_KEY||''
})
AWS.config.credentials = credentials
AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {
        console.log('Connected to AWS Successfully !')
    }
});

export default AWS;