
const NavBar = () => {
  return (
    <header>
      <div className="container-fluid bg-dark header-top">
        <div>
          <div className="row text-light py-3 justify-content-end align-items-center">
            <div className="col-10 col-md-11">
              <h5 className="mb-0">E-Bazzer</h5>
            </div>
            <div className="col-2 col-md-1">
              <img className="m-0" src="../images/icon-cart.svg" alt="cart" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
