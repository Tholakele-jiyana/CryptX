//Render React function 'Cardano' component for the application

import CardanoImg from '../assets/Cardano.png'; // Added import statement because image does not render after deployment
// Used 'CardanoImg' to avoid conflict with function name


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