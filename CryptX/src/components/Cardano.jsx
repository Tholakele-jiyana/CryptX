//Render React function 'Cardano' component for the application

function Cardano() {
  return (
    <header className="mb-3">
      <div style={{ width: '252px', height: '205px' }} className="mx-auto">
        <img 
          src="/src/assets/Cardano.png" 
          alt="Cardano" 
          style={{ width: '252px', height: '205px' }}
          className="object-cover"
        />
      </div>
    </header>
  );
}
export default Cardano;