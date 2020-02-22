import {Navigation} from 'react-native-navigation';


import App from "../../App";
import Login from '../screens/login'
import SignUp from '../screens/signup'





export function registerScreens() {
    Navigation.registerComponent('firstLoad_app', () => App);
    Navigation.registerComponent('auth_login', () => Login);
    Navigation.registerComponent('auth_signup', () => SignUp);
}