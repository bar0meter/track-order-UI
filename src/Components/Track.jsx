import React from "react";
import "./Track.css";

import TrackNode from "./TrackNode";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackDetails: [
        {
          info: {
            date: "12 MAY",
            heading: "Taken Test Drive",
            details: "",
            cars: [
              "2010 White Alto LXI",
              "2011 White Alto LXI",
              "2012 White Alto LXI",
              "Audi A7"
            ],
            documents: []
          },
          status: "completed"
        },
        {
          info: {
            date: "14 MAY",
            heading: "Pay Token",
            details: "",
            cars: ["2010 White Alto LXI"],
            documents: []
          },
          status: "completed"
        },
        {
          info: {
            date: "14 MAY",
            heading: "Processing loan",
            details: "Usually takes 3-6 working days",
            cars: [],
            documents: []
          },
          status: "completed"
        },
        {
          info: {
            date: "16 MAY",
            heading: "Take Car Delivery",
            details: "From Mumbai Showroom",
            cars: [],
            documents: []
          },
          status: "active"
        },
        {
          info: {
            date: "",
            heading: "Start Ownership Transfer Process",
            details: "Please bring the list of document at time of delivery",
            cars: [],
            documents: [
              "Aadhar Card",
              "PAN Card",
              "Electricity Bill",
              "Bank Records"
            ]
          },
          status: "incomplete"
        }
      ]
    };
  }

  render() {
    let index = 0;
    const TrackNodes = this.state.trackDetails.map(tempNode => {
      return (
        <TrackNode
          key={index++}
          status={tempNode.status}
          info={tempNode.info}
          lastNode={index === this.state.trackDetails.length ? true : false}
        />
      );
    });
    return <div className="wrapper">{TrackNodes}</div>;
  }
}

export default Track;
