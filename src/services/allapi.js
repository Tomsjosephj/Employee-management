import { base_url } from "./base_url";
import { commonrequest } from "./samerequest";




export const empregister=async(body,header)=>{
 return await  commonrequest("POST",`${base_url}/user/register`,body,header)
}


//getallusers

export const getallusers= async(search)=>{
    return await commonrequest("GET",`${base_url}/getallusers?search=${search}`,"" )
}

export const getsingleuser= async(id)=>{

    return await commonrequest("GET", `${base_url}/getsingleusers/view/${id}`)
}

//edit user

export const edituser=async(id,body,header)=>{

    return await commonrequest("PUT", `${base_url}/employee/edit/${id}`,body ,header)

}

//delete user

export const deleteuser =async(id)=>{
    return await commonrequest("DELETE", `${base_url}/employee/delete/${id}`,{})
}