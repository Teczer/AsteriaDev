import Article from "../article/Article";
import CardQuizz from "./cardsQuizz/CardQuizz";
import "./main.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useQuizzContext } from "../../../hooks/useQuizzContext";

function Main() {
	const { user } = useAuthContext();
	const { quizz, dispatch } = useQuizzContext();

	useEffect(() => {
		/* 		dispatch({ type: "LOGIN", payload: data });
		 */
		console.log("llaala", user);
		const fetchQuizz = async () => {
			let mescouilles = [
				{
					label: "Système Solaire",
					level: user.quizzSystemeSolaire,
					img: [
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675179/images-collections/1-systeme%20solaire/collec1-cardFrontImage-1-soleil_bb36ak.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675181/images-collections/1-systeme%20solaire/collec1-cardFrontImage-2-comet_wnzq4h.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675179/images-collections/1-systeme%20solaire/collec1-cardBackImage-3-neptune_naijmj.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675178/images-collections/1-systeme%20solaire/collec1-cardFrontImage-5-saturn_ncxgiv.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675178/images-collections/1-systeme%20solaire/collec1-cardBackImage-1-soleil_fcgefa.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670677915/images-quizz/PhenomenesObservable/nebuleuse4_3x_hhw3yd.jpg",
					],
				},
				{
					label: "Galaxies",
					level: "1",
					img: [
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675173/images-collections/2-galaxies/collec2-cardFrontImage-6-voielactee_emeafm.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675171/images-collections/2-galaxies/collec2-cardFrontImage-7-whirlpool_xmk2zn.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675169/images-collections/2-galaxies/collec2-cardFrontImage-8-andromede_gmy2sv.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675170/images-collections/2-galaxies/collec2-cardFrontImage-9-magellan_fawb7z.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675171/images-collections/2-galaxies/collec2-cardFrontImage-10-horsehead_ixzx8i.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670677915/images-quizz/PhenomenesObservable/nebuleuse4_3x_hhw3yd.jpg",
					],
				},
				{
					label: "Phénomènes Observables",
					level: "1",
					img: [
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670677917/images-quizz/PhenomenesObservable/eclipse_w3bgwj.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675177/images-collections/3-phenomenes/collec3-cardBackImage-11-eclipse_hqzlbx.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675177/images-collections/3-phenomenes/collec3-cardBackImage-14-zod-light_txkudi.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675177/images-collections/3-phenomenes/collec3-cardBackImage-13-etoile_jfmy1t.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675175/images-collections/3-phenomenes/collec3-cardFrontImage-12-moon_veahxq.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670677915/images-quizz/PhenomenesObservable/nebuleuse4_3x_hhw3yd.jpg",
					],
				},
				{
					label: "Astronautes",
					level: "1",
					img: [
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675173/images-collections/4-astronautes/collec4-cardFrontImage-18-leonov_xri8tn.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675177/images-collections/4-astronautes/collec4-cardFrontImage-17-armstrong_zrq05u.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675173/images-collections/4-astronautes/collec4-cardBackImage-17-armstrong_stxghf.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675173/images-collections/4-astronautes/collec4-cardBackImage-20-terechkova_nuti1l.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670675174/images-collections/4-astronautes/collec4-cardFrontImage-16-gagarine_nrk3re.jpg",
						"https://res.cloudinary.com/dw3mwclgk/image/upload/v1670677915/images-quizz/PhenomenesObservable/nebuleuse4_3x_hhw3yd.jpg",
					],
				},
			];

			dispatch({
				type: "SET_QUIZZ",
				payload: mescouilles,
			});
		};
		if (user) {
			fetchQuizz();
		}
	}, [dispatch, user]);

	return (
		<>
			<main>
				<h1>
					{" "}
					<i className="fa-solid fa-chevron-left" /> Quizz Espace{" "}
					<i className="fa-solid fa-chevron-right" />
				</h1>
				<ul className="cards-container">
					{/* rome-ignore lint/complexity/useOptionalChain: <explanation> */}
					{quizz &&
						quizz.map((value, index) => (
							// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<li className="card-container" key={index}>
								<Link
									to={`/quizzcontroller/quizzSystemeSolaire/${value.level}`}
								>
									{/* 								<Link to={value.to} onClick>
									 */}{" "}
									<h2>{value.label}</h2>
									<h5>
										{value.level === 5
											? "Niveau fini"
											: `Niveau ${value.level} / 5`}
									</h5>
									{/* rome-ignore lint/style/noUnusedTemplateLiteral: <explanation> */}
									<CardQuizz
										src={
											value.level === 5
												? "https://res.cloudinary.com/dw3mwclgk/image/upload/v1670677915/images-quizz/PhenomenesObservable/nebuleuse4_3x_hhw3yd.jpg"
												: value.img[value.level - 1]
										}
										label={value.label}
									/>
								</Link>
							</li>
						))}
				</ul>
			</main>
		</>
	);
}

export default Main;
