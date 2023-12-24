import { useState, useEffect } from "react"
import { getUsers } from "../services/userService"
import { UserData } from "../types"
import SearchForm from "./SearchForm"
import UserTable from "./UserTable//UserTable"
import AddNewUser from "./UserTable/AddNewUser"

export default function UserSection(){
  const [users,setUsers] = useState([] as UserData[])
  useEffect(() => {
    getUsers().then((users) => {
      setUsers(Object.values(users))
    })
  },[])
  return(
    <section className="card users-container">
      <SearchForm />
      <UserTable users={users} setUsers={setUsers}/>
      <AddNewUser setUsers={setUsers}/>
    </section>
  )
}
