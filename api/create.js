export default function handler(req, res) {
    const { title, desc, image, url, type } = req.query;
    
    if (!title || !image || !url) {
        return res.status(400).json({ error: 'Missing: title, image, url' });
    }
    
    // Encode data ke base64 untuk ID
    const data = JSON.stringify({ title, desc: desc || '', image, url, type: type || 'website' });
    const id = Buffer.from(data).toString('base64url');
    const baseUrl = `https://${req.headers.host}`;
    
    res.json({
        success: true,
        id,
        shortUrl: `${baseUrl}/${id}`,
        preview: `${baseUrl}/${id}`
    });
}
