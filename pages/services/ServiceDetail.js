import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import serviceData from './serviceData';

function ServiceDetail(props) {
	const { serviceId } = useParams();
	const history = useHistory();
	const location = useLocation();
	console.log(location);
	const thisService = serviceData.find(service => service._id === serviceId);

	function handleClick() {
		console.log("Submitting...");
		setTimeout(() => {
			history.push("/services")
		}, 2000);
	}

	return (
		<div>
			<h1>Service Detail Page</h1>
			<h3>{thisService.name} - ${thisService.price}</h3>
			<p>{thisService.description}</p>
			<button onClick={handleClick}>Go to somewhere</button>
		</div>
	)
}

export default ServiceDetail;
