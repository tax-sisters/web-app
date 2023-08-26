import Spacer from '@/components/Spacer/Spacer';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styled from 'styled-components';

const Div = styled.div`
  margin: 0 20px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  .link {
    text-decoration: none !important;
  }

  .title {
    margin: 0 10px;
    color: white;
  }

  .marker-container {
    height: 3px;
    width: 100%;
    &__marker {
      background-color: white;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      height: 100%;
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin: 0 0 20px 0;

    .title {
      font-size: 20px;
    }

    .marker-container {
      height: 3px;
      width: 150px;
      margin: auto;
    }
  }
`;

interface NavLinkProps {
  title: string;
  path: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ title, path }) => {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Div>
      <Link href={path} prefetch className="link">
        <Typography textAlign="center" className="title">
          {title}
        </Typography>
        <Spacer xs={5} />
        <div className="marker-container">{isActive && <div className="marker-container__marker"></div>}</div>
      </Link>
    </Div>
  );
};
