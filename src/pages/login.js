import react ,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import LOGIN from "../images/job1.jpg"

import "../pages/login.css";
export default function Login() {
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Step 2: Define the form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
    // Add authentication logic here
  };

    return (

<>


{/* <div className="form-container">
                  <div className="Card-body">


              <h2 style={{textAlign:"center", color:"red", fontSize:"bolded"}}>Login Page</h2>
            {/* <img className="image mt-5 h-700PX  w-700px d-flex flex-column background-image" src={JOB1} alt="card Images" /> */}

             {/* <div className="Container">
                <div className="Card">
                            <div className="card-text">

                <label>Name</label>
                <input type="text"/><br></br>
                <label>Email</label>
                <input type="text" /><br></br>
                <label>password</label>
                <input type="text"/><br></br>
                <label>Phone number</label>
                <input type="number"/><br></br>
                <label>ID</label>
                <input type="text"/><br></br>
                <button type="submit">submit</button>
            </div> 
            </div>
            </div>
            </div
</from> */} 





    <div className="container mt-5 login-container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow p-4 rounded">
            <h3 className="text-center mb-4 text-primary">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-4">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
                            <div className="form-group mb-4">
                <label>Number</label>
                <input
                  type="Number"
                  className="form-control"
                  placeholder="Enter Number"
                  value={Number}
                  onChange={(e) => 
                    
                    
                    
                    
                    
                    
                    
                    
                    (e.target.value)}
                  required
                />
              </div>


              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

</>
  )};