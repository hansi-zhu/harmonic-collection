if (style == null) {
    setTheme('dark');
} else {
    setTheme(style);
}

function setTheme(theme) {
    if (theme == 'dark') {
        document.getElementById('switcher-id').href = './themes/light.css';
    }
}

