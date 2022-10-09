import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>VISI</h2>
                                <div className="visi">
                                  <p>Menjadikan Perkumpulan Perempuan Wirausaha Indonesia (PERWIRA) sebagai Organisasi berbadan hukum Perempuan dalam bentuk UKM, UMKM, dan Perusahaan dengan usaha dilakukan para Wirausaha di Tingkat Nasional dan Internasional, yang akan menjadi salah satu tonggak perekokomian untuk mencapai kesejahteraan rakyat sesuai dengan filosofi Pancasila dan berlandaskan konstitusi UUD 1945.</p>
                                </div>
                          <h2>MISI</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <p>PERWIRA memperdayakan dan memperkuat kaum perempuan di dalam UKM dan UMKM melalui peningkatan kemampuan anggota untuk mengelola usaha anggota, mendapatkan akses terhadap teknologi baru, pemasaran, dan pembiayaan usahanya.</p>
                            </div>
                          
                            <div className="item">
                            <p>PERWIRA memberikan advokat, pelatiham, Manajemen Sumber Daya Manusia dan jaringan kerja dan usaha untuk meningkatkan usaha anggota.</p>
                            </div>
                            <div className="item">
                             <p>PERWIRA berkejasama dengan instansi terkait baik pemerintah maupun swasta serta luar negeri untuk mendapat peluang-peluang bisnis sehingga dapat memfasilitasi anggota-anggotanya dalam mengerjakan peluang bisnis tersebut sesuai bidangnya.</p>
                            </div>
                            <div className="item">
                            <p>PERWIRA meningkatkan kualitas, dan kuantitas produksi anggota-anggotanya.</p>
                            </div>
                            <div className="item">
                            <p>PERWIRA melakukan promosi, distributor dan pameran untuk memamerkan serta dapat menjual produk-produk anggotanya di dalam negeri dan perdagangan maupun luar negeri.</p>
                            </div>
                            <div className="item">
                            <p>PERWIRA melakukan usaha perekonomian online (digital) didalam dan luar negeri.</p>
                            </div>
                            
                        
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
