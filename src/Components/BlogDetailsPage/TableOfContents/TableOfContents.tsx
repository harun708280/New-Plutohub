"use client";
import { CircleMinus } from "lucide-react";
import { Nav } from "react-bootstrap";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
const TableOfContents = () => {
  return (
    <div>
      <div className="p-3  text-white  table-of-content ">
        <h5 className=" ">
          Table of Contents{" "}
          <span>
            {" "}
            <CircleMinus />
          </span>
        </h5>
        <Nav variant="pills" className="flex-column nav-pills-custom">
          <Nav.Item>
            <Nav.Link eventKey="stock">The stock market</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="lowFid">
              What Is Low-Fidelity Prototyping?
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="usage">
              Usage Of Low-Fidelity Prototyping
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="diff">
              Difference Between Low-Fidelity and High-Fidelity Prototypes
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="unique">We Create Unique</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="allows">
              It allows companies to go public
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="SaaS">We work with SaaS teams,</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div className="social-links social-row">
                  <a href="https://www.facebook.com/p/PlutoHub-61569889000814/" target="_blank" rel="noopener noreferrer">
                    <Facebook color="white" />
                  </a>
                  <a href="https://www.instagram.com/plutohub.agency/" target="_blank" rel="noopener noreferrer">
                    <Instagram color="white" />
                  </a>
                  <a href="https://www.linkedin.com/company/105067253" target="_blank" rel="noopener noreferrer">
                    <Linkedin color="white" />
                  </a>
                  <a href="https://x.com/PlutohubAgency" target="_blank" rel="noopener noreferrer">
                    <Twitter color="white" />
                  </a>
                </div>
    </div>
  );
};

export default TableOfContents;
