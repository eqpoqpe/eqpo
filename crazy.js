import {
  naiveCreate,
  naiveState,
  createElement
} from "tinreact";

function Trap() {
  const [product, setProduct] = naiveCreate("div");
  const [ready, setReadyValue] = naiveState(0);
  const tips = createElement("div", [
    createElement("p", [ready()])
  ]);
  
  setProduct((props, children) => {
    children.insert([tips])
  });
  
  return product;
}
