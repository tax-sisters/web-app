import axios, { AxiosResponse, AxiosError } from 'axios';
export type ThenArgs<T> = T extends Promise<infer U> ? U : T;
export type AxiosArgs<T> = T extends AxiosResponse<infer U> ? U : undefined;
export type ServerError = AxiosError<{ message: string; stack: string }>;

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const client = axios.create({
  baseURL: `api`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

client.interceptors.response.use(
  (response) => response,
  (err) => Promise.reject(err.response?.data || err)
);

type SubmitForm = (a: { firstName: string; lastName: string }) => Promise<AxiosArgs<ThenArgs<AxiosResponse<any>>>>;

export const submitForm: SubmitForm = (data) => {
  return client({
    url: `/webform`,
    method: 'POST',
    data
  }).then((res) => res.data.data);
};

