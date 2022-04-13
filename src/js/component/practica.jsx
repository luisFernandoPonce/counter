import React, { useState, useEffect } from "react";

const Practica = () => {
	var [seconds, setSeconds] = useState(0);

	useEffect(() => {
		var intervalo = setInterval(() => {
			setSeconds(seconds + 1);
		}, 1000);
		return () => clearInterval(intervalo);
	}, [seconds]);
	return (
		<div>
			<h2>Segundos: {seconds}</h2>
		</div>
	);
};

export default Practica;
