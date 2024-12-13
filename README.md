# AI Code Refactor

![AI Code Refactor](https://img.shields.io/badge/AI-Code%20Refactor-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)

An intelligent code analysis tool that helps developers write better code through AI-powered suggestions, code smell detection, and automated refactoring recommendations.

## 🚀 Features

- **Real-time Code Analysis**: Instant feedback on code quality and structure
- **Code Smell Detection**: Identifies potential issues and anti-patterns
- **Smart Suggestions**: AI-powered recommendations for code improvements
- **Complexity Metrics**: Track and improve code maintainability
- **Modern UI**: Clean, responsive interface with dark mode support

## 🛠️ Technical Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Code Analysis**: Custom JavaScript-based analysis engine

## 📊 Code Analysis Features

### Code Smells Detection
- Long functions (> 20 lines)
- Excessive line length
- Callback hell (nested callbacks)
- Complex conditional logic
- Duplicate code patterns

### Suggestions Engine
- Convert `forEach` to `map` when appropriate
- Modernize variable declarations (`var` to `const`/`let`)
- Transform Promise chains to async/await
- Improve code readability
- Optimize performance patterns

### Metrics
- Cyclomatic complexity
- Maintainability index
- Duplicate code percentage
- Code organization score

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://https://github.com/aryan1112003/AI-Code-Refactoring-Tool.git
   ```

2. **Install dependencies**
   ```bash
   cd ai-code-refactor
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── AnalysisPanel/   # Code analysis display components
│   ├── CodePanel/       # Code editor components
│   └── Layout/          # Layout components
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
└── utils/              # Utility functions and analysis logic
```

## 🧩 Code Organization

The project follows several key principles for maintainable code:

- **Component Separation**: Each component has a single responsibility
- **Type Safety**: Comprehensive TypeScript types for all features
- **Custom Hooks**: Reusable logic extracted into hooks
- **Utility Functions**: Shared functionality in dedicated utils
- **Consistent Styling**: Tailwind CSS for maintainable styles

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aryan Acharya**
- GitHub: [@aryanacharya](https://github.com/aryan1112003)
- LinkedIn: [Aryan Acharya](linkedin.com/in/aryan-acharya-9b939b316)
- Email: aryanacharya12003@gmail.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide React for beautiful icons
- All contributors who help improve this tool

---
![Screenshot 2024-12-13 175503](https://github.com/user-attachments/assets/ba712d25-0ab3-400d-aa07-a254617e93bb)

![Screenshot 2024-12-13 175502](https://github.com/user-attachments/assets/3ca62625-3a2e-43d7-b9d3-dda3dd593dc8)




Made with ❤️ by Aryan Acharya
