import UserRow from "./UserRow"
import UserTableHeadings from "./UserTableHeadings"
import { SetStateFunction, UserData } from "../../types"
import LoadingSpinner from "../LoadingSpinner"
import { getUsers } from "../../services/userService"
import { useEffect, useState } from "react"

interface props{
  users: [] | UserData[]
  setUsers: SetStateFunction;
}

export default function UserTable({users, setUsers}: props){
  const [error, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getUsers()
      .then((users) => setUsers(Object.values(users)))
      .catch((error) => setError(true))
      .finally(() => setLoading(false))
  },[])

  return(
    <div className="table-wrapper">
      {isLoading && 
        <LoadingSpinner />}
      <table className="table">
        <thead>
          <UserTableHeadings />
        </thead>
        <tbody>
          {(users?.length < 1 && !isLoading && !error) &&
            <div className="table-overlap">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="triangle-exclamation"
                className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                ></path>
              </svg>
              <h2>There is no users yet.</h2>
            </div>
          }

          {
            users.map((userData) => 
              <UserRow key={userData._id} data={userData} setUsers={setUsers}/>)
          }
          {error &&
            <div className="table-overlap">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="triangle-exclamation"
                className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                ></path>
              </svg>
              <h2>Failed to fetch</h2>
            </div> 
          }
        </tbody>
      </table>
    </div>
  )
}
