import { UserData } from "./types";
const baseUrl ="http://localhost:3030/jsonstore/users";

export async function createUser (data: UserData){
  let a = await fetch(baseUrl,{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }); 
  return a.json()
}
