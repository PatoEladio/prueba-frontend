import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Cards from '../components/Cards';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h1 className="lead">Nuevos lanzamientos</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-3 reveal">
            <Cards title="Monitor" body="$100.000" />
            <br />
            <div className="row">
              <div className="col-12">
                <Cards title="iPhone 13 Pro Max" body="$1.200.000" />
              </div>
            </div>
          </div>
          <div className="col-3 reveal">
            <Cards className="reveal" title="iPhone 13 Pro Max" body="$1.200.000" />
            <br />
            <div className="row">
              <div className="reveal col-12">
                <Cards title="iPhone 13 Pro Max" body="$1.200.000" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <Cards title="iPhone 13 Pro Max" body="$1.200.000" imgHeight={323} />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
