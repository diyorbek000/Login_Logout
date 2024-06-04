
export const Home = () => {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <div>Home Page</div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Home;