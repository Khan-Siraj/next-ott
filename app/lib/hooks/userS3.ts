import AWS from "aws-sdk";
const s3 = new AWS.S3({
    accessKeyId:"AKIATCKANMZNQ7MDKBFG",
    secretAccessKey:"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",
    region: 'ap-south-1'
});

const Bucket = "khanott";

const useS3 = (file:File,key=file.name)=>{
  const upload = ()=>{
    const options = {
      Bucket,
      Body: file,
      Key: key
    }
    return s3.upload(options);
  }
  return upload;
}

export default useS3;