import React from 'react';
import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

const initialState = {
  user: {},
  accessToken: '',
  refreshToken: '',
  expiresInSeconds: 0,
};

const slice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setAuth: (state, action) => ({...state, ...action.payload}),
    resetAuth: () => initialState,
  },
});

export default slice.reducer;

// action creators
export const {setAuth, resetAuth} = slice.actions;

// selectors
export const getAuth = state => state.auth;
export const getUser = state => state.auth.user;
export const getAccessToken = state => state.auth.accessToken;
export const getRefreshToken = state => state.auth.refreshToken;

// hooks
export function useIsAuthenticated() {
  const token = useSelector(getRefreshToken);
  return !!token;
}

export function useInitialRenewToken() {
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(!!auth.refreshToken);

  React.useEffect(() => {
    if (auth.refreshToken) {
      axios
        .get('/auth/renew-accesstoken/' + auth.refreshToken)
        .then(res => dispatch(setAuth(res.data)))
        .catch(() => dispatch(resetAuth()))
        .finally(() => setIsLoading(false));
    }
  }, []);

  return isLoading;
}

export const useTokenRenew = () => {
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      axios
        .get('/auth/renew-accesstoken/' + auth.refreshToken)
        .then(res => dispatch(setAuth(res.data)))
        .catch(() => dispatch(resetAuth()));
    }, auth.expiresInSeconds * 1000 - 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [auth.accessToken]);
};

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector(getAuth);

  const signIn = ({data, onError}) => {
    axios
      .post('/auth/signin', data)
      .then(res => dispatch(setAuth(res.data)))
      .catch(error => (onError ? onError(error.response) : null));
  };

  const signOut = () => {
    axios
      .delete(`/auth/signout/${auth.refreshToken}`)
      .finally(() => dispatch(resetAuth()));
  };

  return {auth, signIn, signOut};
};
