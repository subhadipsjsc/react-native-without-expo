import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/Rnn_setup/register_screens';


registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: "firstLoad_app",
                            options: {
                                topBar: {
                                    visible: false,
                                }
                            },
                        }
                    }

                ]
            }
        }
    });
});