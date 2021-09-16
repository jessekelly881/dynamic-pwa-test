
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
            "src": "https://picsum.photos/192/192.webp",
            "sizes": "192x192",
            "type": "image/webp"
        },
        {
            "src": "https://picsum.photos/512/512.webp",
            "sizes": "512x512",
            "type": "image/webp"
        },
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
