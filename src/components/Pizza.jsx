export default function Pizza(props) {
  const pizzaClass = "pizza" + (props.soldOut ? " sold-out" : "");
  return (
    <div className={pizzaClass}>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "SOLD OUT" : props.price}</span>
      </div>
    </div>
  );
}
