//Render React function 'BtcPrices' component for the application


function BtcPrices() {
  return (
    <header className="mb-3">
      <div style= {{position: 'absolute', top: '149px', left: '863px', width: '534px', height: '442px'}} > {/*Dimensions from Figma*/}
        <img 
          src="/assets/Statistic.png" //moved the image within assest folder from src folder to public folder
          alt="BtcPrices" 
          style={{ width: '534px', height: '442px' }}
          className="object-cover"
        />
      </div>
    </header>
  );
}
export default BtcPrices;