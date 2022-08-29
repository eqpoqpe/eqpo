import { naiveCreate, naiveEvent, naiveFocus, naiveTemplateStore } from "tinreact";

export default function TrapButton({ setContext }) {
  const [product, setProduct] = naiveCreate("div");
  const [onFetchData, setOnClick] = naiveEvent("click");
  const [fetcState, setFetchState] = naiveTemplateStore(false);
  
  const SP_FETCH = () => {
    if (!fetchState.ready) {
      setFetchState((prev) => !prev);
      fetch("https://eqpo.ml/display.json", { methods: "GET" })
        .then((response) => response.json())
        .then((result) => {
          setContext((_, chilren) => {
            children.insert([JSON.stringify(result)]);
          });
        
          setFetchState((prev) => !prev);
        });
    }
  };
  
  setOnClick(SP_FETCH);
  setProduct((props, chilren) => {
    props.class = "trap-button";
    props.onClick = onFetchData;
    
    children.insert(["Click Me"]);
  });
  
  return product;
}
