1. connect device by USB
2. command to get device no : 
	-> adb devices
(answer)-> Q89TNJLJ4TCQKFWO

3. command to run the app in actual device:
	-> adb -s Q89TNJLJ4TCQKFWO reverse tcp:8081 tcp:8081

4. react-native start

5. react-native run-android

6. ctrl+m for options

7. ctrl+r refresh




-----------------  to work in android mobile or emulator ----------------

add these + lines in Update your MainActivity.java
file location : android/app/src/main/java/com/project1/MainActivity.java



import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
