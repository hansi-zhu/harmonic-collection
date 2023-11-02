if (style == null) {
    setTheme('light');
} else {
    setTheme(style);
}

function setTheme(theme) {
    if (theme == 'light') {
        document.getElementById('switcher-id').href = './themes/light.css';
    }
}