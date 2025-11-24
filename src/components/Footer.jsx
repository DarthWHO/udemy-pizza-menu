import Order from "./Order.jsx";

export default function Footer() {
  const openHour = 12;
  const closeHour = 22;
  const hour = new Date().getHours();
  let isOpen = hour > openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <div className="order">
          <p>
            Sorry! We are closed until {openHour}:00. Come visit us or order
            online tomorrow!
          </p>
        </div>
      )}
    </footer>
  );
}
