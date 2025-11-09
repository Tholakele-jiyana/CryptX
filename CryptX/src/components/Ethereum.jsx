//Render React function 'Ethereum' component for the application

import EthereumImg from '../assets/Ethereum.png'; // Added import statement because image does not render after deployment
// Used 'EthereumImg' to avoid naming conflict with the function name

function Ethereum() {
  return (
    <header className="mb-3">
      <div style= {{position: 'absolute', top: '149px', left: '584px', width: '252px', height: '205px'}} > {/*Dimensions from Figma*/}
        <img 
          src="/src/assets/Ethereum.png" 
          alt="Ethereum" 
          style={{ width: '252px', height: '205px' }}
          className="object-cover"
        />
      </div>
    </header>
  );
}
export default Ethereum;