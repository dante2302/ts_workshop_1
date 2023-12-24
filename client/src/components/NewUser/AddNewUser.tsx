import { useState } from "react"
import NewUserForm from "./NewUserForm"
import { SetStateFunction } from "../../types"

interface props{
  setUsers: SetStateFunction
}

export default function AddNewUser({setUsers}: props){

  const [modal,setModal] = useState(false)
  const toggleModal = () => setModal(!modal)

  return( 
    <>
      <button className="btn-add btn" onClick={toggleModal}>Add new user</button>
      {modal&&
        <NewUserForm toggleModal={toggleModal} setUsers={setUsers}/>
      }
    </>
  )
}


