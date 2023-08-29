import Spacer from '@/components/Spacer/Spacer';
import { Buttonas, TextInput } from '@/components/form';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { submitForm } from '@/api';
import useTranslation from '@/hooks/useTranslation';

const Forma = styled.form`
  position: relative;
  z-index: 1;
  background-color: #f7f8fa;
  flex: 1;
  padding: 50px 65px 50px 55px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .btn-container {
    display: flex;
    /* justify-content: center; */
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
      font-size: 22px;
    }
  }
`;

const validationSchema = Yup.object({
  name: Yup.string().required('Required').max(50, 'Max 50 characters'),
  email: Yup.string().required('Required').email('Invalid email address').max(50, 'Max 50 characters'),
  phone: Yup.string().min(8, 'Min 8 characters').max(20, 'Max 20 characters'),
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
        phone: '',
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
    <div style={{ position: 'relative' }}>
      <Forma onSubmit={handleSubmit}>
        <Typography fontSize={36} fontWeight={600} className="header">
          Send us a message
        </Typography>
        <Spacer xs={20} />
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
          label={translate('FORM_PHONE')}
          fullWidth
          id="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phone && Boolean(errors.phone)}
          helperText={touched.phone && errors.phone}
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
        <Typography fontSize={12}>{translate('FORM_DISCLAIMER')}</Typography>
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
          <Buttonas small type="submit" disabled={!isValid || isSubmitting}>
            {translate('FORM_SEND')}
          </Buttonas>
        </div>
        <Spacer xs={10} />
      </Forma>
    </div>
  );
};

export default Form;
