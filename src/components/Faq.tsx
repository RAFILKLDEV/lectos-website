import { useState } from "react";

export default function Faq() {
	function Question({ question, reply }: { question: string; reply: string }) {
		const [toggle, setToggle] = useState(false);

		return (
			<div className="flex flex-col w-full shadow-md  rounded-md text-black border-[1px] border-roxo font-semibold">
				<div
					className="p-3 px-5 text-lg flex justify-between bg-roxo bg-opacity-30"
					onClick={() => setToggle(!toggle)}
				>
					<div className="">{question}</div>
				</div>
				{toggle && <div className="p-3 px-5 text-lg flex bg-roxo bg-opacity-20">{reply}</div>}
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center px-14 py-14 gap-5">

            <div className="text-4xl mb-20 text-azul_lectos font-bold">Perguntas Frequentes</div>

			<Question
				question="Como funcionam as aulas de reforço?"
				reply="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			/>
			<Question
				question="Como funcionam as aulas de reforço?"
				reply="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			/>
			<Question
				question="Como funcionam as aulas de reforço?"
				reply="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			/>
			<Question
				question="Como funcionam as aulas de reforço?"
				reply="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			/>

            <button type="button" className="font-semibold shadow-md text-lg px-16 py-3 mt-10 bg-amarelo rounded-xl">Saiba Mais!</button>
		</div>
	);
}
