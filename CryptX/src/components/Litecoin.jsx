//Render React function 'Litecoin' component for the application

function Litecoin() {
  return (
    <header className="mb-3">
      <div style= {{position: 'absolute', top: '384px', left: '302px', width: '252px', height: '205px'}} > {/*Dimensions from Figma*/}
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