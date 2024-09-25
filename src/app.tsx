import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Terms from "./pages/Terms";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/sobre"
					element={<About />}
				/>
				<Route
					path="/politica-de-privacidade"
					element={<Terms />}
				/>
				<Route
					path="/contato"
					element={<Contact />}
				/>
			</Routes>
		</Router>
	);
}
