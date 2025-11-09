//Render React function 'Bitcoin' component for the application

function Bitcoin() {
  return (
    <header className="mb-3">
      <div style={{ width: '252px', height: '205px' }} className="mx-auto">
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