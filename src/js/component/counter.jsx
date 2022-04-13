import React, { useState } from "react";

const Counter = () => {
	const [unidad, setUnidad] = useState(0);

	return (
		<div className="text-center mt-5">
			<h1>Unidad {unidad}</h1>
			<button
				onClick={() => setUnidad(unidad + 1)}
				className="btn btn-warning">
				Sumar unidad
			</button>
			<button
				onClick={() => setUnidad(unidad - 1)}
				className="btn btn-info">
				Restar unidad
			</button>
		</div>
	);
};

export default Counter;
