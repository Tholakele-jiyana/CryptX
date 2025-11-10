//Render React function 'Litecoin' component for the application


function Litecoin() {
  return (
    <header className="mb-3">
      <div style= {{position: 'absolute', top: '384px', left: '302px', width: '252px', height: '205px'}} > {/*Dimensions from Figma*/}
        <img 
          src="/assets/Litecoin.png" //moved the image within assest folder from src folder to public folder
          alt="Litecoin" 
          style={{ width: '252px', height: '205px' }}
          className="object-cover"
        />
      </div>
    </header>
  );
}
export default Litecoin;