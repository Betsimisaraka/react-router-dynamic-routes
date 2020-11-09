import React from 'react';
import serviceData from './serviceData';
import {Link} from 'react-router-dom';

function ServicesList() {
	return (
		<div>
			<h1>Services List Page</h1>
			{serviceData.map(service => (
			<div key={service._id}>
				<Link to={`/services/${service._id}`}><h2>{service.name} - ${service.price}</h2></Link>
					<p>{service.description}</p>
				</div>
			))}
		</div>
	);
}

export default ServicesList;
