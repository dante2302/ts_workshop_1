
type Address = {
  [K in 
    "country" |
    "city" |
    "street" |
    "streetNumber"
  ]: string;
};

export type NewUserData = {
    [K in
      "firstName" |
      "lastName" | 
      "email" |
      "phoneNumber" |
      "imgUrl"
    ]: string;
} 
  &
{ 
  address: Address
};

export type UserData = NewUserData & ServerDefaultData 

type ServerDefaultData = {
  "_id": string,
  "createdAt": string,
  "updatedAt": string,
}

export type SetStateFunction = React.Dispatch<React.SetStateAction<UserData[]>>
