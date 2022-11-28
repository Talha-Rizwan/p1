import data from "../components/data";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function My_cart(props){
	let total =0;
	// const navigate = useNavigate();

	for(let i=0;i<data.length;i++){
		total+=parseInt(data[i].price) * parseInt(data[i].quantity)
	}

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		// console.log({...data,"total":total});
		// console.log(`Submitting : ${name} , ${email} ${password}`)
		if(total === 0){
			alert("No items to place");
			return;
		}
		data.push({"total":total})
		try {
			const response = await axios.post("http://localhost:4000/api/order/placeorder",data);
			alert("Order Placed");
			data.pop();
			// data=[];
			while(data.length>0){
				data.pop();
			}
			// data.push("order placed");
			navigate('/menu');
			console.log(response.data);
		//   navigate("/menu");
		} catch (error) {
		  console.log("Error",error);
		}
		
	}

	// if(!data){
	// 	return<div>no order in cart</div>
	// }
	console.log("Data in cart:",data);
    return(
	<div className="flex justify-center" >
	<div className="flex flex-col max-w-md p-6 space-y-4 divide-y sm:w-96 sm:p-10 divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
	<h2 className="text-2xl font-semibold">Order items</h2>
	<ul className="flex flex-col pt-4 space-y-2">

	{data.map(i =>{
		return (<li className="flex items-start justify-between">
		<h3>
		{i.item}
		<span className="text-sm dark:text-violet-400">x{i.quantity}</span>
		</h3>
		<h3>
			{i.price}
		</h3>
		
		</li>)

	})}
	</ul>
	<div className="pt-4 space-y-2">

	</div>
	<div className="pt-4 space-y-2">

		<div className="space-y-6">
			<div className="flex justify-between">
				<span>Total</span>
				<span className="font-semibold">PKR {total}</span>
			</div>
			
			<button type="submit"
			 className="w-full py-2 font-semibold border rounded bg-violet-200 dark:text-gray-900 border-violet-400"
			 onClick={handleSubmit}
			>
				Go to checkout
				</button>
		</div>
	</div>
</div>
</div>
	)
}

export default My_cart;