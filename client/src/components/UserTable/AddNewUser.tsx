import { useState } from "react"
import UserForm from "./UserForm"
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
        <UserForm toggleModal={toggleModal} setState={setUsers}/>
      }
    </>
  )
}


