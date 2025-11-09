//Render React function 'Header' component for the application

function Header() {
  return (
    <header style= {{position: 'absolute', top: '32px', left: '302px', width: '1098px', height: '73px'}} >
        <img 
          src="/src/assets/Header.png" 
          alt="Header" 
          style={{ width: '100%', height: '100%' }}
          className="object-cover"
        />
    </header>
  );
}
export default Header;

