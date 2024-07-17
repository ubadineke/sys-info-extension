document.addEventListener('DOMContentLoaded', () => {
    chrome.runtime.sendMessage({ action: 'getSystemInfo' }, (response) => {
        const userAgent = navigator.userAgent;
        let infoDiv = document.getElementById('info');
        infoDiv.innerHTML = `
         <h2>User Agent</h2>
        <pre>${JSON.stringify(userAgent, null, 2)}</pre>
        <h2>CPU</h2>
        <pre>${JSON.stringify(response.cpu, null, 2)}</pre>
        <h2>Memory</h2>
        <pre>${JSON.stringify(response.memory, null, 2)}</pre>
        <h2>Storage</h2>
        <pre>${JSON.stringify(response.storage, null, 2)}</pre>
        
      `;
    });
});
