export default function Footer() {
  const openHour = 12;
  const closeHour = 22;
  const hour = new Date().getHours();
  let isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div className="footer">
      <footer>
        {new Date().toLocaleTimeString()} -
        {isOpen ? " We are currently OPEN" : " Sorry, we are current CLOSED"}
      </footer>
    </div>
  );
}
