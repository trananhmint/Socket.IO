import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useRegister from '../../hooks/useRegister';

const Register = () => {
    const navigate = useNavigate();
    const {loading, register} = useRegister(); 

    const [input, setInput] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
    });



    const handleRegister = async (e) => {
        e.preventDefault();
        await register(input);
    }

    return (
      <div className="flex h-screen items-center justify-center bg-white min-w-100 text-center">
        <div className="">
          <h1 className="text-3xl font-bold text-black">Register</h1>
          <form className="w-80" onSubmit={handleRegister}>
          <div>
              <label className="label text-black">Full name: </label>
              <input
                type="text"
                className="w-full px-3 py-2 input bg-stone-200"
                value={input.fullName}
                onChange={(e)=> {setInput({...input,fullName: e.target.value})}}
              />
            </div>
            <div>
              <label className="label text-black">Username: </label>
              <input
                type="text"
                className="w-full px-3 py-2 input bg-stone-200"
                value={input.username}
                onChange={(e)=> {setInput({...input,username: e.target.value})}}
              />
            </div>
            <div>
              <label className="label text-black">Password: </label>
              <input
                type="password"
                className="w-full px-3 py-2 input bg-stone-200"
                value={input.password}
                onChange={(e)=> {setInput({...input,password: e.target.value})}}
              />
            </div>
            <div>
              <label className="label text-black">Confirm Password: </label>
              <input
                type="password"
                className="w-full px-3 py-2 input bg-stone-200"
                value={input.confirmPassword}
                onChange={(e)=> {setInput({...input,confirmPassword: e.target.value})}}
              />
            </div>
            <div className="flex w-full justify-between px-2 py-4">
              <button
                className="w-28 px-4 py-3 bg-gray-400 rounded-xl text-white"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
              <button
                className="w-28 px-4 py-3 bg-green-800 rounded-xl text-white"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Register;