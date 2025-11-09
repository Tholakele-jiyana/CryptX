//Render React function 'Litecoin' component for the application

function Litecoin() {
  return (
    <header className="mb-3">
      <div style={{ width: '252px', height: '205px' }} className="mx-auto">
        <img 
          src="/src/assets/Litecoin.png" 
          alt="Litecoin" 
          style={{ width: '252px', height: '205px' }}
          className="object-cover"
        />
      </div>
    </header>
  );
}
export default Litecoin;