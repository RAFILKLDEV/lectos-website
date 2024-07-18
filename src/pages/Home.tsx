import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Lectos from "../components/Lectos";
import Margin from "../components/Margin";
import Values from "../components/Values";

export default function Home() {
	return (
		<div className="flex flex-col mx-auto max-w-[1440px]">
			<Header />
			<Margin height="1" />
			<Banner />
			<Margin height="5" />
			<Lectos />
			<Margin height="1" />
			<Values />
			<Faq />
			<Margin height="2" />
			<Footer />
		</div>
	);
}
