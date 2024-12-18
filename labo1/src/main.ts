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

// Définition de l'événement BeforeInstallPromptEvent
interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
  }
  
  let deferredPrompt: BeforeInstallPromptEvent | null = null;
  
  // Vérifier si les notifications sont autorisées
  function checkNotificationPermission(): void {
    if (Notification.permission === 'default') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notifications autorisées.');
        } else {
          console.log('Notifications refusées.');
        }
      });
    }
  }
  
  function showInstallNotification(): void {
    if (Notification.permission === 'granted' && deferredPrompt) {
      const notification = new Notification('Installer notre application', {
        body: "Installer l'application.",
        icon: '/icons/icon-29x29.png', 
      });
  
      notification.onclick = () => {
        // Déclencher l'installation si l'utilisateur clique sur la notification
        deferredPrompt?.prompt();
        deferredPrompt?.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('L’utilisateur a accepté d’installer l’application.');
          } else {
            console.log('L’utilisateur a refusé d’installer l’application.');
          }
          deferredPrompt = null; 
        });
      };
    }
  }
  
  // Écouter l'événement `beforeinstallprompt`
  window.addEventListener('beforeinstallprompt', (event: Event) => {
    event.preventDefault();
    deferredPrompt = event as BeforeInstallPromptEvent;
  
    // Lancer une notification toutes les 10 minutes
    setInterval(() => {
      showInstallNotification();
    }, 10 * 60 * 1000); // 10 minutes en millisecondes
  });
  
  // Vérifier les notifications au chargement de la page
  checkNotificationPermission();
  
  
  

  
