# MediBook

Minimal Expo React Native app.
Dev: Praketa S

## Run

Install dependencies:

```bash
npm install
```

Start Expo with tunnel:

```bash
npx expo start --tunnel
```

## Expo Go

### Android

1. Install **Expo Go** from Google Play.
2. Sign in to your Expo account.
3. Scan the QR code shown in the terminal/browser.
4. Open the project in Expo Go.

### iOS

1. Install **Expo Go** from the App Store.
2. Sign in to your Expo account.
3. Scan the QR code using the iPhone Camera app.
4. Tap the Expo link to open the project in Expo Go.



## Architecture
                              MediWallet
                                  │
                         React Native + Expo
                                  │
                Shared React / TypeScript Code
                                  │
          ┌───────────────────────┼────────────────────────┐
          │                       │                        │
          ▼                       ▼                        ▼
      WEB CHANNEL            MOBILE CHANNEL          WINDOWS CHANNEL
          │                       │                        │
          ▼                 ┌─────┴─────┐                  ▼
 React Native Web           │           │          React Native Windows
          │                 ▼           ▼                  │
          │              Android       iOS                 │
          │                 │           │                  │
          ▼                 ▼           ▼                  ▼
    Expo Web Export      EAS Build   EAS Build       Visual Studio Build
          │                 │           │                  │
          ▼                 ▼           ▼                  ▼
        Netlify            AAB         IPA             MSIX Package
          │                 │           │                  │
          ▼                 ▼           ▼                  ▼
   Production Website  Google Play   App Store       Microsoft Store                  

## Release Workflow

                         GitHub
                           │
                  ┌────────┴────────┐
                  │                 │
                main     release_YYYYMMDD_vX.Y.Z
                  │                 │
                  ▼                 ▼
                 DEV          RELEASE CANDIDATE
                  │                 │
          ┌───────┴───────┐         ▼
          │               │      Release Tag
          ▼               ▼        vX.Y.Z
       Android            iOS         │
          │               │           │
          ▼               ▼           │
 Android Emulator     Expo Go         │
 + Real Device        + iPhone        │
          │               │           │
          └───────┬───────┘           │
                  │                   │
                  ▼                   ▼
               DEV QA             EAS Build
                                      │
                           ┌──────────┴──────────┐
                           │                     │
                           ▼                     ▼
                        Android                 iOS
                           │                     │
                       APK / AAB                IPA
                           │                     │
                    ┌──────┴──────┐       ┌─────┴─────┐
                    │             │       │           │
                    ▼             ▼       ▼           ▼
                Direct APK   Google Play TestFlight App Store
