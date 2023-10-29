const Hero = () => {
  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVES THE BEST</h1>
          <p>
            Your feet deserves the best and we are here to help you with our
            shoes.Your feet deserves the best and we are here to help you with
            our shoes.
          </p>
          <div className="hero-btn">
            <button>Shop now</button>
            <button className="secondary-btn">Category</button>
          </div>
          <div className="shopping">
            <p>Also Availabale On</p>
            <div className="brand-icons`">
              <img src="/images/daraz.png" alt="logo" height={"40px"} />
              <img src="/images/Amazon.png" alt="logo" height={"30px"} />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/shoe.png" alt="shoe photo" />
        </div>
      </main>
    </>
  );
};
export default Hero;
