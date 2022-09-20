import { naiveCreate, naiveState } from "tinreact";

function Trap() {
  const [product, setProduct] = naiveCreate("div");
  const [ready, setReadyValue] = naiveState(0);
  
  setProduct((props, children) => {
    children.insert([ready()])
  });
  
  return product;
}
