//Render React function 'Sidebar' component for the application


function Sidebar() {
  return (
      <div style= {{position: 'absolute', top: '0px', left: '0px', width: '263px', height: '1025px'}} > {/*Dimensions from Figma*/}
        <img 
          src="/assets/Sidebar.png" //moved the image within assest folder from src folder to public folder
          alt="Sidebar" 
          style={{ width: '263', height: '1025px' }}
          className="object-cover"
        />
    </div>
  );
}
export default Sidebar;
