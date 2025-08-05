import { Link } from "react-router-dom";


const Registration = () => {
    return (
        <>

        <div className=" w-full h-screen bg-gray-200 flex justify-center items-center">
            <form className=" w-full max-w-md p-8 shadow-lg bg-white space-y-6 rounded-md">
                <h1 className="text-3xl text-center text-gray-700">Registration Form</h1>
                <div>
                    <label className="block mb-2 text-gray-600" htmlFor="">Name</label>
                    <input className="py-2 px-4 w-full rounded-md border border-gray-400 outline-none " type="text" placeholder="Enter Your Name" />
                </div>

                <div>
                    <label  className="block mb-2 text-gray-600" htmlFor="">Email</label>
                    <input className="py-2 px-4 w-full rounded-md border border-gray-400 outline-none " type="email" placeholder="email" />
                </div>

                <div>
                    <label  className="block mb-2 text-gray-600">Password</label>
                    <input className="py-2 px-4 w-full rounded-md border border-gray-400 outline-none " type="password" placeholder="password"></input>
                </div>

                <button className="py-2 px-4 w-full rounded-md bg-blue-600 text-white mt-4 ">Registration</button>

                <div>
                    <Link to="/dashboard" className="text-center text-blue-700">Go to DashBoard</Link>
                </div>

                





            </form>
        </div>
        
        
        
        </>
    );
};

export default Registration;