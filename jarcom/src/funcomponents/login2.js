import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import '../stylesheet/Home.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

// preview-start
const providers = [{ id: 'credentials', name: 'Email and Password' }];
// preview-end

const signIn = async (provider, formData) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      alert(
        `Signing in with "${provider.name}" and credentials: ${formData.get('email')}, ${formData.get('password')}`,
      );
      resolve();
    }, 300);
  });
  return promise;
};

export default function Login() {
  const theme = useTheme();
  return (
    
    // preview-start
    
    <AppProvider theme={theme} >
    <Card sx={{ maxWidth: 1600 }}>
   <CardMedia
     component="img"
     height="140"
     image="https://th.bing.com/th/id/R.bcafc1431179dd2972e131942af35780?rik=57l%2b4GHiv9tHPw&pid=ImgRaw&r=0"
     alt="green iguana"/>
     </Card>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ emailField: { autoFocus: false } }}
      />

      
    </AppProvider>
    // preview-end
    
  );
}