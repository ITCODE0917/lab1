import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/style.css'
createApp(App).mount('#app')

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/lab1/sw.js') 
        .then((registration) => {
          console.log('Service Worker enregistré avec succès:', registration);
        })
        .catch((error) => {
          console.error('Échec de l\'enregistrement du Service Worker:', error);
        });
    });
  }


let deferredPrompt: BeforeInstallPromptEvent | null = null;

  window.addEventListener('beforeinstallprompt', (event: Event) => {
    event.preventDefault();

    deferredPrompt = event as BeforeInstallPromptEvent;
  
    const installButton = document.getElementById('install-btn') as HTMLButtonElement | null;
    if (installButton) {
      installButton.style.display = 'block';
      installButton.addEventListener('click', () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult: UserChoiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('L’utilisateur a accepté d’installer l’application.');
            } else {
              console.log('L’utilisateur a refusé d’installer l’application.');
            }
            deferredPrompt = null; 
          });
        }
      });
    }
  });
  
  // Masquer le bouton après l'installation réussie
  window.addEventListener('appinstalled', () => {
    console.log('L’application a été installée.');
    const installButton = document.getElementById('install-btn') as HTMLButtonElement | null;
    if (installButton) {
      installButton.style.display = 'none'; // Masquer le bouton
    }
  });
  
  
  interface UserChoiceResult {
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }

  interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
  }
  
  

  
