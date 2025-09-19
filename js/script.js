document.addEventListener('DOMContentLoaded', function() {
    const switchBtn = document.getElementById('switch-lang');
    let currentLang = 'fa'; // Default language is Persian

    // Elements to switch
    const elements = {
        'box-header': 'box-header-en',
        'box-body': 'box-body-en',
        'text-download': 'text-download-en'
    };

    switchBtn.addEventListener('click', function() {
        // Toggle between languages
        currentLang = currentLang === 'fa' ? 'en' : 'fa';
        
        // Update button text
        switchBtn.textContent = currentLang === 'fa' ? 'EN' : 'FA';
        
        // Toggle RTL/LTR direction
        document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;
        
        // Switch visibility of elements
        for (const [faId, enId] of Object.entries(elements)) {
            const faElement = document.getElementById(faId);
            const enElement = document.getElementById(enId);
            
            if (currentLang === 'fa') {
                faElement.style.display = 'block';
                enElement.style.display = 'none';
            } else {
                faElement.style.display = 'none';
                enElement.style.display = 'block';
            }
        }
    });
});