import { naiveCreate, naiveEvent } from "tinreact";

/**
 * reaction without state
 */
function Trap() {
	const [product, setProduct] = naiveCreate("div");
	const [baseContext, setBaseContext] = naiveCreate("p");
	const [onText, setOnTextEvent] = naiveEvent("click");
	const [onMounted, setOnMountedEvent] = naiveEvent("mounted");

	setOnMountedEvent(() => {
		fetch("https://eqpo.ml/display.json", { methods: "GET" })
			.then((response) => res.json())
			.then((result) => {
				console.log(result);
				setBaseContext((_, children) => {
					children.setNodeText(0, JSON.stringify(result));
				});
			})
			.catch((err) => {
				console.warn(err);
			});
	});

	setOnTextEvent((e) => {
		setProduct((_, children) => {

			// child and text
			children.setNodeText(0, "");
			children.setChildElement(0, (_, children) => {
				children.setNodeText(0, "This are new you");
			});
		});
	});

	setBaseContext((_, children) => {
		children.insert(["G"]);
	});

	setProduct((props, children) => {
		props.class = "-w0";
		props.onClick = onSetText;

		children.insert([22]);
		children.appendChild(baseContext);
	});

	// read only
	return product;
}
