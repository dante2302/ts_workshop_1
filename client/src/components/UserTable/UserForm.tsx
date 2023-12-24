import { ChangeEvent, MouseEvent, useState } from "react"
import { createUser, editUser} from "../../services/userService"
import { SetStateFunction, UserData } from "../../types"


interface props{
  toggleModal: () => void;
  setState: SetStateFunction;
  userData?: UserData;
}

export default function UserForm({toggleModal, setState, userData}: props){

  let defaultFormState = 
      userData 
      ? 
        JSON.parse(JSON.stringify(userData))
      :
      {
        firstName: "",
        lastName : "",
        email: "",
        phoneNumber: "",
        imgUrl: "",
        address:{
          country: "",
          city: "",
          street: "",
          streetNumber: "",
        }
      } 

  const [formState, setFormState] = useState<UserData>(defaultFormState)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setFormState(formState => ({...formState, [e.target.name]: e.target.value }))
  }

  const addressChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setFormState(formState => (
      {...formState, 
        address:
        {...formState.address, [e.target.name]: e.target.value  }
      }
    ))
  }

  const submitHandler = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()
    for(let field in formState){
      if(field === '')return
    }

    if(userData){
      let response = await editUser(formState);
      setState(response);
      toggleModal()
      console.log(response)
    }

    else{
      let response = await createUser(formState)
      setState((users: UserData[]) => ([...users,response]))
      toggleModal()
    }
  }

  return(
    <div className="overlay">
      <div className="backdrop"></div>
      <div className="modal">
        <div className="user-container">
          <header className="headers">
            <h2>Edit User/Add User</h2>
            <button className="btn close" onClick={toggleModal}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                </path>
              </svg>
            </button>
          </header>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-user"></i></span>
                  <input 
                    id="firstName" 
                    name="firstName" 
                    type="text" 
                    value={formState.firstName}
                    onChange={(e) => changeHandler(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-user"></i></span>
                  <input 
                    id="lastName" 
                    name="lastName" 
                    type="text" 
                    value={formState.lastName}
                    onChange={(e) => changeHandler(e)}
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-envelope"></i></span>
                  <input 
                    id="email" 
                    name="email" 
                    type="text" 
                    value={formState.email}
                    onChange={(e) => changeHandler(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone number</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-phone"></i></span>
                  <input 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    type="text" 
                    value={formState.phoneNumber}
                    onChange={(e) => changeHandler(e)}
                  />
                </div>
              </div>
            </div>

            <div className="form-group long-line">
              <label htmlFor="imgUrl">Image Url</label>
              <div className="input-wrapper">
                <span><i className="fa-solid fa-image"></i></span>
                <input 
                  id="imgUrl" 
                  name="imgUrl" 
                  type="text" 
                  value={formState.imgUrl}
                  onChange={(e) => changeHandler(e)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-map"></i></span>
                  <input 
                    id="country" 
                    name="country" 
                    type="text" 
                    value={formState.address.country}
                    onChange={(e) => addressChangeHandler(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-city"></i></span>
                  <input 
                    id="city" 
                    name="city" 
                    type="text" 
                    value={formState.address.city}
                    onChange={(e) => addressChangeHandler(e)}
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="street">Street</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-map"></i></span>
                  <input 
                    id="street" 
                    name="street" 
                    type="text" 
                    value={formState.address.street}
                    onChange={(e) => addressChangeHandler(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="streetNumber">Street number</label>
                <div className="input-wrapper">
                  <span><i className="fa-solid fa-house-chimney"></i></span>
                  <input 
                    id="streetNumber" 
                    name="streetNumber" 
                    type="text" 
                    value={formState.address.streetNumber}
                    onChange={(e) => addressChangeHandler(e)}
                  />
                </div>
              </div>
            </div>
            <div id="form-actions">
              <button 
                id="action-save" 
                className="btn" 
                type="submit"
                onClick={(e) => submitHandler(e)}
              >Save</button>
              <button id="action-cancel" className="btn" type="button" onClick={toggleModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
