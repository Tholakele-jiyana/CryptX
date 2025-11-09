//Render React function 'Cardano' component for the application

function Cardano() {
  return (
    <header className="mb-3">
       <div style= {{position: 'absolute', top: '386px', left: '584px', width: '252px', height: '205px'}} > {/*Dimensions from Figma*/}
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