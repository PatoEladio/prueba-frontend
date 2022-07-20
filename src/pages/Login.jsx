const LoginPage = () => {
  return (
    <div className="container">
      <br />
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <img src="/public/static/images/LogoEmpresa.png" />
                <h2 className="display-6 py-2">Iniciar Sesion</h2>
              </div>
              <form>
                <div className="row align-items-center justify-content-center">
                  <div className="col-6 py-1">
                    <label for="user-input" class="form-label">
                      Usuario
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Usuario"
                      id="user-input"
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-6 py-1">
                    <label for="pass-input" className="form-label">
                      Clave
                    </label>
                    <input
                      class="form-control"
                      type="password"
                      placeholder="Clave"
                      id="pass-input"
                    />
                  </div>
                </div>
                <br />
                <div className="row justify-content-center">
                  <div className="col-3">
                    <button type="button" className="btn btn-outline-primary">
                      Registrarse
                    </button>
                  </div>
                  <div className="col-3">
                    <button type="button" className="btn btn-primary">
                      Ingresar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
