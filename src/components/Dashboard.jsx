import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            

            <div className="min-h-screen  bg-gray-100 flex justify-center items-center p-4">
                <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg">
                    <h1 className="text-2xl font-bold text-center py-4 border-b border-gray-200 bg-indigo-600 text-white rounded-t-xl">
                        Employee Dashboard
                    </h1>
                    <table className="w-full ">
                        <thead className="bg-indigo-100 text-left border-collapse ">
                            <tr>
                                <th className="p-3 border-b border-gray-300 font-semibold text-indigo-800">ID</th>
                                <th className="p-3 border-b border-gray-300 font-semibold text-indigo-800">Name</th>
                                <th className="p-3 border-b border-gray-300 font-semibold text-indigo-800">Job</th>
                                <th className="p-3 border-b border-gray-300 font-semibold text-indigo-800">Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-100">
                                <td className="p-3 border-b border-gray-200">1</td>
                                <td className="p-3 border-b border-gray-200">Rafika Khatun</td>
                                <td className="p-3 border-b border-gray-200">Frontend Developer</td>
                                <td className="p-3 border-b border-gray-200">₹30,000</td>
                            </tr>
                            <tr className="bg-gray-50 hover:bg-gray-100">
                                <td className="p-3 border-b border-gray-200">2</td>
                                <td className="p-3 border-b border-gray-200">Chandni Saha</td>
                                <td className="p-3 border-b border-gray-200">Backend Developer</td>
                                <td className="p-3 border-b border-gray-200">₹30,000</td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="p-3 border-b border-gray-200">3</td>
                                <td className="p-3 border-b border-gray-200">Sagufta Saini</td>
                                <td className="p-3 border-b border-gray-200">MERN Stack Developer</td>
                                <td className="p-3 border-b border-gray-200">₹40,000</td>
                            </tr>
                            <tr className="bg-gray-50 hover:bg-gray-100">
                                <td className="p-3 border-b border-gray-200">4</td>
                                <td className="p-3 border-b border-gray-200">Trusha Das</td>
                                <td className="p-3 border-b border-gray-200">Software Developer</td>
                                <td className="p-3 border-b border-gray-200">₹50,000</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='relative top-10 left-6/12' >
                <Link to="/backRegistrationForm" className='p-2  bg-gray-300 hover:bg-gray-400 rounded-md'>back</Link>
            </div>

                </div>
            </div>


        </>
    );
};

export default Dashboard;
