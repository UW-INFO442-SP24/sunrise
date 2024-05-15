import './navbar.css';
function navbar () {
  return (
      <div class = "navbar">
          <div class ="logo">
          <a href='/home'><img src="img/logo.png" className="logo-icon" /></a>
          </div>
          <div class = "col text-left">
            <a href='/quiz'><button type ="button" className = "btn"><div className = 'nav-text'>Quiz</div></button></a>
            <a href='/diagram'><button type ="button" className = "btn"><div className = 'nav-text'>Diagram</div></button></a>
            <a href='/resources'><button type ="button" className = "btn"><div className = 'nav-text'>Resources</div></button></a>
          </div>

      </div>
  );
}
export default navbar;