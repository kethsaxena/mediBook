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


  Workflow               
                       GitHub
                         │
                ┌────────┴────────┐
                │                 │
             mvp-v1         release/mvp-v1
                │                 │
                ▼                 ▼
              DEV               PROD
                │                 │
      ┌─────────┼────────┐        ├── Netlify Web
      │         │        │        ├── Google Play
      ▼         ▼        ▼        ├── App Store
 localhost   Android   Windows    └── Microsoft Store


DELIVERABLES 
| Artifact                                       | Recommended name                                |
| ---------------------------------------------- | ----------------------------------------------- |
| React Native → Web/Android/iOS/Windows diagram | **MediWallet High-Level Solution Architecture** |
| DEV → release → tag → stores diagram           | **MediWallet Release & Deployment Workflow**    |
| Folder/module structure                        | **MediWallet Low-Level Application Design**     |
| 30-day Excel                                   | **MediWallet MVP Delivery Roadmap**             |
