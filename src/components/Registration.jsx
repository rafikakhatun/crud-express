import { Link } from "react-router-dom";


const Registration = () => {


const handleRegistration = (e) =>{
    alert("Registration")
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const user = {
        name,
        email,
        password
    };
    





    fetch("http://localhost:5050/user/",
        {
            method:"POST",
            headers:{
                'content-type':'application/json',

            },
            body: JSON.stringify(user)
        }
    )
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })

    
    






}




    return (
        <>

        <div className=" w-full h-screen bg-gray-200 flex justify-center items-center">
            <form onSubmit={handleRegistration} className=" w-full max-w-md p-8 shadow-lg bg-white space-y-6 rounded-md">
                <h1 className="text-3xl text-center text-gray-700">Registration Form</h1>
                <div>
                    <label className="block mb-2 text-gray-600" htmlFor="">Name</label>
                    <input className="py-2 px-4 w-full rounded-md border border-gray-400 outline-none " type="text" placeholder="Enter Your Name" name="name" />
                </div>

                <div>
                    <label  className="block mb-2 text-gray-600" htmlFor="">Email</label>
                    <input className="py-2 px-4 w-full rounded-md border border-gray-400 outline-none " type="email" placeholder="email"  name="email"/>
                </div>

                <div>
                    <label  className="block mb-2 text-gray-600">Password</label>
                    <input className="py-2 px-4 w-full rounded-md border border-gray-400 outline-none " type="password" placeholder="password" name="password"></input>
                </div>

                <button className="py-2 px-4 w-full rounded-md bg-blue-600 text-white mt-4 ">Registration</button>

                <div className="flex justify-center items-center">
                    <Link to="/dashboard" className="flex justify-center items-center text-blue-700 hover:underline">Go to DashBoard</Link>
                </div>

                





            </form>
        </div>
        
        
        
        </>
    );
};

export default Registration;