import Spacer from '@/components/Spacer/Spacer';
import { ThemeColors } from '@/util/theme';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Div = styled.div`
  padding: 45px 30px;

  border-radius: 25px;

  .text {
    color: white;
  }

  &:hover {
    outline: 2px solid ${ThemeColors.GRAD_D};
  }

  .link {
    text-decoration: none;
  }
`;

interface ServiceProps {
  title: string;
  description: string;
  anchorId: string;
}

const MotionDiv = motion(Div);

export const Service: React.FC<ServiceProps> = ({ title, description, anchorId }) => {
  return (
    <MotionDiv
      initial={{
        background: `linear-gradient(
        90deg,
        ${ThemeColors.PRIMARY} 0%,
        ${ThemeColors.PRIMARY} 34%,
        ${ThemeColors.PRIMARY} 65%,
        ${ThemeColors.PRIMARY} 100%
      )`,
      }}
      transition={{ type: 'spring', stiffness: 250, damping: 18 }}
      whileHover={{
        scale: 1.01,
        background: `linear-gradient(
        90deg,
        ${ThemeColors.GRAD_A} 0%,
        ${ThemeColors.GRAD_B} 34%,
        ${ThemeColors.GRAD_C} 65%,
        ${ThemeColors.GRAD_D} 100%
      )`,
      }}
    >
      <Link href={`/business-services?id=${anchorId}`} className="link">
        <motion.div>
          <Typography fontSize={26} className="text">
            {title}
          </Typography>
          <Spacer xs={25} />
          <Typography fontSize={16} className="text">
            {description}
          </Typography>
        </motion.div>
      </Link>
    </MotionDiv>
  );
};
