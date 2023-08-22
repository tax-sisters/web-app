import Spacer from '@/components/Spacer';
import { ThemeColors } from '@/util/theme';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import { Service } from './comps';

const Div = styled.div`
  background-color: ${ThemeColors.SECTION_GRAY};
  .services {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
  }
`;

const services = [
  {
    title: 'Accounting',
    description:
      'Lorem ipsum dolor sit amet consectetur. Varius aliquam vitae sed non lobortis enim mauris consequat. Ac dolor elementum nulla pellentesque.',
  },
  {
    title: 'Bookkeeping',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    title: 'Accounting - 1',
    description:
      'Lorem ipsum dolor sit amet consectetur. Varius aliquam vitae sed non lobortis enim mauris consequat. Ac dolor elementum nulla pellentesque.',
  },
  {
    title: 'Bookkeeping - 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    title: 'Accounting - 2',
    description:
      'Lorem ipsum dolor sit amet consectetur. Varius aliquam vitae sed non lobortis enim mauris consequat. Ac dolor elementum nulla pellentesque.',
  },
  {
    title: 'Bookkeeping - 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
];

const ServicesSection = () => {
  return (
    <Div>
      <Spacer xs={100} />
      <Container className="container">
        <Typography textAlign="center" fontSize={48} fontWeight={600}>
          SERVICES
        </Typography>
        <Spacer xs={54} />
        <div className="services">
          {services.map((el, idx) => (
            <Service key={idx} title={el.title} description={el.description} />
          ))}
        </div>
      </Container>
      <Spacer xs={100} />
    </Div>
  );
};

export default ServicesSection;
