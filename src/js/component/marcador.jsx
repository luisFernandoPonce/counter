import React, { useState, useEffect } from "react";
import { BiTimeFive } from "react-icons/bi";
import "../../styles/marcador.css";

function Marcador() {
	const [segundos, setSegundos] = useState(0);
	const [caja2, setCaja2] = useState(0);
	const [caja3, setCaja3] = useState(0);
	const [caja4, setCaja4] = useState(0);
	const [caja5, setCaja5] = useState(0);
	const [caja6, setCaja6] = useState(0);

	useEffect(() => {
		var intervalo = setInterval(() => {
			if (segundos == 9) {
				if (caja2 == 9) {
					setCaja2(caja2 - 9);
					if (caja3 == 9) {
						setCaja3(caja3 - 9);
						if (caja4 == 9) {
							setCaja4(caja4 - 9);
							if (caja5 == 9) {
								setCaja5(caja5 - 9);
								if (caja6 == 9) {
									setCaja6(caja6 - 9);
								} else {
									setCaja6(caja6 + 1);
								}
							} else {
								setCaja5(caja5 + 1);
							}
						} else {
							setCaja4(caja4 + 1);
						}
					} else {
						setCaja3(caja3 + 1);
					}
				} else {
					setCaja2(caja2 + 1);
				}
				setSegundos(segundos - 9);
				console.log("segundos " + segundos);
			} else {
				setSegundos(segundos + 1);
			}
		}, 1000);

		return () => clearInterval(intervalo);
	}, [segundos]);

	return (
		<div className="container">
			<h1> Counter </h1>
			<div className="row align-items-start">
				<div className="col" id="caja">
					<i>
						<BiTimeFive />
					</i>
				</div>
				<div className="col" id="caja">
					{caja6}
				</div>
				<div className="col" id="caja">
					{caja5}
				</div>
				<div className="col" id="caja">
					{caja4}
				</div>
				<div className="col" id="caja">
					{caja3}
				</div>
				<div className="col" id="caja">
					{caja2}
				</div>
				<div className="col" id="caja">
					{segundos}
				</div>
			</div>
		</div>
	);
}

export default Marcador;
