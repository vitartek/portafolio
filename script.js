window.addEventListener('beforeunload', () => {
    if (socket) socket.close();
});