export default function handler(req, res) {
    const { id } = req.query;
    
    let title, description, image, url, type;
    
    try {
        const decoded = Buffer.from(id, 'base64url').toString('utf-8');
        const data = JSON.parse(decoded);
        ({ title, desc: description, image, url, type = 'website' } = data);
    } catch (error) {
        return res.status(404).send('Link not found');
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta property="og:type" content="${type}">
    <meta property="og:site_name" content="Link Preview">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="${url}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${image}">
    <title>${title}</title>
    <meta http-equiv="refresh" content="0;url=${url}">
    <style>body{font-family:system-ui;text-align:center;padding:50px}img{max-width:100%;border-radius:8px}</style>
</head>
<body>
    <h1>🔗 ${title}</h1>
    <p>${description}</p>
    <img src="${image}" alt="${title}">
    <p><a href="${url}">Click here if not redirected</a></p>
    <script>setTimeout(()=>window.location.href="${url}",100)</script>
</body>
</html>`);
}
