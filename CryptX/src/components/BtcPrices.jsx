//Render React function 'BtcPrices' component for the application

import StatisticImg from '../assets/Statistic.png'; // Added import statement because image does not render after deployment
// Used 'StatisticImg' to avoid conflict with function name


function BtcPrices() {
  return (
    <header className="mb-3">
      <div style= {{position: 'absolute', top: '149px', left: '863px', width: '534px', height: '442px'}} > {/*Dimensions from Figma*/}
        <img 
          src="/src/assets/Statistic.png" 
          alt="BtcPrices" 
          style={{ width: '534px', height: '442px' }}
          className="object-cover"
        />
      </div>
    </header>
  );
}
export default BtcPrices;