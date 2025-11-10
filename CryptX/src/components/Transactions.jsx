//Render React function 'Transactions' component for the application


function Transactions() {
  return (
    <header className="mb-3">
      <div style= {{position: 'absolute', top: '623px', left: '1054px',  width: '320px', height: '352px'}} > {/*Dimensions from Figma*/}
        <img 
          src="/assets/Transaction.png" //moved the image within assest folder from src folder to public folder
          alt="Transactions" 
          style={{ width: '320px', height: '352px' }}
          className="object-cover"
        />
      </div>
    </header>
  );
}
export default Transactions;