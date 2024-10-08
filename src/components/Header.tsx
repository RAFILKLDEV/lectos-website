import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="font-semibold text-lg">
			<div className="h-[100px] py-4 px-14 bg-white text-azul_lectos flex justify-between">
				<div>
					<img
						src="/logo/LogoColorida.png"
						alt=""
						className="h-full"
					/>
				</div>
				<div className="flex items-center">Para Colaboradores</div>
				<div className="flex items-center gap-3">
					<svg
						width="48"
						height="48"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M43.6416 23.8362C43.641 33.8658 36.141 42.3109 26.1816 43.4962V30.0962H29.7016C30.1951 30.0989 30.6102 29.727 30.6616 29.2362L31.0416 26.3362C31.068 26.0608 30.9814 25.7865 30.8016 25.5762C30.6176 25.3587 30.3465 25.2341 30.0616 25.2362H26.1816V21.8362C26.1816 20.7316 27.077 19.8362 28.1816 19.8362H30.1816C30.4397 19.8416 30.689 19.7428 30.8734 19.5622C31.0578 19.3815 31.1617 19.1343 31.1616 18.8762V15.6562C31.1552 15.1552 30.779 14.7363 30.2816 14.6762C30.2816 14.6762 28.8416 14.5562 27.1216 14.5562C22.8416 14.5562 20.4816 17.0962 20.4816 21.7162V25.2362H16.4816C15.9404 25.2362 15.5016 25.6749 15.5016 26.2162V29.1162C15.5016 29.6574 15.9404 30.0962 16.4816 30.0962H20.3616V43.3362C10.0246 41.5035 2.90965 31.9283 4.13768 21.5021C5.36572 11.0759 14.5107 3.41581 24.9906 4.03503C35.4706 4.65424 43.6499 13.3379 43.6416 23.8362Z"
							fill="#0E88B1"
						/>
					</svg>
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M12 0H27.4C34.0274 0 39.4 5.37258 39.4 12V27.4C39.4 34.0274 34.0274 39.4 27.4 39.4H12C5.37258 39.4 0 34.0274 0 27.4V12C0 5.37258 5.37258 0 12 0ZM36.4 12C36.389 7.034 32.366 3.011 27.4 3H12C7.034 3.011 3.011 7.034 3 12V27.4C3.011 32.366 7.034 36.389 12 36.4H27.4C32.366 36.389 36.389 32.366 36.4 27.4V12Z"
							fill="#0E88B1"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M11.1 19.7C11.111 14.9549 14.9549 11.111 19.7 11.1C24.4451 11.111 28.289 14.9549 28.3 19.7C28.3 24.4496 24.4496 28.3 19.7 28.3C14.9504 28.3 11.1 24.4496 11.1 19.7ZM25.3 19.7C25.3 16.6072 22.7928 14.1 19.7 14.1C16.6118 14.111 14.111 16.6118 14.1 19.7C14.1 22.7928 16.6072 25.3 19.7 25.3C22.7928 25.3 25.3 22.7928 25.3 19.7Z"
							fill="#0E88B1"
						/>
						<path
							d="M27.02 9.01C27.02 7.81154 27.9915 6.84 29.19 6.84C30.3885 6.84 31.36 7.81154 31.36 9.01C31.36 10.2085 30.3885 11.18 29.19 11.18C27.9915 11.18 27.02 10.2085 27.02 9.01Z"
							fill="#0E88B1"
						/>
					</svg>
				</div>
			</div>
			<div className="h-[60px] py-4 px-14 bg-azul_lectos flex justify-between items-center">
				<Link to={"/"}>Inicio</Link>
				<Link to={"/"}>Departamento Clinico</Link>
				<Link to={"/"}>Departamento Pedagógico</Link>
				<Link to={"/"}>Departamento Altas Habilidades</Link>
				<Link to={"/sobre"}>Sobre nós</Link>
			</div>
		</div>
	);
}
