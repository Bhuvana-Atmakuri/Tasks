function visitLink(page) {

    var isNewSession = sessionStorage.getItem('isNewSession');
    if (!isNewSession) {
        
        localStorage.clear();
        sessionStorage.setItem('isNewSession', true);
    }
    countClick(page);
}

function viewResults() {
    showCounts();
}

function countClick(page) {
    
    var count = parseInt(localStorage.getItem(page)) || 0;
    localStorage.setItem(page, count + 1);
}

function showCounts() {
    var page1Count = localStorage.getItem('page1') || 0;
    var page2Count = localStorage.getItem('page2') || 0;
    var page3Count = localStorage.getItem('page3') || 0;

    document.getElementById("link-counts").innerHTML = `
        <p>Page 1 Clicks: ${page1Count}</p>
        <p>Page 2 Clicks: ${page2Count}</p>
        <p>Page 3 Clicks: ${page3Count}</p>
    `;
}

window.onload = function() {
    var isNewSession = sessionStorage.getItem('isNewSession');
    if (!isNewSession) {
        localStorage.clear();
        sessionStorage.setItem('isNewSession', true);
        localStorage.setItem('page1', 0);
        localStorage.setItem('page2', 0);
        localStorage.setItem('page3', 0);
    }
};
