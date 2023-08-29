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

  ${({ theme }) => theme.breakpoints.down('md')} {
    .services {
      grid-template-columns: 1fr 1fr;
    }
    .header {
      font-size: 40px;
    }
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    .services {
      grid-template-columns: 1fr;
    }
    .header {
      font-size: 30px;
    }
  }
`;

const services = [
  {
    title: 'Business Start-Up',
    description:
      'Lorem ipsum dolor sit amet consectetur. Varius aliquam vitae sed non lobortis enim mauris consequat. Ac dolor elementum nulla pellentesque.',
    anchorId: 'business-startup',
  },
  {
    title: 'Accounting',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    anchorId: 'accounting',
  },
  {
    title: 'Bookkeeping',
    description:
      'Lorem ipsum dolor sit amet consectetur. Varius aliquam vitae sed non lobortis enim mauris consequat. Ac dolor elementum nulla pellentesque.',
    anchorId: 'bookkeeping',
  },
  {
    title: 'Payroll',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    anchorId: 'payroll',
  },
  {
    title: 'Business Support',
    description:
      'Lorem ipsum dolor sit amet consectetur. Varius aliquam vitae sed non lobortis enim mauris consequat. Ac dolor elementum nulla pellentesque.',
    anchorId: 'business-support',
  },
  {
    title: 'Business Tax',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    anchorId: 'business-tax',
  },
];

const ServicesSection = () => {
  return (
    <Div>
      <Spacer xs={100} md={150} />
      <Container className="container">
        <Typography textAlign="center" fontSize={48} fontWeight={600} className="header">
          SERVICES
        </Typography>
        <Spacer xs={60} md={80} />
        <div className="services">
          {services.map((el, idx) => (
            <Service key={idx} title={el.title} description={el.description} anchorId={el.anchorId} />
          ))}
        </div>
      </Container>
      <Spacer xs={100} md={150} />
    </Div>
  );
};

export default ServicesSection;
