export default function Login() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-md-center">
                <div className="card">
                    <div className="card-body">
                        <div className="">
                            <form className="px-4 py-3">
                                <div className="form-group">
                                    <label htmlFor="exampleDropdownFormEmail1">Username</label>
                                    <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleDropdownFormPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
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