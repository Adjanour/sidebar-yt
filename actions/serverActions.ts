"use server";
interface value {
    values:string{}
}
export const onFinish = async (values: value) => {

    if(!values) return;
    await fetch("http://localhost:8000/api/user/token/",{
      method:'POST',
      body:JSON.stringify(values),
      headers:{
        'Content-Type':'application/json'
      }
    })
  };