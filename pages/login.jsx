import { useState } from "react"
import Swal from "sweetalert2"
import {supabase} from "../libs/supabase.lib"

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const {error} = await supabase.auth.signInWithPassword({
      email: username,
      password: password
    })
    if (error) {
      Swal.fire('Error', 'Invalid username or password!', 'warning')
      console.error(error)
    } else {
      location.replace('/admin')
      console.info('logged in')
    }
  }
  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        <div className="card">
          <div className="card-body">
            <div className="">
              <form className="px-4 py-3" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleDropdownFormEmail1">Username</label>
                  <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleDropdownFormPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}