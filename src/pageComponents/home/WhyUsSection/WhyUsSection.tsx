import Spacer from '@/components/Spacer';
import { Container } from '@mui/material';
import styled from 'styled-components';

const Div = styled.div``;

interface WhyUsSectionProps {}

const WhyUsSection: React.FC<WhyUsSectionProps> = () => {
  return (
    <Div>
      <Spacer xs={100} />
      <Container>WhyUsSection</Container> <Spacer xs={100} />
    </Div>
  );
};

export default WhyUsSection;
