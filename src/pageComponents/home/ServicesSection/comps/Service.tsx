import Spacer from '@/components/Spacer/Spacer';
import { ThemeColors } from '@/util/theme';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Div = styled.div`
  padding: 45px 30px;

  border-radius: 25px;

  .text {
    color: white;
  }
`;

interface ServiceProps {
  title: string;
  description: string;
}

const MotionDiv = motion(Div);

export const Service: React.FC<ServiceProps> = ({ title, description }) => {
  return (
    <MotionDiv
      initial={{
        background: `linear-gradient(
        90deg,
        ${ThemeColors.GRAD_A} 0%,
        ${ThemeColors.GRAD_A} 34%,
        ${ThemeColors.GRAD_A} 65%,
        ${ThemeColors.GRAD_A} 100%
      )`,
      }}
      transition={{ type: 'spring', stiffness: 150 }}
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
      <motion.div
        whileHover={
          {
            //   scale: 1.03,
          }
        }
      >
        <Typography fontSize={26} className="text">
          {title}
        </Typography>
        <Spacer xs={25} />
        <Typography fontSize={16} className="text">
          {description}
        </Typography>
      </motion.div>
    </MotionDiv>
  );
};
