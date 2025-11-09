//Render React function 'Sidebar' component for the application

import SidebarImg from '../assets/Sidebar.png'; // Added import statement because image does not render after deployment
//Used 'SidebarImg' to avoid conflict with function name

function Sidebar() {
  return (
      <div style= {{position: 'absolute', top: '0px', left: '0px', width: '263px', height: '1025px'}} > {/*Dimensions from Figma*/}
        <img 
          src="/src/assets/Sidebar.png" 
          alt="Sidebar" 
          style={{ width: '263', height: '1025px' }}
          className="object-cover"
        />
    </div>
  );
}
export default Sidebar;
