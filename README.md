# 🔗 Link Preview Service

Service untuk generate link preview dengan custom image, title, dan description yang support di semua platform (WhatsApp, Discord, Twitter, dll).

## 🚀 Deploy ke Vercel

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Login ke Vercel
```bash
vercel login
```

### 3. Deploy
```bash
cd link-preview-vercel
vercel --prod
```

## 📝 API Usage

### Create Preview Link
```
GET /api/create?title=TITLE&desc=DESC&image=IMAGE_URL&url=TARGET_URL
```

**Parameters:**
- `title` (required): Title untuk preview
- `image` (required): URL image (1200x630 recommended)
- `url` (required): Target URL redirect
- `desc` (optional): Description
- `type` (optional): OG type (default: website)

**Response:**
```json
{
  "success": true,
  "id": "a1b2c3d4",
  "shortUrl": "https://your-domain.vercel.app/a1b2c3d4",
  "preview": "https://your-domain.vercel.app/a1b2c3d4"
}
```

### View Preview
```
GET /:id
```

## 🎨 Image Recommendations

- **Size**: 1200 x 630 pixels (landscape) atau 1:1 (square)
- **Format**: JPG atau PNG
- **Max size**: 1MB

## ✅ Supported Platforms

- ✅ WhatsApp (iOS & Android)
- ✅ Discord
- ✅ Twitter/X
- ✅ Facebook
- ✅ Telegram
- ✅ LinkedIn
- ✅ iMessage

## 📦 Production Setup

Untuk production, gunakan **Vercel KV** atau database untuk storage:

1. Install Vercel KV:
```bash
npm install @vercel/kv
```

2. Update `api/create.js` dan `api/[id].js`:
```javascript
import { kv } from '@vercel/kv';

// Save
await kv.set(`link:${id}`, data);

// Get
const data = await kv.get(`link:${id}`);
```

## 🔧 Local Development

```bash
npm run dev
```

## 📞 Support

- GitHub: https://github.com/FAHMYZAR/BotWA
- Developer: EL-RUWET Team
