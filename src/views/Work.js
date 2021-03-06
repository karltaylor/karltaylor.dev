// @flow
import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { Link as ReactRouterLink } from "react-router-dom";

import Colours from "../Colours";

import Container from "../components/Container";
import Link from "../components/Link";

import arrowLeft from "../assets/arrow-left-solid.svg";
import linkIcon from "../assets/link-solid.svg";

const PageTitle = styled.h1`
  color: ${Colours.lighterNotBlack};
`;

const WorkContainer = styled.div`
  padding: 50px;
`;

const WorkTitleLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 0;
  color: ${Colours.lighterNotBlack};
`;

const WorkDescription = styled.p`
  font-size: 14px;
  color: ${Colours.lighterNotBlack};
`;

const SubSectionTitle = styled.h2`
  color: ${Colours.lightestOkayOnBlack};
  font-size: 12px;
`;

const WorkItem = ({
  title,
  description,
  link,
}: {
  title: string,
  description: string,
  link: ?string,
}) => (
  <div style={{ marginBottom: "30px" }}>
    <WorkTitleLink target="_blank" href={link}>
      {title}
      <ReactSVG
        style={{
          color: Colours.veryLightGrey,
          width: 12,
          height: 12,
          position: "absolute",
          right: -20,
          top: "50%",
          transform: "translateY(-50%)",
        }}
        src={linkIcon}
      />
    </WorkTitleLink>
    <WorkDescription>{description}</WorkDescription>
  </div>
);

// const workingOnData = [
//   {
//     title: "Queuey.dev",
//     description:
//       "A platform that allows to you easily integrate referral waitlists for early access to your next product.",
//     link: null
//   }
// ];

const workedAtData = [
  {
    title: "Future Platforms / Stadion",
    description:
      "Building Paris Saint-Germain's latest iOS & Android React Native app",
    link: "https://www.stadion.io",
  },
  {
    title: "We Are Savvy",
    description: "The platform that connects people, services and space",
    link: "https://wearesavvy.com",
  },
  {
    title: "Workshop",
    description: "Web, iOS & Android E-learning platform",
    link: "https://www.workshop.ws",
  },
  {
    title: "Impero",
    description: "A creative agency for tired brands",
    link: "https://www.weareimpero.com",
  },
];

const Work = () => (
  <Container>
    <WorkContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <PageTitle>Work</PageTitle>
        <ReactRouterLink to="/">
          <ReactSVG
            style={{
              color: Colours.lightestOkayOnBlack,
              width: 25,
              height: 25,
            }}
            src={arrowLeft}
          />
        </ReactRouterLink>
      </div>
      {/* <SubSectionTitle>Working on</SubSectionTitle>

      {workingOnData.map(({ title, description, link }) => (
        <WorkItem
          link={link}
          key={title}
          title={title}
          description={description}
        />
      ))} */}

      <SubSectionTitle style={{ marginTop: "100px" }}>
        Worked at
      </SubSectionTitle>

      {workedAtData.map(({ title, description, link }) => (
        <WorkItem
          link={link}
          key={title}
          title={title}
          description={description}
        />
      ))}
    </WorkContainer>
  </Container>
);

export default Work;
