import Spacer from '@/components/Spacer/Spacer';
import { Sq1, Sq2, Sq3, Sq4 } from '@/components/animated/squares';
import { Buttonas, TextInput } from '@/components/form';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { submitForm } from '@/api';
import useTranslation from '@/hooks/useTranslation';

const Forma = styled.form`
  position: relative;
  z-index: 1;
  border: 1px solid #ceccce;
  background-color: #f7f8fa;
  border-radius: 25px;
  max-width: 675px;
  flex: 1;
  padding: 50px 98px;
  filter: drop-shadow(0px 0px 10px rgba(7, 46, 91, 0.15));
  margin: 100px 0;

  .btn-container {
    display: flex;
    justify-content: center;
  }

  .great-success {
    color: #1a7a83;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    /* .header {
      font-size: 36px;
    } */
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 50px 28px;
    .header {
      font-size: 30px;
    }
  }
`;

const Squares = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
`;

const validationSchema = Yup.object({
  name: Yup.string().required('Required').max(50, 'Max 50 characters'),
  email: Yup.string().required('Required').email('Invalid email address').max(50, 'Max 50 characters'),
  message: Yup.string().required('Required').max(500, 'Max 500 characters'),
});

const Form = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [err, setErr] = useState(false);
  const { translate } = useTranslation();

  const { values, handleBlur, handleChange, handleSubmit, resetForm, touched, errors, isValid, isSubmitting } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        message: '',
      },
      validationSchema,
      onSubmit: values => {
        setIsSuccess(false);
        setErr(false);

        return submitForm(values)
          .then(() => {
            setIsSuccess(true);
            resetForm();
          })
          .catch(() => setErr(true));
      },
    });

  return (
    <motion.div style={{ position: 'relative' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Forma onSubmit={handleSubmit}>
        <Typography fontSize={48} fontWeight={600} textAlign="center" className="header">
          {translate('FORM_CONTACT_US')}
        </Typography>
        <Spacer xs={43} />
        <Typography fontSize={18}>Lorem ipsum dolor sit amet consectetur. Tristique dolor tincidunt feugiat</Typography>
        <Spacer xs={48} />
        <TextInput
          label={translate('FORM_NAME')}
          fullWidth
          id="name"
          required
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <Spacer xs={30} />
        <TextInput
          label={translate('FORM_EMAIL')}
          fullWidth
          type="email"
          required
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <Spacer xs={30} />
        <TextInput
          label={translate('FORM_MESSAGE')}
          multiline
          minRows={3}
          fullWidth
          id="message"
          required
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.message && Boolean(errors.message)}
          helperText={touched.message && errors.message}
        />
        <Spacer xs={6} />
        <Typography textAlign="center" fontSize={12}>
          {translate('FORM_DISCLAIMER')}
        </Typography>
        <Spacer xs={35} />
        {err && (
          <>
            <Typography color="error" textAlign={'center'}>
              {translate('FORM_ERROR')}
            </Typography>
            <Spacer xs={35} />
          </>
        )}
        {isSuccess && (
          <>
            <Typography className="great-success" textAlign={'center'}>
              {translate('FORM_THANK_YOU')}
            </Typography>
            <Typography className="great-success" textAlign={'center'}>
              {translate('FORM_SUCCESS')}
            </Typography>
            <Spacer xs={35} />
          </>
        )}
        <div className="btn-container">
          <Buttonas type="submit" disabled={!isValid || isSubmitting}>
            {translate('FORM_SEND')}
          </Buttonas>
        </div>
        <Spacer xs={10} />
      </Forma>
      <Squares>
        {/* left */}
        <Sq2 left={-22} inViewPx={0} y={-350} />
        <Sq4 left={-10} inViewPx={0} y={-660} />
        <Sq1 left={-7} inViewPx={0} y={-500} />
        <Sq3 left={-15} inViewPx={0} y={-200} />
        {/* right */}
        <Sq3 left={102} inViewPx={0} y={-100} />
        <Sq4 left={102} inViewPx={0} y={-500} />
        <Sq2 left={109} inViewPx={0} y={-250} />
      </Squares>
    </motion.div>
  );
};

export default Form;
