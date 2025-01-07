import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div style={{ backgroundColor: '#add8e6', minHeight: '100vh', padding: '20px', boxSizing: 'border-box' }}>
      <nav style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
         onClick={() => setActiveSection('home')}
        >
          Anasayfa
        </button>
        <button 
         onClick={() => setActiveSection('about')}
        >
          Hakkımızda
        </button>
        <button 
         onClick={() => setActiveSection('services')}
        >
          Hizmetler
        </button>
        <button 
          onClick={() => setActiveSection('contact')}
        >
          İletişim
        </button>
      </nav>
      <header style={{ textAlign: 'center', margin: '20px 0' }}>
        <h1>DevProject</h1>
        <p>3D Modelleme, Reçine ve Epoksi Kalıplama, CNC Lazer Kesimleri ve Daha Fazlası</p>
      </header>
      {activeSection === 'home' && (
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <div>
            <img src={require('./images/resim 1.jpg')} alt="Resim 1" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={require('./images/resim 2.jpeg')} alt="Resim 2" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={require('./images/resim 3.jpg')} alt="Resim 3" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={require('./images/resim 4.jpg')} alt="Resim 4" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={require('./images/resim 5.jpg')} alt="Resim 5" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </div>
        </Carousel>
      )}
      {activeSection === 'services' && (
        <section>
          <h2>Hizmetlerimiz</h2>
          <div>
            <h3>3D Modelleme</h3>
            <p>Yüksek kaliteli 3D modelleme hizmetleri sunuyoruz.</p>
          </div>
          <div>
            <h3>Reçine ve Epoksi Kalıplama</h3>
            <p>Özel reçine ve epoksi kalıplama çözümleri.</p>
          </div>
          <div>
            <h3>CNC Lazer Kesimleri</h3>
            <p>Hassas CNC lazer kesim hizmetleri.</p>
          </div>
          <div>
            <h3>Prototip Geliştirme</h3>
            <p>İnovatif prototip geliştirme hizmetleri.</p>
          </div>
          <div>
            <h3>Özel Tasarım Çözümleri</h3>
            <p>İhtiyaçlarınıza uygun özel tasarım çözümleri.</p>
          </div>
        </section>
      )}
      {activeSection === 'about' && (
        <section>
          <h2>Hakkımızda</h2>
          <p>DevProject, 2023 yılında kurulan ve teknoloji alanında yenilikçi çözümler sunan bir firmadır. Misyonumuz, müşterilerimize en kaliteli hizmeti sunarak onların projelerini hayata geçirmelerine yardımcı olmaktır.</p>
          <p>Vizyonumuz, sektörde lider bir konuma gelerek, teknolojik yeniliklerle müşterilerimizin ihtiyaçlarına en iyi şekilde cevap vermektir. Gelecek planlarımız arasında, hizmet yelpazemizi genişletmek, daha fazla müşteriye ulaşmak ve sürdürülebilir projeler geliştirmek bulunmaktadır.</p>
          <p>DevProject olarak, 3D modelleme, reçine ve epoksi kalıplama, CNC lazer kesimleri ve özel tasarım çözümleri gibi alanlarda uzmanlaşmış bir ekiple çalışıyoruz. Her projeye özel yaklaşımlar geliştirerek, müşterilerimizin beklentilerini aşmayı hedefliyoruz.</p>
        </section>
      )}
      {activeSection === 'contact' && (
        <section>
          <h2>İletişim</h2>
          <p>Adres: 1234 Teknoloji Caddesi, Yenilikçi Mahallesi, İstanbul</p>
          <p>Telefon: +90 555 123 4567</p>
          <p>Email: info@devproject.com</p>
        </section>
      )}
      <footer style={{ textAlign: 'center', marginTop: '20px', padding: '10px', backgroundColor: '#333', color: '#fff' }}>
        © 2023 DevProject. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  margin: '5px',
  padding: '10px',
  border: 'none',
  borderRadius: '5px',
  flex: '1 1 100px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s, transform 0.2s',
};

const buttonHoverStyle = {
  backgroundColor: '#cc0000',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);