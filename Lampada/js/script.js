let body = document.querySelector("body");
let main = document.createElement("main");

let div1 = document.createElement("div");
div1.setAttribute("id", "DivLampada");

let div = document.createElement("div");
div.setAttribute("id", "DivBotão");

let LampadaOff = document.createElement("img");
LampadaOff.setAttribute("src", "./.img/off.png");
LampadaOff.setAttribute("id", "LampadaOff");

let botãoOff = document.createElement("img");
botãoOff.setAttribute("src", "./.img/botãoOff.png");
botãoOff.setAttribute("id", "BotãoOff");
botãoOff.setAttribute("class", "BotãoOff");


body.append(main);
main.append(div);
main.append(div1);
div.append(LampadaOff);
div1.append(botãoOff);

document.querySelector("#BotãoOff").onclick = function () {
	let botao = document.querySelector("#BotãoOff")
	let lampada = document.querySelector("#LampadaOff")
	let interruptor = document.querySelector("#BotãoOff")
	if(botao.className=="BotãoOff") {
		botao.setAttribute("class", "BotãoOn")
		lampada.setAttribute("src", "./.img/on.png")
		interruptor.setAttribute("src", "./.img/botãoOn.png")
	}
	else{
		botao.setAttribute("class", "BotãoOff")
		lampada.setAttribute("src", "./.img/off.png")
		interruptor.setAttribute("src", "./.img/botãoOff.png")
	}
}