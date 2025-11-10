//Render React function 'Bitcoin' component for the application

function Bitcoin() {
  return (
    <header className="mb-3">
      <div style= {{position: 'absolute', top: '149px', left: '302px', width: '252px', height: '205px'}} > {/*Dimensions from Figma*/}
        <img 
          src="/assets/Bitcoin.png" //moved the image within assest folder from src folder to public folder
          alt="Bitcoin" 
          style={{ width: '252px', height: '205px' }}
          className="object-cover"
        />
      </div>
    </header>
  );
}
export default Bitcoin;