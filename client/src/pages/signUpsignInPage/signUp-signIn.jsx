import React from 'react';
import { SignInAndSignUpContainer } from './signInsignUp.styles';
import SignIn from '../../component/signIn/signIn.component';
import SignUp from '../../component/sign-up/sign-up.component';

const SignUpSignInPage = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>   
);

export default SignUpSignInPage;