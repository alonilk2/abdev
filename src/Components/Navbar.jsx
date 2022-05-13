import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import useWindowSize from "../Hooks/useWindowSize";

export default function NavBar(props) {
  const size = useWindowSize();
  const [showTitle, setShowTitle] = useState(false);
  let scrollState = props.scrollState;

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 6300);
  }, []);

  const desktopNavbar = (
    <Navbar expand="lg" variant="dark">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navbar-container">
          <div className="col left-menu">
            {showTitle && (
              // <h3 className="title custom-animation-gradient">
              //   Alon Barenboim
              // </h3>
              <h1
                className="title custom-animation-gradient hover-animate"
                style={{ position: "unset", height: "unset" }}
              >
                <span>A</span>
                <span>l</span>
                <span>o</span>
                <span>n</span> <span>B</span>
                <span>a</span>
                <span>r</span> 
                <span>e</span>
                <span>n</span>
                <span>b</span> 
                <span>o</span>
                <span>i</span>
                <span>m</span>
              </h1>
            )}
          </div>
          <div className="col right-menu">
            <Nav.Link
              onClick={() => props.setPageScrollState(-1)}
              className="navbar-btn-txt"
              style={{
                color: scrollState < 0 && scrollState > -4 ? "#c41c1c" : "",
              }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              onClick={() => props.setPageScrollState(-4)}
              style={{ color: scrollState === -4 ? "#c41c1c" : "" }}
              className="navbar-btn-txt"
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => props.setPageScrollState(-5)}
              className="navbar-btn-txt"
              style={{ color: scrollState === -5 ? "#c41c1c" : "" }}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href={"https://alonilk2.github.io/map1/alonbarenboimcv.pdf"}
              className="navbar-btn-txt resume-btn"
            >
              Get My Resume
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

  const mobileNavbar = (
    <Navbar sticky="top" expand="lg" variant="dark">
      <Container fluid>
        <Offcanvas.Header closeButton>
          <h3 className="title custom-animation-gradient pos-mobile">
            Alon Barenboim
          </h3>{" "}
        </Offcanvas.Header>
      </Container>
    </Navbar>
  );
  if (size.width > 768) {
    return desktopNavbar;
  } else return mobileNavbar;
}