# DashPlay.App

A web application that enhances the media viewing experience in Tesla browsers by enabling fullscreen playback from custom media sources. This project extends the default YouTube functionality to support additional streaming platforms and media sources.

## Features

- 🎥 Fullscreen media playback support for custom sources
- 🔧 Customizable media source management
- 💾 Browser cache storage for user preferences
- ⚡ No server required - runs entirely in the browser
- 🎨 Dark mode support
- 📱 Responsive design for Tesla's browser

## How It Works

The application runs entirely in your Tesla's browser and allows you to:
1. Add custom media sources to your collection
2. Manage (edit/remove) existing media sources
3. Launch media in fullscreen mode
4. Persist your settings using browser local storage

## Usage

1. Visit the website in your Tesla's browser
2. Click the "Manage" button to customize your media sources
3. Add new sources using the "+" button
4. Click on any media card to launch it in fullscreen mode

## Local Development

```bash
# Clone the repository
git clone https://github.com/nikpcenicni/DashPlay.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Technical Details

- Built with React + Vite
- Uses browser LocalStorage API for data persistence
- Implements responsive design for optimal viewing
- Dark mode support for better visibility in low-light conditions

## Privacy

All data is stored locally in your browser's cache. No data is collected or transmitted to external servers.

## Limitations

- Only works in Tesla's browser
- Requires manual source configuration
- Limited to sources that allow iframe embedding

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This project is not affiliated with Tesla, Inc. Use at your own discretion.

## Support

For issues or feature requests, please use the [GitHub Issues](https://github.com/nikpcenicni/DashPlay/issues) page.
