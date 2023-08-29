import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import { Service } from './comps';
import Link from 'next/link';
import { ThemeColors } from '@/util/theme';
import Spacer from '@/components/Spacer/Spacer';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Sq1, Sq2, Sq3, Sq4 } from '@/components/animated/squares';

const Div = styled.div`
  .container {
    max-width: 968px;
    display: grid;
    grid-gap: 40px;
  }

  .link {
    color: ${ThemeColors.TEXT_BLACK} !important;
  }
`;

interface AllServicesProps {}

const services = [
  {
    title: 'Business Start-Up',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    backgroundColor: '#E3F7FE',
    imgSrc: 'img/services-bs.svg',
    anchorId: 'business-startup',
    squares: (
      <>
        {/* left */}
        <Sq2 left={-7} inViewPx={0} y={-150} />
        <Sq3 left={-5} inViewPx={0} y={-30} />
        {/* right */}
        <Sq1 left={97} inViewPx={0} y={-160} />
      </>
    ),
  },
  {
    title: 'Accounting',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    backgroundColor: '#F4DEFE',
    imgSrc: 'img/services-acc.svg',
    anchorId: 'accounting',
  },
  {
    title: 'Bookkeeping',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    backgroundColor: '#F7F4FD',
    imgSrc: 'img/services-bk.svg',
    anchorId: 'bookkeeping',
  },
  {
    title: 'Payroll',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    backgroundColor: '#E3F7FE',
    imgSrc: 'img/services-payroll.svg',
    anchorId: 'payroll',
  },
  {
    title: 'Business Support',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    backgroundColor: '#F4DEFE',
    imgSrc: 'img/services-support.svg',
    anchorId: 'business-support',
  },
  {
    title: 'Business Tax',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    backgroundColor: '#F7F4FD',
    imgSrc: 'img/services-bt.svg',
    anchorId: 'business-tax',
  },
  {
    title: 'Visa Services',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    backgroundColor: '#E3F7FE',
    imgSrc: 'img/services-visa.svg',
    bottomComponent: (
      <>
        <Spacer xs={20} />
        <Link href={'/visa-services'} className="link">
          <Typography fontWeight={600}>Read more...</Typography>
        </Link>
      </>
    ),
    squares: (
      <>
        {/* left */}
        <Sq3 left={-6} inViewPx={0} y={-130} />
        {/* right */}
        <Sq2 left={102} inViewPx={0} y={-300} />
        <Sq1 left={98} inViewPx={0} y={30} />
      </>
    ),
  },
];

const AllServices: React.FC<AllServicesProps> = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get('id');

    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  return (
    <Div>
      <Container className="container">
        {services.map(el => (
          <Service
            key={el.title}
            backgroundColor={el.backgroundColor}
            imgSrc={el.imgSrc}
            title={el.title}
            description={el.description}
            bottomComponent={el.bottomComponent}
            anchorId={el.anchorId}
            squares={el.squares}
          />
        ))}
      </Container>
    </Div>
  );
};

export default AllServices;
