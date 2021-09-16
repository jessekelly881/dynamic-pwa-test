import { Handler } from '@netlify/functions'


const getManifest = (name: string, scope: string) => ({
    name,
    short_name: name,
    description: name,
    background_color: "#ffffff",
    theme_color: "#ffffff",
    display: "standalone",
    start_url: scope,
    scope,
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
})

const handler: Handler = async function(e) {
    return {
        statusCode: 200,
        body: JSON.stringify(
            getManifest(e.queryStringParameters["name"] || "No Name", e.queryStringParameters["scope"] || "")
        ),
        headers: {
            "Content-Type": "text/html"
        }
    };
}

export { handler }
