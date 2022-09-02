function Trap() {
  const [product, setProduct] = naiveCreate("div");
  const [outlet, setOutlet] = naiveView();
  
  setProduct((props, children) => {
    children.appendChild(outlet);
  })
}
