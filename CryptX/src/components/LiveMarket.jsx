//Render React function 'LiveMarket' component for the application

import LiveMarketImg from '../assets/LiveMarket.png'; // Added import statement because image does not render after deployment
//Used 'LiveMarketImg' to avoid conflict with function name


function LiveMarket() {
  return (
    <header className="mb-3">
       <div style= {{position: 'absolute', top: '621px', left: '302px', width: '692px', height: '358px'}} > {/*Dimensions from Figma*/}
        <img 
          src="/src/assets/LiveMarket.png" 
          alt="LiveMarket" 
          style={{ width: '692px', height: '358px' }}
          className="object-cover"
        />
      </div>
    </header>
  );
}
export default LiveMarket;