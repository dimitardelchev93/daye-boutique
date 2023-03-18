import React from 'react';

import { Container, Typography, Box } from '@mui/material';

import styled from 'styled-components';

import BaseButton from '../components/BaseButton';

export const WelcomePageWrapper = styled.div`
  color: ${(props) => props.theme.colors.text};
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const SectionContainer = styled(Container)`
  padding-top: ${({ theme }) => theme.gaps.large};
  padding-bottom: ${({ theme }) => theme.gaps.large};
`;

const AboutSection = styled(Box)`
  text-align: center;
`;

const OffersButton = styled(BaseButton)`
  font-weight: bold !important;
`;

const FooterSection = styled(Box)`
  margin-top: 50px;
  padding: ${({ theme }) => theme.gaps.large} 0;
  text-align: center;
`;

const WelcomePage: React.FC = () => {
  return (
    <WelcomePageWrapper>
      <SlideImage src="/slide-1.png" alt="Slide 1" />
      <AboutSection sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography sx={{ margin: '10px auto', maxWidth: '800px' }}>
          We exist to raise the standards in women health by creating innovative products and
          services that fit conveniently into our lives. Our team of experts is dedicated to
          providing cutting-edge solutions that empower women to take control of their health. We
          believe in the power of education, innovation, and a community-driven approach to
          addressing the unique needs of women worldwide.
        </Typography>
      </AboutSection>

      <SlideImage src="/slide-2.png" alt="Slide 2" />

      <SectionContainer maxWidth="lg">
        <Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
          <OffersButton variant="contained" size="large" href="/offers">
            Browse Our Offers
          </OffersButton>
        </Box>
      </SectionContainer>

      <SlideImage src="/slide-3.png" alt="Slide 3" />

      <Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Join Our Community
        </Typography>
        <Typography>
          Connect with like-minded individuals, stay informed about our latest products, and share
          your experiences.
        </Typography>
      </Box>

      <SlideImage src="/slide-4.png" alt="Slide 4" />

      <Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Testimonials
        </Typography>
        <Typography>
          Hear from our satisfied customers and learn how our products have made a difference in
          their lives.
        </Typography>
      </Box>

      <SlideImage src="/slide-5.png" alt="Slide 5" />

      <FooterSection>
        <Typography variant="h6" gutterBottom>
          Daye Boutique
        </Typography>
        <Typography variant="body2">&copy; 2018 Daye Boutique. All rights reserved.</Typography>
      </FooterSection>
    </WelcomePageWrapper>
  );
};

export default WelcomePage;
