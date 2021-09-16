
const manifest = {
    name: "Test",
    short_name: "Test",
    description: "Test",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    display: "standalone",
    start_url: `/`,
    icons: [
        {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        },
        {
            "src": "/maskable_icon.png",
            "sizes": "196x196",
            "type": "image/png",
            "purpose": "any maskable"
        }
    ]
}

exports.handler = async function() {
    return {
        statusCode: 200,
        body: JSON.stringify(manifest),
        headers: {
            "Content-Type": "text/html"
        }
    };
}
