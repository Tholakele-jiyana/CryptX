//Render React function 'LiveMarket' component for the application



function LiveMarket() {
  return (
    <header className="mb-3">
       <div style= {{position: 'absolute', top: '621px', left: '302px', width: '692px', height: '358px'}} > {/*Dimensions from Figma*/}
        <img 
          src="/assets/LiveMarket.png" //moved the image within assest folder from src folder to public folder
          alt="LiveMarket" 
          style={{ width: '692px', height: '358px' }}
          className="object-cover"
        />
      </div>
    </header>
  );
}
export default LiveMarket;