// @flow
import React from "react";
import styled from "styled-components";

import Colours from "../Colours";

const Container = styled.div`
  padding: 50px;
`;

const WorkTitle = styled.h1`
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
  description
}: {
  title: string,
  description: string
}) => (
  <div style={{ marginBottom: "30px" }}>
    <WorkTitle>{title}</WorkTitle>
    <WorkDescription>{description}</WorkDescription>
  </div>
);

const workingOnData = [
  {
    title: "Queuey.dev",
    description:
      "A platform that allows to you easily integrate referral waitlists for early access to your next product."
  }
];

const workedAtData = [
  {
    title: "We Are Savvy",
    description: "The platform that connects people, services and space"
  },
  {
    title: "Workshop",
    description: "Web, iOS & Android E-learning platform."
  },
  {
    title: "Impero",
    description: "A creative agency for tired brands"
  }
];

const Work = () => (
  <Container>
    <h1>Work</h1>

    <SubSectionTitle>Working on</SubSectionTitle>

    {workingOnData.map(({ title, description }) => (
      <WorkItem key={title} title={title} description={description} />
    ))}

    <SubSectionTitle style={{ marginTop: "100px" }}>Worked at</SubSectionTitle>

    {workedAtData.map(({ title, description }) => (
      <WorkItem key={title} title={title} description={description} />
    ))}
  </Container>
);

export default Work;
