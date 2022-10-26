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
    
  ];

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
