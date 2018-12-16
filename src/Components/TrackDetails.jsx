import React from "react";

import "./TrackDetails.css";

class TrackDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCars: false,
      showDocuments: false
    };
  }

  handleCarList = e => {
    e.preventDefault();
    const showCars = !this.state.showCars;
    this.setState({ showCars });
  };

  handleDocumentList = e => {
    e.preventDefault();
    const showDocuments = !this.state.showDocuments;
    this.setState({ showDocuments });
  };

  render() {
    const { date, heading, details, cars, documents } = this.props.info;
    const { showCars, showDocuments } = this.state;
    let headingClass = date !== "" ? "heading marginHeading" : "heading";
    headingClass =
      this.props.status === "incomplete"
        ? headingClass + " incompleteText"
        : headingClass;

    let carList = "";
    if (cars.length) {
      if (cars.length > 1) {
        if (showCars) {
          for (let car of cars) {
            carList += car + ", ";
          }
          carList = (
            <span>
              {carList.slice(0, carList.length - 2) + ". "}
              <a href="" type="button" onClick={this.handleCarList}>
                Hide
              </a>
            </span>
          );
        } else {
          carList = (
            <span>
              {cars[0]} and{" "}
              <a href="" type="button" onClick={this.handleCarList}>
                {cars.length - 1} More
              </a>
            </span>
          );
        }
      } else {
        carList = cars[0];
      }
    }
    let documentList = "";
    if (documents.length) {
      if (showDocuments) {
        for (let document of documents) {
          documentList += document + ", ";
        }
        documentList = (
          <span
            className={
              this.props.status !== "incomplete" ? "" : "incompleteText"
            }
          >
            {documentList.slice(0, documentList.length - 2) + ". "}
            <a
              href=""
              type="button"
              onClick={this.handleDocumentList}
              className={
                this.props.status !== "incomplete" ? "" : "incompleteText"
              }
            >
              Hide
            </a>
          </span>
        );
      } else {
        documentList = (
          <span>
            <a
              href=""
              type="button"
              onClick={this.handleDocumentList}
              className={
                this.props.status !== "incomplete" ? "" : "incompleteText"
              }
            >
              Show Documents
            </a>
          </span>
        );
      }
    }
    return (
      <div className="trackDetails">
        <div className="date">{date}</div>
        <div className={headingClass}>
          {heading}
          <span className="content">{details}</span>
          <span className="content">{carList}</span>
          <span className="content">{documentList}</span>
        </div>
      </div>
    );
  }
}

export default TrackDetails;
