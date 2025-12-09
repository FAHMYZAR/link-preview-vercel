const crypto = require('crypto');

// Vercel KV storage simulation (gunakan Vercel KV atau database production)
const links = new Map();

export default function handler(req, res) {
    const { title, desc, image, url, type } = req.query;
    
    if (!title || !image || !url) {
        return res.status(400).json({ error: 'Missing: title, image, url' });
    }
    
    const id = crypto.randomBytes(4).toString('hex');
    const baseUrl = `https://${req.headers.host}`;
    
    links.set(id, { 
        title, 
        description: desc || '', 
        image, 
        url,
        type: type || 'website'
    });
    
    res.json({
        success: true,
        id,
        shortUrl: `${baseUrl}/${id}`,
        preview: `${baseUrl}/${id}`
    });
}
