import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        contentfulAssets {
          background {
            fluid(
              quality: 100
              maxWidth: 1024
            ) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      const imageData = data.contentfulAssets.background.fluid;
      return (
        <BackgroundImage
          // Tag="section"
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  position: fixed;
  height:100vh;
  top: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export default StyledBackgroundSection;
