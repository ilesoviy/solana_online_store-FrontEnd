import sanitizeUrlParams from '../utils/sanitizeUrlParams';
import axios, { AxiosError } from 'axios';

const API_URL="http://65.108.20.232:4000/v0";

interface ApiCallMethods {
  apiGet: <T>(url: string, queryParams?: { [x: string]: any }) => Promise<T>;
  apiPost: <T>(url: string, data: any) => Promise<T>;
  apiPut: <T>(url: string, data: any) => Promise<T>;
  apiDelete: <T>(url: string) => Promise<T>;
}

class NotFoundError extends Error {
  constructor(message?: string) {
    super(message ?? 'Not found');
    this.name = 'NotFound';
  }
}

/**
 * Hook to be used for all apis which don't require
 * authentication. If the user is signed in, automatically
 * adds a Bearer token to the headers
 * @returns ApiCallMethods
 *
 * To use it:
 * const httpApi = useHttpApi();
 * const queryParams = {}
 *
 * const response = await httpApi.apiGet<type of Response>('/url', queryParams);
 *
 * Example for Brands:
 * const httpApi = useHttpApi();
 *
 * const response = await httpApi.apiGet<Brand[]>('/items/brands');
 */
export default function useHttpApi(): ApiCallMethods {
  //const { getAccessToken, signOut } = useAuth();

  /**
   * Makes a GET request
   * @param url url for the api resource
   * @param queryParams query params as an object
   * @returns
   */
  async function apiGet<T>(url: string, queryParams?: { [x: string]: any }) {
    //const h = authHeader();
    const token = 'unknown'; //getAccessToken();
    console.log(token);
    let headers: any = {
      'Content-Type': 'application/json',
    };
    const q = queryParams
      ? `?${new URLSearchParams(sanitizeUrlParams(queryParams)).toString()}`
      : '';
    if (token) {
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
    }
    const api_url = `${API_URL}${url}${q}`;
    return axios
      .get<T>(api_url, {
        headers,
      })
      .then((response) => {
        if (!response.data) {
          throw new NotFoundError();
        } else {
          return response.data;
        }
      })
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          const e = error as AxiosError;
          if (e.response?.status == 401) {
            //TODO - handle signout if token is not valid
            //signOut();
            throw error;
          } else {
            throw error;
          }
        } else {
          throw error;
        }
      });
  }

  /**
   * Makes a POST request
   * @param url url for the api resource
   * @param data data to post
   * @param queryParams query params as an object
   * @returns
   */
  async function apiPost<T>(url: string, data: any, queryParams?: { [x: string]: any }) {
    const token = 'unknown'; //getAccessToken();
    console.log(token);
    let headers: any = {
      'Content-Type': 'application/json',
    };
    const q = queryParams
      ? `?${new URLSearchParams(sanitizeUrlParams(queryParams)).toString()}`
      : '';
    if (token) {
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return axios
      .post<T>(`${API_URL}${url}`, data, {
        headers,
      })
      .then((response) => response.data)
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          const e = error as AxiosError;
          if (e.response?.status == 401) {
            //signOut();
            throw error;
          } else {
            throw error;
          }
        } else {
          throw error;
        }
      });
  }
  /**
   * Makes a PUT request
   * @param url url for the api resource
   * @param data data to put
   * @param queryParams query params as an object
   * @returns
   */
  async function apiPut<T>(url: string, data: any, queryParams?: { [x: string]: any }) {
    const token = 'unknown'; //getAccessToken();
    console.log(token);
    let headers: any = {
      'Content-Type': 'application/json',
    };
    const q = queryParams
      ? `?${new URLSearchParams(sanitizeUrlParams(queryParams)).toString()}`
      : '';
    if (token) {
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return axios
      .put<T>(`${API_URL}${url}`, data, {
        headers,
      })
      .then((response) => response.data)
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          const e = error as AxiosError;
          if (e.response?.status == 401) {
            //signOut();
            throw error;
          } else {
            throw error;
          }
        } else {
          throw error;
        }
      });
  }

  /**
   * Makes a DELETE request
   * @param url url for the api resource
   * @param queryParams query params as an object
   * @returns
   */
  async function apiDelete<T>(url: string, queryParams?: { [x: string]: any }) {
    const token = 'unknown'; //getAccessToken();
    console.log(token);
    let headers: any = {
      'Content-Type': 'application/json',
    };
    const q = queryParams
      ? `?${new URLSearchParams(sanitizeUrlParams(queryParams)).toString()}`
      : '';
    if (token) {
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return axios
      .delete<T>(`${API_URL}${url}`, {
        headers,
      })
      .then((response) => response.data)
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          const e = error as AxiosError;
          if (e.response?.status == 401) {
            //signOut();
            throw error;
          } else {
            throw error;
          }
        } else {
          throw error;
        }
      });
  }
  return { apiGet, apiPost, apiPut, apiDelete };
}
