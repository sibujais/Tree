# Tree Species Selector 🌳

A React Native mobile application built as part of the CIFOR-ICRAF Software Development Assessment.

## Overview

Tree Species Selector allows users to browse, search, filter, and learn about different tree species through a simple and user-friendly interface.

The application demonstrates React Native fundamentals including navigation, list rendering, filtering, searching, reusable components, and responsive UI design.

## Features

### Tree Species List

* Displays 20 tree species
* Each species includes:

  * Name
  * Category
  * Short Description
  * Image

### Category Filtering

Users can filter tree species by category:

* All
* Fruit
* Timber
* Shade
* Medicinal

### Search Functionality

Users can search tree species by name.

### Tree Details Screen

Selecting a tree opens a detailed view showing:

* Tree Image
* Scientific Name
* Category
* Climate Information
* Uses
* Detailed Description

### Infinite Scroll

The tree list supports pagination using FlatList's `onEndReached` functionality.

## Tech Stack

* React Native
* Expo
* React Navigation
* JavaScript (ES6+)

## Project Structure

```text
src/
├── components/
│   ├── CategoryFilter.js
│   ├── SearchBar.js
│   └── TreeCard.js
│
├── constants/
│   └── categories.js
│
├── data/
│   └── trees.js
│
├── navigation/
│   └── AppNavigator.js
│
├── screens/
│   ├── HomeScreen.js
│   └── TreeDetailScreen.js
│
└── theme/
    └── colors.js
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project directory

```bash
cd TreeSpeciesSelector
```

3. Install dependencies

```bash
npm install
```

4. Start the Expo development server

```bash
npx expo start
```

5. Scan the QR code using the Expo Go application on Android or iOS.
   <img width="246" height="208" alt="Expo-Tree-QR" src="https://github.com/user-attachments/assets/ee1bbff5-ef52-4110-ac10-3f0181a0f423" />

7. OR use below url to install on device.
https://expo.dev/accounts/svujais/projects/Tree/builds/3449fa0a-76b4-482d-94b8-e06ac9b186fe
