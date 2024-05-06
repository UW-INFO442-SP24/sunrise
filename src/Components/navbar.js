import './navbar.css';
function navbar () {
  return (
      <div class = "navbar">
          <div class ="logo">
            <img src="img/logo.png" className="logo-icon" />
          </div>
          <div class = "col text-left">
            <button type ="button" className = "btn"><div className = 'nav-text'>Quiz</div></button>
            <button type ="button" className = "btn"><div className = 'nav-text'>Diagram</div></button>
            <button type ="button" className = "btn"><div className = 'nav-text'>Recources</div></button>
          </div>

      </div>
  );
}
export default navbar;