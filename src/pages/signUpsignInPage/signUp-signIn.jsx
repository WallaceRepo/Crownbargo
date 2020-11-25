import React from 'react';
import '../signUpsignInPage/signUp-signIn.style.scss';
import SignIn from '../../component/signIn/signIn.component';
import SignUp from '../../component/sign-up/sign-up.component';

const SignUpSignInPage = () => (
    <div className='signIn-signUp'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignUpSignInPage;