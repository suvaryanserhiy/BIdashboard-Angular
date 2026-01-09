# BI Dashboard - Angular

A modern, responsive Business Intelligence dashboard built with Angular 18, featuring interactive data visualizations and comprehensive analytics sections for sales, orders, and system health monitoring.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Project Structure](#project-structure)
- [Components Overview](#components-overview)
- [Routing](#routing)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## ✨ Features

- **Interactive Data Visualization**: Multiple chart types including bar charts, line charts, and pie charts
- **Multi-Section Dashboard**: Dedicated sections for Sales, Orders, and Health monitoring
- **Responsive Design**: Built with Bootstrap 5 for optimal viewing across all devices
- **Modern UI/UX**: Clean, professional interface with navigation sidebar and top navbar
- **Standalone Components**: Built with Angular standalone components for better modularity
- **Real-time Data Ready**: Architecture supports easy integration with real-time data sources

## 🛠 Tech Stack

- **Framework**: Angular 18.2
- **Language**: TypeScript 5.5
- **Styling**: Bootstrap 5.3.3
- **Charts**: Chart.js 4.4.5 with ng2-charts 6.0.1
- **Build Tool**: Angular CLI 18.2.8
- **Testing**: Jasmine & Karma

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.x or higher
- **npm**: v9.x or higher (or pnpm/yarn)
- **Angular CLI**: v18.x or higher

To install Angular CLI globally:
```bash
npm install -g @angular/cli
```

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BIdashboard-Angular
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Or using pnpm (if you prefer):
   ```bash
   pnpm install
   ```

3. **Verify installation**
   ```bash
   ng version
   ```

## 💻 Development

### Start Development Server

Run the development server:
```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Development with Watch Mode

Build the project in watch mode for development:
```bash
npm run watch
# or
ng build --watch --configuration development
```

### Code Scaffolding

Generate new components, services, or other Angular artifacts:
```bash
ng generate component component-name
ng generate directive|pipe|service|class|guard|interface|enum|module
```

## 🏗 Build

### Development Build
```bash
npm run build
# or
ng build
```

### Production Build
```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/bidashboard-angular/` directory.

## 📁 Project Structure

```
BIdashboard-Angular/
├── src/
│   ├── app/
│   │   ├── charts/              # Reusable chart components
│   │   │   ├── bar-chart/
│   │   │   ├── line-chart/
│   │   │   └── pie-chart/
│   │   ├── sections/            # Dashboard sections
│   │   │   ├── section-health/
│   │   │   ├── section-orders/
│   │   │   └── section-sales/
│   │   ├── navbar/              # Navigation bar component
│   │   ├── sidebar/             # Sidebar navigation component
│   │   ├── app.component.*      # Root component
│   │   ├── app.config.ts        # Application configuration
│   │   └── app.routes.ts        # Route definitions
│   ├── index.html
│   ├── main.ts                  # Application entry point
│   └── styles.css               # Global styles
├── public/                      # Static assets
├── angular.json                 # Angular workspace configuration
├── package.json                 # Project dependencies
└── tsconfig.json                # TypeScript configuration
```

## 🧩 Components Overview

### Chart Components

- **BarChartComponent**: Displays data in bar chart format using Chart.js
- **LineChartComponent**: Renders line charts for trend analysis
- **PieChartComponent**: Shows data distribution in pie chart format

### Section Components

- **SectionSalesComponent**: Sales analytics dashboard with multiple chart visualizations
- **SectionOrdersComponent**: Order tracking and analytics section
- **SectionHealthComponent**: System health monitoring dashboard

### Layout Components

- **NavbarComponent**: Top navigation bar with dark theme
- **SidebarComponent**: Side navigation panel for section switching

## 🗺 Routing

The application uses Angular Router with the following routes:

- `/sales` - Sales dashboard (default route)
- `/orders` - Orders dashboard
- `/health` - Health monitoring dashboard
- `/` - Redirects to `/sales`

Routes are defined in `src/app/app.routes.ts`.

## 🔧 Technologies Used

### Core Dependencies
- `@angular/core`: Angular core framework
- `@angular/router`: Client-side routing
- `@angular/forms`: Form handling
- `rxjs`: Reactive programming library

### UI & Styling
- `bootstrap`: CSS framework for responsive design
- `@popperjs/core`: Tooltip and popover positioning
- `jquery`: DOM manipulation (used by Bootstrap)

### Data Visualization
- `chart.js`: Powerful charting library
- `ng2-charts`: Angular wrapper for Chart.js

## 🧪 Testing

Run unit tests:
```bash
npm test
# or
ng test
```

Tests are executed via [Karma](https://karma-runner.github.io) and written using [Jasmine](https://jasmine.github.io/).

## 📝 Scripts

Available npm scripts:

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode
- `npm test` - Run unit tests
- `ng` - Angular CLI commands

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private. All rights reserved.

## 🔗 Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Overview](https://angular.dev/tools/cli)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [ng2-charts Documentation](https://valor-software.com/ng2-charts/)

---

**Built with ❤️ using Angular**
