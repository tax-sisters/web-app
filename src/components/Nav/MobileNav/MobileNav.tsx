import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  background-color: gray;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

interface MobileNavProps {}

const MobileNav: React.FC<MobileNavProps> = () => {
  return <Div>MobileNav</Div>;
};

export default MobileNav;

