import { ObjectHTMLAttributes } from "react";

export type UserData = 
  Record<
    "firstName" |
    "lastName" | 
    "email" |
    "phoneNumber" |
    "imgUrl" | 
    "country" |
    "city" | 
    "street" |
    "streetNumber" 
    ,
    string
  >

