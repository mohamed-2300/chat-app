<html>
  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/b
ootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/boo
tstrap.bundle.min.js" crossorigin="anonymous"></script>
      <script
        src="https://unpkg.com/react@16/umd/react.development.js"
        crossorigin></script>
      <script src="https://unpkg.com/react-dom@16/umd/react-
dom.development.js" crossorigin></script>
      <script
        src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
  <script type="text/babel">
    const Product = ({nom}, {price}, {categorie}) => {
  return (
    <div>
      <h1>{nom}</h1>
      <p>{price}</p>
      <p>{catigorie}</p>
    </div>
    );
};

    function produitlist({list}){
  return(
    <div>
      <h1>produit liste</h1>
      <select id="cat">
        <option value="elect">electronique</option>
        <option value="vet">vetement</option>
        <option value="acseoire">acseoire</option>
      </select></div>
    let cat=document.getElementsById("cat").value;

    const electCat = list.filter(function(catig){return cat = "elect"})

    {Product.map(produit, index)=>(<Produit
      key={index}
      nom={nom}
      price={price}
      categorie={categorie}
    >)}
    </div>
    );
}
    function App(){
  return (
    <div>
      <produitlist />
    </div>
    );
}