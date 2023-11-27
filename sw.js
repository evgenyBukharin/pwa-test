const staticCacheName = 's-app-v3';
const dynamicCacheName = 'd-app-v3';

const assetUrls = ['index.html', '/js/app.js', '/css/styles.css', 'offline.html'];

self.addEventListener('install', async (event) => {
    const cache = await caches.open(staticCacheName);
    await cache.addAll(assetUrls);
});

self.addEventListener('activate', async (event) => {
    const cacheNames = await caches.keys();
    await Promise.all(
        cacheNames
            .filter((name) => name !== staticCacheName)
            .filter((name) => name !== dynamicCacheName)
            .map((name) => caches.delete(name))
    );
});

self.addEventListener('fetch', (event) => {
    const { request } = event;

    const url = new URL(request.url);
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(request));
    } else {
        event.respondWith(networkFirst(request));
    }
});

async function cacheFirst(request) {
    const cached = await caches.match(request);
    return cached ?? (await fetch(request));
}

async function networkFirst(request) {
    const cache = await caches.open(dynamicCacheName);
    try {
        const response = await fetch(request);
        await cache.put(request, response.clone());
        return response;
    } catch (e) {
        const cached = await cache.match(request);
        return cached ?? (await caches.match('/offline.html'));
    }
}

function subscribePush() {
    //Subscribes user to Push notifications
    registration.pushManager
        .subscribe({
            userVisibleOnly: true, //Set user to see every notification
        })
        .then(function (subscription) {
            toast('Subscribed successfully.');
            console.info('Push notification subscribed.');
            console.log(subscription);
        })
        .catch(function (error) {
            console.error('Push notification subscription error: ', error);
        });
}

function isPushSupported() {
    //checks if user has granted permission to Push notifications
    if (Notification.permission === 'denied') {
        alert('User has blocked push notification.');
        return;
    }

    //Checks if current browser supports Push notification
    if (!('PushManager' in window)) {
        alert("Sorry, Push notification isn't supported in your browser.");
        return;
    }

    //Get `push notification` subscription id

    //If `serviceWorker` is registered and ready
    navigator.serviceWorker.ready.then(function (registration) {
        registration.pushManager.getSubscription().catch(function (error) {
            console.error('Error occurred while enabling push ', error);
        });
    });
}
subscribePush();
