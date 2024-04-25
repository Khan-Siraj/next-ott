import AWS from "aws-sdk";
const s3 = new AWS.S3({
    accessKeyId:process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
    secretAccessKey:process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
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