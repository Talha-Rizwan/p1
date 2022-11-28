import React from "react";

function Card(props){
    return <div className="p-4">
    <div className=" max-w-xs rounded-md shadow-md hover:shadow-2xl dark:bg-gray-900 dark:text-gray-100">
	<img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{props.name}</h2>
			<p className="dark:text-gray-100">visit different variety of menus</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">click here</button>
	</div>
</div>
</div>
}

export default Card;