async function updateServerStatus() {
    const statusBox = document.getElementById('server-status-text');
    try {
        const response = await fetch('https://satellite.2b2tmuseum.org/stats');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        statusBox.innerHTML = `[ Players online: ${data.currentPlayers} |  Players who've joined at least once: ${data.uniquePlayers} | World size: ${data.worldSize} ${data.worldSizeUnits} ]`

    } catch (error) {
        console.error('Error fetching server status:', error);
        statusBox.innerHTML = ``;
    }
}
document.addEventListener('DOMContentLoaded', updateServerStatus);
setInterval(updateServerStatus, 60000);