import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import KetuaUmum from "../assets/img/Ketua Umum.png";
import DewanPakar from "../assets/img/Dewan Pakar.png";
import DewanPakar2 from "../assets/img/Dewan Pakar 2.png";
import DewanPengawas from "../assets/img/Dewan Pengawas.png";
import DewanPengawas2 from "../assets/img/Dewan Pengawas 2.png";
import DewanPengawas3 from "../assets/img/Dewan Pengawas 3.png";
import DewanPenasehat from "../assets/img/Dewan Penasehat.png";
import DewanPenasehat2 from "../assets/img/Dewan Penasehat 2.png";
import WakilOrganisasi from "../assets/img/WakilOrganisasi.png";
import AnggotaOrganisasi from "../assets/img/AnggotaOrganisasi.png";
import AnggotaOrganisasi2 from "../assets/img/AnggotaOrganisasi2.png";
import WakilHubunganLembaga from "../assets/img/WakilHubunganLembaga.png";
import AnggotaHubunganLembaga from "../assets/img/AnggotaHubunganLembaga.png";
import WakilInvestasiKeuangan from "../assets/img/WakilInvestasiKeuangan.png";
import AnggotaInvestasiKeuangan from "../assets/img/AnggotaInvestasiKeuangan.png";
import AnggotaInvestasiKeuangan2 from "../assets/img/AnggotaInvestasiKeuangan2.png";
import AnggotaInvestasiKeuangan3 from "../assets/img/AnggotaInvestasiKeuangan3.png";
import AnggotaAgrobisnis from "../assets/img/AnggotaAgrobisnis.png";
import AnggotaAgrobisnis2 from "../assets/img/AnggotaAgrobisnis.png";
import AnggotaAgrobisnis3 from "../assets/img/AnggotaAgrobisnis.png";
import AnggotaHalal from "../assets/img/AnggotaHalal.png";
import AnggotaHukum from "../assets/img/AnggotaHukum.png"
import AnggotaLuarNegeri from "../assets/img/AnggotaLuarNegeri.png"
import AnggotaPariwisata from "../assets/img/AnggotaPariwisata.png";
import AnggotaPariwisata2 from "../assets/img/AnggotaPariwisata2.png";
import AnggotaPersatuanSolidaritas from "../assets/img/AnggotaPersatuanSolidaritas.png"
import AnggotaSosial from "../assets/img/AnggotaSosial.png"
import AnggotaSosial2 from "../assets/img/AnggotaSosial2.png"
import DivisiAksesPasar from "../assets/img/DivisiAksesPasar.png"
import DivisiPemodalanKoperasi from "../assets/img/DivisiPemodalanKoperasi.png"
import DivisiPemodalanKoperasi2 from "../assets/img/DivisiPemodalanKoperasi2.png"
import DivisiPemodalanUMKM from "../assets/img/DivisiPemodalanUMKM.png" 
import DivisiPengembanganPasar from "../assets/img/DivisiPengembanganPasar.png"
import DivisiPengembanganUMKM from "../assets/img/DivisiPengembanganUMKM.png"
import WakilHalal from "../assets/img/WakilHalal.png"
import WakilHukum from "../assets/img/WakilHukum.png"
import WakilKomersial from "../assets/img/WakilKomersial.png"
import WakilKoperasi from "../assets/img/WakilKoperasi.png"
import WakilLuarNegeri from "../assets/img/WakilLuarNegeri.png"
import WakilPariwisata from "../assets/img/WakilPariwisata.png"
import WakilPengembanganWirausaha from "../assets/img/WakilPengembanganWirausaha.png"
import WakilPersatuanSolidaritas from "../assets/img/WakilPersatuanSolidaritas.png"
import WakilSosial from "../assets/img/WakilSosial.png"
import WakilTeknologi from "../assets/img/WakilTeknologi.png"
import WakilUsaha from "../assets/img/WakilUsaha.png"


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: `Assoc Prof.DR.Hj. Elza Syarief, SH, MH, CTLCIQnR, CCCLE, CIArbiPCLE, CPELS, CPL3S
      C`,
      description: "Ketua Umum",
      imgUrl: KetuaUmum,
    },
    {
      title: `Ing.Ir.H.M.
      Vidi Galenso Syarief, VDI, SH, MH, CMLC`,
      description: "Dewan Pakar",
      imgUrl: DewanPakar,
    },
    {
      title: `Fikri Gani, SH, CCPS, CTL
      `,
      description: "Dewan Pakar",
      imgUrl: DewanPakar2,
    },
    {
      title: `Dra. Anak Agung Putri Puspawati. MM,CTC,CTLC

      `,
      description: "Dewan Pengawas",
      imgUrl: DewanPengawas,
    },
    {
      title: `Nurfrahyanti Fanny`,
      description: "Dewan Pengawas",
      imgUrl: DewanPengawas2,
    },
    {
      title: `Hj. Faridah Ariyani 

      `,
      description: "Dewan Pengawas",
      imgUrl: DewanPengawas3,
    },
    {
      title: `Dr.Ir.H.M.Kosasih, BE, MM,IPM`,
      description: "Dewan Penasehat",
      imgUrl: DewanPenasehat,
    },
    {
      title: `Wardoyo Harjosarwoko S.Sos,MM`,
      description: "Dewan Penasehat",
      imgUrl: DewanPenasehat2,
    },
    {
      title: `Ir. Nurwiah`,
      description: "Wakil Ketua Umum Bidang Organisasi dan Keanggotaan",
      imgUrl: WakilOrganisasi,
    },
    {
      title: `Riana Puji Mulyani`,
      description: "Anggota Bidang Organisasi dan Keanggotaan",
      imgUrl: AnggotaOrganisasi,
    },
    {
      title: `Ir. Andi Arsiah Mappegau, Msc
      `,
      description: "Anggota Bidang Organisasi dan Keanggotaan",
      imgUrl: AnggotaOrganisasi2,
    },
    {
      title: `Hj. Andi Dian Novianti, SE
      `,
      description: "Wakil Ketua Umum Bidang Hubungan Antar Lembaga",
      imgUrl: WakilHubunganLembaga,
    },
    {
      title: `Paulina Reliubun
      `,
      description: "Anggota Bidang Hubungan Antar Lembaga",
      imgUrl: AnggotaHubunganLembaga,
    },
    {
      title: `Damini Emely, SH, MH 
      `,
      description: "Wakil Ketua Umum Bidang Investasi dan Keuangan",
      imgUrl: WakilInvestasiKeuangan,
    },
    {
      title: `Sumartini SE, SH 
      `,
      description: "Anggota Bidang Investasi dan Keuangan",
      imgUrl: AnggotaInvestasiKeuangan,
    },
    {
      title: `Hj. Halimatus Sakdiyah Hasan, SH
      `,
      description: "Anggota Bidang Investasi dan Keuangan",
      imgUrl: AnggotaInvestasiKeuangan2,
    },
    {
      title: `Siska Hartati SE 
      `,
      description: "Anggota Bidang Investasi dan Keuangan",
      imgUrl: AnggotaInvestasiKeuangan3,
    },
    {
      title: `Hj. Hoiriah T. SH, MH 
      `,
      description: "Wakil Ketua Umum Bidang Hukum",
      imgUrl: WakilHukum,
    },
    
  ];

  const member2 = [
    {
      title: `Dr.(H.C). Ir. Rismauli D.Sihotang, SH, MH 
      `,
      description: `Anggota Bidang Hukum
      `,
      imgUrl: AnggotaHukum,
    },
    {
      title: `Sri Endah Wulandari, SH
      `,
      description: `Wakil Ketua Umum Bidang Usaha Kecil Menengah dan Industri Kreatif 
      `,
      imgUrl: WakilUsaha,
    },
    {
      title: `Ir. Namsyah Ali, B
      `,
      description: `Divisi Pengembangan UMKM dan Industri Kreatif
      `,
      imgUrl: DivisiPengembanganUMKM,
    },
    {
      title: `Meiske Rantung
      `,
      description: `Divisi Akses Permodalan UMKM dan Industri Kreatif
      `,
      imgUrl: DivisiPemodalanUMKM,
    },
    {
      title: `Andrina Tika
      `,
      description: `Divisi Akses Pasar UMKM dan Industri Kreatif
      `,
      imgUrl: DivisiAksesPasar,
    },
    {
      title: `Fransiska Darmawan
      `,
      description: `Wakil Ketua Umum Bidang Komersial
      `,
      imgUrl: WakilKomersial,
    },
    {
      title: `Marli Yanni
      `,
      description: `Divisi Pengembangan Pasar Dalam dan Luar Negeri
      `,
      imgUrl: DivisiPengembanganPasar,
    },
    {
      title: `Artha Meris Simbolon, B.Com, MBA
      `,
      description: `Wakil Ketua UMum Bidang Pariwisata
      `,
      imgUrl: WakilPariwisata,
    },
    {
      title: `I Gusti Ayu Agung, S.Kom
      `,
      description: `Anggota Bidang Pariwisata
      `,
      imgUrl: AnggotaPariwisata,
    },
    {
      title: `Artya Miralda Virginia Siahaan
      `,
      description: `Anggota Bidang Pariwisata`,
      imgUrl: AnggotaPariwisata2,
    },
    {
      title: `Hj. Niken Astuti
      `,
      description: `Anggota Bidang Agrobisnis dan Pertanian, 
      `,
      imgUrl: AnggotaAgrobisnis,
    },
    {
      title: `Masye Mangundap
      `,
      description: `Anggota Bidang Agrobisnis dan Pertanian
      `,
      imgUrl: AnggotaAgrobisnis2,
    },
    {
      title: `Ida Ayu Mariana Endang
      `,
      description: `Anggota Bidang Agrobisnis dan Pertanian
      `,
      imgUrl: AnggotaAgrobisnis3,
    },
    {
      title: `Julia Dewi Kusma Dardiati
      `,
      description: `Wakil Ketua Umum Bidang Koperasi
      `,
      imgUrl: WakilKoperasi,
    },
    {
      title: `Antieka Rustiana L,S.ST,SE,M.Kes
      `,
      description: `Divisi Permodalan Koperasi
      `,
      imgUrl: DivisiPemodalanKoperasi,
    },
    {
      title: `Iriani Bustami,SE
      `,
      description: `Divisi Pemodalan Koperasi`,
      imgUrl: DivisiPemodalanKoperasi2,
    },
    {
      title: `Lia Alizia, SH
      `,
      description: `Wakil Ketua Umum Bidang Luar Negeri
      `,
      imgUrl: WakilLuarNegeri,
    },
    {
      title: `Neneng Susana, SE,MM
      `,
      description: `Anggota Bidang Luar Negeri
      `,
      imgUrl: AnggotaLuarNegeri,
    },   
  ]

  const member3 = [
    {
      title: `Ir. Evie Maisaroh Kaluhun
      `,
      description: `Wakil Ketua Umum Bidang Persatuan, Soliditas dan Keamanan
      `,
      imgUrl: WakilPersatuanSolidaritas,
    },
    {
      title: `Novaliyun, SE,Mpd
      `,
      description: `Anggota Bidang Persatuan, Soliditas dan Keamanan
      `,
      imgUrl: AnggotaPersatuanSolidaritas,
    },
    {
      title: `Ni Luh Ketut Annisa Namira, SE
      `,
      description: `Wakil Ketua Umum Bidang Pengembangan Wirausaha Muda
      `,
      imgUrl: WakilPengembanganWirausaha,
    },
    {
      title: `Yuliza Mugihartika, M.Pd
      `,
      description: `Wakil Ketua Umum Bidang Teknologi Informasi dan Humas
      `,
      imgUrl: WakilTeknologi,
    },
    {
      title: `Tasha Bakti
      `,
      description: `Wakil Ketua Umum Bidang Sosial
      `,
      imgUrl: WakilSosial,
    },
    {
      title: `Mia Vinita,SE,CTP
      `,
      description: `Anggota Bidang Sosial
      `,
      imgUrl: AnggotaSosial,
    },
    {
      title: `Dr. Marla Indah/dr. Marlinda M. Biomed AAM.Finem
      `,
      description: `Anggota Bidang Sosial
      `,
      imgUrl: AnggotaSosial2,
    },
    {
      title: `Yuliana Zahara Mega M.Pd
      `,
      description: `Wakil Ketua Umum Bidang Halal
      `,
      imgUrl: WakilHalal,
    },
    {
      title: `Helen Kurniawan
      `,
      description: `Anggota Bidang Halal
      `,
      imgUrl: AnggotaHalal,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={4}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "": ""}>
                <h2 className="mb-5">Struktur Kepengurusan</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify content-center align-items-center" id="pills-tab" >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Halaman 1 </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Halaman 2 </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Halaman 3 </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {
                            member2.map((member, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...member}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {
                            member3.map((member, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...member}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                  </Tab.Content>
                  <Nav variant="pills" className="nav-pills mt-3 mb-5 justify content-center align-items-center" id="pills-tab" >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Halaman 1 </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Halaman 2 </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Halaman 3 </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
