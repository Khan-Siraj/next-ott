import bcrypt from "bcrypt";

export const encrypt = async (data:any)=>{
  const string = data.toString();
  return await bcrypt.hash(string,12);
}

export const decrypt = async (password:any,realPassword:any)=>{
  return await bcrypt.compare(password,realPassword);
}
