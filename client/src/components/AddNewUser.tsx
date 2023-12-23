import { useState } from "react"
import NewUserForm from "./NewUserForm"

export default function AddNewUser(){

  const [modal,setModal] = useState(false)
  const toggleModal = () => setModal(!modal)

  return( 
    <>
      <button className="btn-add btn" onClick={toggleModal}>Add new user</button>
      {modal&&
        <NewUserForm toggleModal={toggleModal}/>
      }
    </>
  )
}


