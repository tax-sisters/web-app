import styled from 'styled-components';
import { TextField } from '@mui/material';
import { ThemeColors } from '@/util/theme';

interface TextInputProps {
  error?: boolean;
}

export const TextInput = styled(TextField).attrs((p) => {
  return { size: 'small', ...p };
})<TextInputProps>`
  outline: none;

  .MuiInputBase-root {
    background-color: white;
    border-radius: 0px;
  }

  .MuiInputBase-multiline {
    padding: 6px 10px !important;
    font-size: 14px !important;
  }

  input,
  textarea {
    color: ${ThemeColors.PRIMARY};
  }

  textarea {
    padding: 0 !important;
  }

  & input::placeholder,
  textarea::placeholder {
    color: ${ThemeColors.PRIMARY};
    opacity: 0.7;
  }

  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    /* border: 1px solid ${({ error }) => (error ? ThemeColors.ERROR : ThemeColors.PRIMARY)}; */
    border-radius: 0px;
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    /* border: 1px solid ${({ error }) => (error ? ThemeColors.ERROR : ThemeColors.PRIMARY)}; */
    border-radius: 0px;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    /* border: 2px solid ${({ error }) => (error ? ThemeColors.ERROR : ThemeColors.PRIMARY)}; */
    border-radius: 0px;
  }

  .MuiFormHelperText-root {
    border: none;
    font-size: 12px;
    margin-left: 0;
  }

  .Mui-disabled {
    cursor: not-allowed;
    &.MuiInputBase-root {
      background-color: #f2f2f2 !important;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      border: 1px solid #bebebe;
    }
  }
`;

