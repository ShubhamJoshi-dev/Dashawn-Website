# 🎭 Dashain Fun Gallery - Friends Edition 🎉

A hilarious and interactive website to showcase your friends' funny photos during Dashain festival! Built with Next.js, TypeScript, Framer Motion, and lots of humor! 😂

## ✨ Features

- 📸 **Interactive Photo Gallery** - Click photos for full-screen view with funny captions
- 🎭 **Roast Mode Toggle** - Switch between nice and savage captions
- 🎨 **Photo Filters** - Apply vintage, drama, glow, meme, and nightmare filters
- 🎪 **Animated UI** - Smooth animations and floating elements
- 📱 **Responsive Design** - Works perfectly on all devices
- 🔥 **Caption Generator** - Generate hilarious roast captions for your friends
- 🪔 **Dashain Theme** - Beautiful Nepali festival-themed design

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your photos:**
   - Replace `photo1.jpeg` through `photo9.jpeg` with your friends' photos
   - Keep the same naming convention for automatic loading

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` and enjoy the fun! 🎉

## 📦 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click! 🚀

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages
1. Build the project: `npm run build`
2. Push the `out` folder to your `gh-pages` branch

## 🎨 Customization

### Adding More Photos
- Add more photos to the root directory
- Update the `photos` array in `app/components/PhotoGallery.tsx`
- Add corresponding captions and roast captions

### Changing Captions
- Edit the `photos` array for regular captions
- Edit the `roastCaptions` array for roast mode
- Update the `funnyTemplates` in `FunnyCaption.tsx` for caption generator

### Styling
- Modify colors in `tailwind.config.js`
- Update animations in `app/globals.css`
- Customize components in the `app/components/` directory

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📁 Project Structure

```
DashainWebsite/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── PhotoGallery.tsx
│   │   ├── FunnyCaption.tsx
│   │   └── FloatingElements.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── photo1.jpeg - photo9.jpeg
├── package.json
├── tailwind.config.js
└── next.config.js
```

## 🎯 Features Breakdown

### Photo Gallery
- Grid layout with hover effects
- Click to open modal view
- Filter system (vintage, drama, glow, meme, nightmare)
- Animated photo cards with rotation effects

### Roast Mode
- Toggle between friendly and savage captions
- Different caption sets for maximum entertainment
- Visual indicators when roast mode is active

### Caption Generator
- Random funny caption generation
- Copy to clipboard functionality
- Nepali friend names included
- Multiple template variations

### Animations
- Floating festival elements
- Smooth page transitions
- Interactive hover effects
- Loading animations

## 🤝 Contributing

Feel free to fork this project and make it even funnier! Add more features, improve animations, or create new roast templates.

## 📝 License

This project is open source and available under the MIT License.

---

**Made with ❤️ and lots of laughter during Dashain 2024!**
**शुभ दशैं! 🙏**

Enjoy roasting your friends responsibly! 😄
