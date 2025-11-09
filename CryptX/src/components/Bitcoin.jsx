//Render React function 'Bitcoin' component for the application

import BitcoinImg from '../assets/Bitcoin.png'; // Added import statement because image does not render after deployment
//Used 'BitcoinImg' to avoid conflict with function name

function Bitcoin() {
  return (
    <header className="mb-3">
      <div style= {{position: 'absolute', top: '149px', left: '302px', width: '252px', height: '205px'}} > {/*Dimensions from Figma*/}
        <img 
          src="/src/assets/Bitcoin.png" 
          alt="Bitcoin" 
          style={{ width: '252px', height: '205px' }}
          className="object-cover"
        />
      </div>
    </header>
  );
}
export default Bitcoin;