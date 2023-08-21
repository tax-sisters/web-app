import Spacer from '@/components/Spacer/Spacer';
import { Typography } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import styled from 'styled-components';

const Div = styled.div`
  margin: 0 20px;
  cursor: pointer;
  user-select: none;

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
`;

interface NavLinkProps {
  title: string;
  path: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ title, path }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = () => {
    router.push(path);
  };

  const isActive = pathname === path;

  return (
    <Div onClick={handleNavigate}>
      <Typography textAlign="center" className="title">
        {title}
      </Typography>
      <Spacer xs={5} />
      <div className="marker-container">{isActive && <div className="marker-container__marker"></div>}</div>
    </Div>
  );
};

