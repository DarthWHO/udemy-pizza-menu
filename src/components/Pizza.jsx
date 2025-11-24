export default function Pizza({ pizzaObj }) {
  const pizzaClass = "pizza" + (pizzaObj.soldOut ? " sold-out" : "");
  return (
    <li className={pizzaClass}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
