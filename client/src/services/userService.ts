import { NewUserData, UserData } from "../types";

const baseUrl ="http://localhost:3030/jsonstore/users";

export async function createUser (data: NewUserData){
  const date = new Date().toDateString()
  let response = await fetch(baseUrl,{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(
      {
        ...data,
        createdAt: date,
        updatedAt: date
      })
  }); 
  return response.json()
}

export async function getUsers(){
  let response = await fetch(baseUrl,{
    method: "GET",
    headers: {"Content-Type" :"application/json"}
  })
  return response.json()
}
