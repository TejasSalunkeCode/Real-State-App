// export const errorHandler=(statuscode,message)=>{
//     const error = new Error();
//     error.statuscode=statuscode;
//     error.message=message;
//     return error;
// };

export const errorHandler = (statusCode, message) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};
