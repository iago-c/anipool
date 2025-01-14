import { OAuthProvider } from '@backend/enums';
import axiosClient from '@libs/axios';

const signIn = async (
  provider: OAuthProvider,
  credencials: ProviderCredencials
) => {
  const response = await axiosClient.post('/auth/sign-in', {
    provider,
    credencials,
  });
  const userToken = <string>response.data.jwtToken;
  return userToken;
};

const getTwitterAuthUrl = async () => {
  const response = await axiosClient.get('/auth/get-twitter-auth-url');
  const twitterAuthUrl = <string>response.data.twitterAuthUrl;
  return twitterAuthUrl;
};

const authService = {
  signIn,
  getTwitterAuthUrl,
};

export default authService;
