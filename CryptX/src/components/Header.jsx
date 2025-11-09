//Render React function 'Header' component for the application

function Header() {
  return (
    <header className="mb-3">
      <div style={{ width: '1098px', height: '73px' }} className="mx-auto">
        <img 
          src="/src/assets/Header.png" 
          alt="Header" 
          style={{ width: '1098px', height: '73px' }}
          className="object-cover"
        />
      </div>
    </header>
  );
}
export default Header;

