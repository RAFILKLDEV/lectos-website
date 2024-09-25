import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Terms() {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center p-10 text-black">
				<h1 className="text-3xl font-bold">Política de Privacidade</h1>
				<h1 className="text-2xl font-bold mb-4">Política de Privacidade</h1>
				<p>
					Sua privacidade é importante para nós. Para mais informações sobre como tratamos dados e conformidade com as políticas do Meta, veja as
					seguintes políticas:
				</p>
				<ul className="list-disc ml-5 mt-2">
					<li>
						<a
							href="https://www.facebook.com/policy.php"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 underline"
						>
							Política de Dados do Facebook
						</a>
					</li>
					<li>
						<a
							href="https://www.facebook.com/legal/terms"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 underline"
						>
							Termos de Serviço do Facebook
						</a>
					</li>
					<li>
						<a
							href="https://help.instagram.com/581066165581870"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 underline"
						>
							Termos de Serviço do Instagram
						</a>
					</li>
					<li>
						<a
							href="https://www.facebook.com/policies/cookies/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 underline"
						>
							Política de Cookies do Facebook
						</a>
					</li>
				</ul>
			</div>
			<Footer />
		</>
	);
}
