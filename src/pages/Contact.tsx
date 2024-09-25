import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center py-10 text-black">
				<h1 className="text-2xl font-bold mb-4">Contate-nos</h1>
				<p>
					<strong>E-mail:</strong> <a href="mailto:lectos.aprendizagem@gmail.com">lectos.aprendizagem@gmail.com</a>
				</p>
				<p>
					<strong>Telefone:</strong> (16) 3555-0003
				</p>
				<p>
					<strong>Endereço:</strong> Avenida Luiz Eduardo Toledo Prado, 870, Conj 1119 Edif Iguatemi II, Vila do Golf, Ribeirão Preto, SP, 14027-250
				</p>
			</div>
			<Footer />
		</>
	);
}
