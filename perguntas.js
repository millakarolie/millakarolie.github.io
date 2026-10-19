var perguntas = [
	{
		text: "Qual cenário transmite paz para você?",
		options: [
			{
				id: "A",
				text: "A. Um jardim florido em uma manhã de primavera, com o perfume das flores e a luz suave do sol.",
			},
			{
				id: "B",
				text: "B. Uma casa iluminada, cercada por plantas, grandes janelas e uma atmosfera leve e contemporânea.",
			},
			{
				id: "C",
				text: "C. Um ambiente inspirador, cheio de personalidade e detalhes inesperados. Luzes acolhedoras, música agradável e aquela sensação de estar em um lugar confortável.",
			},
		],
	},
	{
		text: "Se o seu casamento pudesse ser resumido em uma sensação, seria:",
		options: [
			{
				id: "A",
				text: "A. Romântico, delicado e inesquecível.",
			},
			{
				id: "B",
				text: "B. Leve, sofisticado e naturalmente elegante.",
			},
			{
				id: "C",
				text: "C. Autêntico com personalidade e surpreendente.",
			},
		],
	},
	{
		text: "Qual dessas experiências mais combina com você?",
		options: [
			{
				id: "A",
				text: "A. Caminhar por ruas charmosas, entrar em uma floricultura, descobrir um café especial e apreciar a beleza dos pequenos detalhes.",
			},
			{
				id: "B",
				text: "B. Passar uma tarde em um ambiente clean, com arquitetura contemporânea, boa música e uma sensação constante de frescor.",
			},
			{
				id: "C",
				text: "C. Experimentar algo novo, descobrir lugares inesperados e fazer escolhas que expressem sua personalidade.",
			},
		],
	},
	{
		text: "As pessoas costumam dizer que você é...",
		options: [
			{
				id: "A",
				text: "A. Romântica, delicada e apaixonada pelos pequenos detalhes.",
			},
			{
				id: "B",
				text: "B. Elegante e dona de um estilo que chama atenção pela naturalidade.",
			},
			{
				id: "C",
				text: "C. Cheia de personalidade, ou seja: autêntica, feminina e sofisticada.",
			},
		],
	},
];

var resultados = {
	A: {
		title: "A Romântica",
		essencia: "Bloom",
		description:
			"Você vive as emoções intensamente e acredita que são os pequenos detalhes que tornam um momento inesquecível. Sua delicadeza é marcante e sua elegância acontece de forma natural.<br><br>Sua essência é...<br><strong>Bloom 🌸</strong><br>Um floral sofisticado, delicado e envolvente. Uma fragrância que celebra o romance com leveza e sofisticação.",
	},
	B: {
		title: "A Contemporânea",
		essencia: "Bamboo & Alecrim",
		description:
			"Você valoriza a beleza da simplicidade, aprecia ambientes leves e encontra elegância no equilíbrio. Seu estilo é moderno, refinado e atemporal.<br><br>Sua essência é...<br><strong>Bamboo & Alecrim 🎋</strong><br>Uma fragrância fresca, luminosa e sofisticada, que transmite leveza e autenticidade.",
	},
	C: {
		title: "A Ousada",
		essencia: "Lavanda & Pimenta",
		description:
			"Você tem personalidade e não precisa escolher entre delicadeza e atitude. Gosta do inesperado, valoriza a autenticidade e tem um jeito próprio de deixar sua marca. Sua essência combina feminilidade com força, elegância com irreverência.<br><br>Sua essência é...<br><strong>Lavanda & Pimenta 💜</strong><br>Uma combinação de contrastes, envolvente e cheia de personalidade. Porque ser delicada não significa ser previsível, e ser feminina também é ter atitude.",
	},
};
