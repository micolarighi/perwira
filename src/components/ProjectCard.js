import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={3} md={2} xs={6} className="proj-container">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="px-3 py-4 bg-light text-black">
          <h6>{title}</h6>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
