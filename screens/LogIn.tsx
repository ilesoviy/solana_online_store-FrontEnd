import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StatusBar, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { COLOURS, _Items } from '../database/Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainStackScreenProps } from '../router/routes';
// import { AppleButton, appleAuth } from '@invertase/react-native-apple-authentication';

// import auth from '@react-native-firebase/auth';
// import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
// import firebase from '../firebaseConfig';
// import * as Crypto from "expo-crypto";
// import * as AppleAuthentication from "expo-apple-authentication";

// GoogleSignin.configure({
//     webClientId: '1064351666274-6o7vm84q9bab6upvs0vvhqg70ltuio24.apps.googleusercontent.com',
//     offlineAccess: true
// });

// async function onAppleButtonPress() {
//     // Start the sign-in request
//     const appleAuthRequestResponse = await appleAuth.performRequest({
//         requestedOperation: appleAuth.Operation.LOGIN,
//         requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
//     });

//     // Ensure Apple returned a user identityToken
//     if (!appleAuthRequestResponse.identityToken) {
//         throw new Error('Apple Sign-In failed - no identify token returned');
//     }

//     // Create a Firebase credential from the response
//     const { identityToken, nonce } = appleAuthRequestResponse;
//     const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

//     // Sign the user in with the credential
//     return auth().signInWithCredential(appleCredential);
// }

// async function onFacebookButtonPress() {
//     // Attempt login with permissions
//     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

//     if (result.isCancelled) {
//         throw 'User cancelled the login process';
//     }

//     // Once signed in, get the users AccesToken
//     const data = await AccessToken.getCurrentAccessToken();

//     if (!data) {
//         throw 'Something went wrong obtaining access token';
//     }

//     // Create a Firebase credential with the AccessToken
//     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

//     // Sign-in the user with the credential
//     return auth().signInWithCredential(facebookCredential);
// }

// async function onGoogleButtonPress ()  {
//     // Get the users ID token
//     const { idToken, accessToken } = await GoogleSignin.signIn();

//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken, accessToken);

//     // Sign-in the user with the credential
//     return auth().signInWithCredential(googleCredential);
// }

// const loginWithApple = async () => {
//     const csrf = Math.random().toString(36).substring(2, 15);
//     const nonce = Math.random().toString(36).substring(2, 10);
//     const hashedNonce = await Crypto.digestStringAsync(
//         Crypto.CryptoDigestAlgorithm.SHA256, nonce);
//     const appleCredential = await AppleAuthentication.signInAsync({
//         requestedScopes: [
//             AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
//             AppleAuthentication.AppleAuthenticationScope.EMAIL
//         ],
//         state: csrf,
//         nonce: hashedNonce
//     });
//     const { identityToken, email, state } = appleCredential;
// }

// const sendVerification = (phoneNumber: string, recaptchaVerifier: any, setVerificationId: any) => {
    
//     const phoneProvider = new firebase.auth().PhoneAuthProvider();
//     phoneProvider
//         .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
//         .then(setVerificationId);
// };

// Function to be called when confirming the verification code that we received
// from Firebase via SMS
// const confirmCode = (verificationId: string, code: string) => {
//     const credential = firebase.auth.PhoneAuthProvider.credential(
//         verificationId,
//         code
//     );
//     firebase.auth()
//         .signInWithCredential(credential)
//         .then((result: any) => {
//             // Do something with the results here
//             console.log(result);
//         });
// }

const LogIn = ({ navigation }: MainStackScreenProps<'LogIn'>) => {

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                paddingHorizontal: '5%',
                backgroundColor: COLOURS.paleGrey,
            }}
        >
            {/* Back Button */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: '10%',
                }}
            >
                <Ionicons
                    onPress={() => navigation.navigate('OnBoarding')}
                    name="arrow-back-outline"
                    size={36}
                    style={{
                        color: COLOURS.black
                    }}
                />
            </View>
            {/* Welcome Text */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: '2%',
                    marginLeft: '0.5rem'
                }}
            >
                <Text
                    style={{
                        fontSize: 48,
                        color: COLOURS.black,
                        fontWeight: '600',
                    }}
                >
                    Welcome!
                </Text>
            </View>

            {/* Email Input */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '50%',

                }}
            >
                <TextInput
                    placeholder='Email'
                    style={{
                        paddingHorizontal: '1rem',
                        borderColor: COLOURS.black,
                        borderRadius: 30,
                        width: '100%',
                        height: '3rem'
                    }}
                >

                </TextInput>
            </View>

            {/* Log in / Sign up */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingTop: '7%',
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeTabs')}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLOURS.purple,
                        borderRadius: 30,
                        width: '40%',
                        height: '3rem'
                    }}
                    activeOpacity={0.5}>
                    <Text
                        style={{
                            fontSize: 16,
                            color: COLOURS.white,
                            fontWeight: '500',
                            textAlign: 'center'
                        }}
                    >
                        Log in
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeTabs')}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLOURS.purple,
                        borderRadius: 30,
                        width: '40%',
                        height: '3rem'
                    }}
                    activeOpacity={0.5}>
                    <Text
                        style={{
                            fontSize: 16,
                            color: COLOURS.white,
                            fontWeight: '500',
                            textAlign: 'center'
                        }}
                    >
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
            {/* Or Text */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '7%'
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        color: COLOURS.black,
                        fontWeight: '500',
                    }}
                >
                    or
                </Text>
            </View>
            {/* Icons */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingTop: '7%',
                    paddingHorizontal: '10%'
                }}
            >
                <Ionicons
                    name="phone-portrait-outline"
                    size={30}

                />

                {/* <AppleButton
                    buttonStyle={AppleButton.Style.WHITE}
                    buttonType={AppleButton.Type.SIGN_IN}
                    style={{
                        width: 160,
                        height: 45,
                    }}
                    onPress={() => onAppleButtonPress().then(() => navigation.navigate('HomeTabs'))}
                /> */}
                <Ionicons
                    name="logo-apple"
                    size={30}
                    // onPress={() => onAppleButtonPress().then(() => navigation.navigate('HomeTabs'))}
                />

                {/* <AppleAuthentication.AppleAuthenticationButton
                    buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                    buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                    cornerRadius={5}
                    style={{ width: 250, height: 50 }}
                    onPress={loginWithApple}
                /> */}
                <Ionicons
                    name="logo-google"
                    size={30}
                    // onPress={() =>  onGoogleButtonPress().then(() => navigation.navigate('HomeTabs'))}
                />
                <Ionicons
                    name="logo-facebook"
                    size={30}
                    // onPress={() => onFacebookButtonPress().then(() => navigation.navigate('HomeTabs'))}
                />
            </View>

            {/* Connect wallet */}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '7%',
                }}
            >
                <TouchableOpacity
                    // onPress={() => navigation.navigate('Home')}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLOURS.purple,
                        borderRadius: 30,
                        width: '100%',
                        height: '3rem'
                    }}
                    activeOpacity={0.5}>
                    <Ionicons
                        name="wallet-outline"
                        size={20}
                        style={{
                            color: COLOURS.white,
                            marginRight: '0.5rem'
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 16,
                            color: COLOURS.white,
                            fontWeight: '500',
                            textAlign: 'center'
                        }}
                    >
                        Connect wallet
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LogIn;
