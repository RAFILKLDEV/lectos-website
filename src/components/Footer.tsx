import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div className="px-14 py-14 flex flex-col gap-5 items-center  bg-azul_lectos">
			<div className="w-full text-2xl font-semibold text-center">Atendimentos presencial e online</div>
			<div className="flex w-full justify-between">
				<div className="flex flex-col">
					<div className="font-semibold text-lg">Mapa do Site</div>
					<Link to={"/"}>Lectos Pedagógico</Link>
					<Link to={"/"}>Lectos Clínico</Link>
					<Link to={"/"}>Lectos Altas Habilidades</Link>
					<Link to={"/contato"}>Contato</Link>
					<Link to={"/sobre"}>Quem somos nós</Link>
					<Link to={"/politica-de-privacidade"}>Politica de Privacidade</Link>
					<a
						href="https://www.facebook.com/policy.php"
						target="_blank"
						rel="noopener noreferrer"
					>
						Política de Dados do Facebook
					</a>{" "}
					<a
						href="https://www.facebook.com/legal/terms"
						target="_blank"
						rel="noopener noreferrer"
					>
						Termos de Serviço do Facebook
					</a>
				</div>
				<div className="flex flex-col">
					<Link
						to={"/contato"}
						className="font-semibold text-lg"
					>
						Contato
					</Link>
					<div>(16) 3555-0003</div>
					<div>lectos.aprendizagem@gmail.com</div>
					<div>Avenida Luiz Eduardo Toledo Prado, 900, sala 516, </div>
					<div>Ribeirão Prêto, SP, Brazil</div>
				</div>
				<div className="flex flex-col">
					<div className="font-semibold text-lg">Redes Sociais</div>
					<a href="https://www.facebook.com/lectosla">Facebook</a>
					<a href="https://www.instagram.com/lectosla/">Instagram</a>
				</div>
			</div>
		</div>
	);
}
