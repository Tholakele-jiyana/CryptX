//Render React function 'Header' component for the application

function Header() {
  return (
    <header style= {{position: 'absolute', top: '32px', left: '302px', width: '1098px', height: '73px'}} >
        <img 
          src="/assets/Header.png" // moved the image within assest folder from src folder to public folder
          alt="Header" 
          style={{ width: '100%', height: '100%' }}
          className="object-cover"
        />
    </header>
  );
}
export default Header;

