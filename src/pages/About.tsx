import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center p-10 text-black">
				<h1 className="text-2xl font-bold mb-4">Sobre a Lectos Laboratorio de Aprendizagem LTDA</h1>
				<p>
					<strong>CNPJ:</strong> 44.076.090/0001-70
				</p>
				<p>
					<strong>Razão Social:</strong> Lectos Laboratorio de Aprendizagem LTDA
				</p>
				<p>
					<strong>Data da Abertura:</strong> 29/10/2021
				</p>
				<p>
					<strong>Porte:</strong> Empresa de Pequeno Porte
				</p>

				<p>
					<strong>Atividade Principal:</strong> 85.50-3-02 - Atividades de apoio à educação
				</p>
			</div>
			<Footer />
		</>
	);
}
