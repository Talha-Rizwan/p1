// import {Link} from "react-router-dom";
import Link from "next/link";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Signup(){
	// const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const handleSubmit = async (evt) => {
		evt.preventDefault();
		console.log(`Submitting : ${name} , ${email} ${password}`)
		try {
		  const response = await axios.post("http://localhost:4000/api/user/register",{name:name,email:email,password:password});
		  console.log(response.data);
		  navigate("/menu");
		} catch (error) {
		  console.log(error.response)
		}
	}
    return <div className="flex justify-center">
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
	<h1 className="text-2xl font-bold text-center">Sign Up</h1>
	<form onSubmit={handleSubmit} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
        <div className="space-y-1 text-sm">
			<label for="email" className="block dark:text-gray-400">Email</label>
			<input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
		</div>
        <div className="space-y-1 text-sm">
			<label for="username" className="block dark:text-gray-400">Username</label>
			<input type="text" name="username" id="username" value={name} onChange={e => setName(e.target.value)} placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block dark:text-gray-400">Password</label>
			<input type="text" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			
		</div>
		<button className="block w-full p-3 hover:underline hover:bg-red-300 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Create Account</button>
	</form>
	
	
	<p className="text-xs text-center sm:px-6 dark:text-gray-400">Back to Login
		{/* <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-100">Sign up</a> */}
        {/* <Link className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4 hover:basis-1/12 hover:text-center" to="/login"> Login </Link> */}
		{/* <Link href={'/login'}>
                    <a className='w-fit'>
                        <h2 className="text-2xl font-bold leading-none sm:text-3xl text-black w-fit">Login</h2>
                    </a>
        </Link> */}
	</p>
</div>
</div>

}

export default Signup;