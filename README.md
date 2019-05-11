<img alt="React Native Card Collection" src="https://github.com/WrathChaos/react-native-card-collection/blob/master/assets/logo.png" width="1050"/>

Easy to use & Ready to Go Fully Customizable Awesome Card Collection for React Native.

[![npm version](https://img.shields.io/npm/v/react-native-card-collection.svg)](https://www.npmjs.com/package/react-native-card-collection)
[![npm](https://img.shields.io/npm/dt/react-native-card-collection.svg)](https://www.npmjs.com/package/react-native-card-collection)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
![expo-compatible](https://img.shields.io/badge/Expo-compatible-9cf.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# Card

<p align="center">
<img alt="React Native Card Collection" src="https://github.com/WrathChaos/react-native-card-collection/blob/master/assets/Screenshots/CardExample.png" width="49.7%" />
</p>
## Installation

Add the dependency:

### React Native:

```ruby
npm i react-native-card-collection
```

## Peer Dependencies

###### IMPORTANT! You need install them.

```
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
```

## Basic Usage

```ruby
import { GradientHeader } from "react-native-card-collection";

<GradientHeader />
```

## Advanced Usage
```ruby
import { GradientHeader } from "react-native-card-collection";

<GradientHeader
  title="Title"
  subtitle="Have a nice day Kuray"
  gradientColors={["#00416A", "#E4E5E6"]}
  imageSource={require("./assets/profile.jpg")}
/>
```

## Configuration - Props

| Property               |   Type    |              Default              | Description                                                                |
| ---------------------- | :-------: | :-------------------------------: | -------------------------------------------------------------------------- |
| title                  |  string   |               Today               | change the title                                                           |
| subtitle               |  string   |          Have a nice day          | change the subtitle                                                        |
| gradient               |  boolean  |               true                | if you do not want gradient background, simply make this prop false        |
| gradientColors         | [colors]  | ["#12c2e9", "#c471ed", "#f64f59"] | change the gradient colors                                                 |
| start                  |    x,y    |          { x: 0, y: 0 }           | change the gradient's direction of start                                   |
| end                    |    x,y    |          { x: 1, y: 0 }           | change the gradient's direction of end                                     |
| shapeColor             |   color   |              #ba75df              | change solid background color, it is available when gradient prop is false |
| imageSource            |   image   |           profile image           | change the circle image                                                    |
| imageOnPress           | function  |               null                | set the onPress function for profile image                                 |
| position               |   style   |                top                | set the background shape's position                                        |
| headerContentComponent | component |          chech the code           | set your own design for the header content                                 |


### ToDos

- [x] LICENSE
- [ ] Expo Support (Coming Soon)
- [ ] Write an article about the lib on Medium


## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Card Collection Library is available under the MIT license. See the LICENSE file for more info.
