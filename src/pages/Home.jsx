import Cards from '../components/Cards';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <Carousel />
      <br />
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
            <Cards title="Monitor" body="$300.000" imgHeight={250} imageSrc="public/static/images/imagenMonitor.png" />
            <br />
            <div className="row">
              <div className="col-12">
                <Cards title="iPhone 13 Pro Max" body="$1.200.000" imgHeight={250} imageSrc="public/static/images/imagenIphone13.jpeg" />
              </div>
            </div>
          </div>
          <div className="col-3 reveal">
            <Cards className="reveal" title="iPhone 11" body="$500.000" imgHeight={250} imageSrc="public/static/images/imagenIphone11.jpg" />
            <br />
            <div className="row">
              <div className="reveal col-12">
                <Cards title="iPhone 12 Mini" body="$1.200.000" imgHeight={250} imageSrc="public/static/images/imagenIphone12.jpg" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <Cards title="MacBook Pro 16'" body="$2.400.000" imgHeight={615} imageSrc="public/static/images/imagenMAc.png" />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
