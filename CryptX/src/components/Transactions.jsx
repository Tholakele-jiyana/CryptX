//Render React function 'Transactions' component for the application

import TransactionImg from '../assets/Transaction.png'; // Added import statement because image does not render after deployment
//Used 'TransactionImg' to avoid conflict with function name


function Transactions() {
  return (
    <header className="mb-3">
      <div style= {{position: 'absolute', top: '623px', left: '1054px',  width: '320px', height: '352px'}} > {/*Dimensions from Figma*/}
        <img 
          src="/src/assets/Transaction.png" 
          alt="Transactions" 
          style={{ width: '320px', height: '352px' }}
          className="object-cover"
        />
      </div>
    </header>
  );
}
export default Transactions;