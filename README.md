# Multiplatform Ionic Application

# About

The main objective of this work will be to develop a communications system that allows multimedia traffic of any size to be sent over long distances using the LoRa RAW (pure LoRa, no LoRaWAN) channel.

This project implements an Android application to manage the sending of multimedia files to the LoPy 4 over WiFi connection.

<p align="center">

<img src="https://user-images.githubusercontent.com/31318873/189539534-e9abdb87-17f3-42a9-a33c-088a689b32ee.png" width="200">
</p>

# How to setup
1. Clone this repository: `git clone https://github.com/cristiantrapero/tfm-ionic.git`
2. Install **npm** depending on the operating system you have using https://nodejs.org/es/download/ or with **NVM** https://github.com/nvm-sh/nvm
3. Move to the project: `cd tfm-ionic`
4. Run: `npm install`
5. Install Ionic: `npm install -g @ionic/cli`
6. Sync Ionic project: `ionic cap sync`
7. Open Android project: `npx cap open android`
8. Run the Android application in a smartphone

# Versions
NPM: `v18.8.0`
Ionic: `6.20.1`
Angular: `14.2.1`
Capacitor `4.1.0`
OS: `macOS Monterrey`
