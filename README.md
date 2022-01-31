This is a Uber clone built with Expo-ReactNative, Redux, and tailwind CSS. It uses the Google places API to locate places, Directions API to provide the shortest and easiest direction between the 2 given places, and also the distance matrix API to provide information on the distance between in miles, and the approximated drive time in minutes.

### About the app:

This is a mobile application built with Expo for ReactNative. It can be deployed to iOS, ipadOS, and android. The main objective was to clone the Uber's functionality with integration of PlacesAPI, DirectionsAPI, and also DistanceMatrix API.

### Functionality
![Home Screen](tree/master/uberClone/Images/Screen1_home.PNG)
![Set start location](tree/master/uberClone/Images/Screen2_setOrigin.PNG)
![Set destination](tree/master/uberClone/Images/Screen3_Destination.PNG)
![Get Directions](tree/master/uberClone/Images/Screen4_Directions.PNG)
![Select ride](tree/master/uberClone/Images/Screen5_SelectRide.PNG)

### Development

=> The application is built with Expo, React-Native, Redux and tailwind CSS. The placesAPI, Directions API and Distance matrix API were integrated to improve the functionality of the application<br/>
=> The Places API is used to locate places on the map; To integrate the places API, React-native-google-places-autocomplete is used; Here, we can search for a given place which can be located on the maps.<br/>
=>After locating a place; it can be marked on the map with the help of react-native-maps. Here we also use MapViews from the same package(react-native-maps).<br/>
=> The google Directions API uses an HTTP request to return JSON or XML-formatted directions between locations. This is integrated into the application using MapViewDirections from the react-native-maps-directions<br />
=>The Distance Matrix API provides travel distance and time for a matrix of origins and destinations. Here we can calculate aproximate prices for a given ride.

#### Requirements

See the package.json for all the dependencies [here](uberClone/package.json)

### Cloning and usage of the code:

=> #git clone [git@github.com:ntaztonny/Uberclone.git]<br />
=> After cloning, cd to uberClone<br />
=> Run #npm install to add all dependences and npm modules<br />
=> Run #npm start/ yarn start/ expo start to run the application
=> Using the expo app on a device with the same internet/LAN connection, scan the QR inorder to run the app on an iOS, ipadOS, or android device

### Other notes:

=> For the google APIs to work, you must activate billing and also the Places, Directions and also Distance Matrix APIs. You will also have to get a google API key.<br/>
=> To use the google API key, you have to set up the .env valuable (GOOGLE_MAPS_APIKEY). The react-native-dotenv package should be setup in the plug-ins section. The react-native-dotenv package should only and only be installed by npm other-wise, a yarn installation won't work i.e <br/>
#npm install --save-dev metro-react-native-babel-preset react-native-dotenv <br/>
