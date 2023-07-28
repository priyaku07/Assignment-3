let count = 0;
function updateCounter() {
    count++;
    document.getElementById('count').textContent = count;
        }
        document.getElementById('counterButton').onclick = updateCounter;