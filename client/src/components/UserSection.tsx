import SearchForm from "./SearchForm"
import UserTable from "./UserTable//UserTable"
import AddNewUser from "./UserTable/AddNewUser"
import { useState } from "react"
import { UserData } from "../types"

export default function UserSection(){
  const [users,setUsers] = useState([] as UserData[])

  return(
    <section className="card users-container">
      <SearchForm />
      <UserTable users={users} setUsers={setUsers}/>
      <AddNewUser setUsers={setUsers}/>
    </section>
  )
}
