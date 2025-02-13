

# Skepsis Website

Welcome to the **Skepsis** website project! This modern, responsive website is built using **Next.js** and **Tailwind CSS**, showcasing the Skepsis community and its activities with a sleek and user-friendly design.

## Table of Contents

- [Skepsis Website](#skepsis-website)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
  - [Figma Design](#figma-design)
  - [Project Structure](#project-structure)
    - [Content Management](#content-management)
  - [This structure helps to keep the content separate and easily editable, improving both development and long-term maintainability of the project.](#this-structure-helps-to-keep-the-content-separate-and-easily-editable-improving-both-development-and-long-term-maintainability-of-the-project)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)

---

## Features

- **Responsive Design**: Optimized for all screen sizes, from mobile to desktop.
- **Modern UI Components**: Built with Tailwind CSS for a clean and consistent design.
- **Server-Side Rendering (SSR)**: Using Next.js for better performance and SEO.
- **Accessibility**: Focused on creating an inclusive experience for all users.
- **Easy Content Management**: Centralized and well-structured content.

---

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone --branch manov https://github.com/prithwish122/SKEPSIS
   cd SKEPSIS
   ```

2. **Install dependencies:**

   Make sure you have `Node.js` installed, then run:

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open the website in your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the project.

---

## Figma Design

The Skepsis website design was planned and created using Figma, by the 2023-24 Tenure's Skepsis Design Team. Check out the design mockups below:

👉 [View the Figma Design](https://www.figma.com/design/F9gJc71cCPtqpSgE4ffygD/SkepsisWebsiteInPRogress?node-id=2354-135&node-type=frame&t=6Yw3s0biWqKpocnA-0)



---

 

## Project Structure

Here’s an overview of the folder structure:

```
.
├── components/             # Reusable components (e.g., Navbar, Footer, Cards)
│   ├── sections/           # Contains section-wise components (e.g., Hero, Features)
│   └── ui/                 # Contains UI components (e.g., Buttons, Icons)
├── pages/                  # Next.js pages
├── public/                 # Static files (e.g., images, icons)
├── styles/                 # Tailwind CSS configurations
├── lib/                    # Utility functions and content
├── utils/                  # Helper functions
├── src/                    # Main source folder containing app, components, lib, and utils
│   └── content.ts          # Contains all text components for easy management and development
├── README.md               # Project documentation
```

---

### Content Management

All text components (such as titles, descriptions, and any static text used across the website) are centralized in the `content.ts` file located in the `src/` directory. This structure makes it easier to manage and update content, ensuring consistency throughout the site.

---

This structure helps to keep the content separate and easily editable, improving both development and long-term maintainability of the project.
---

## Technologies Used

- **Next.js**: Framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **TypeScript**: Optional static typing for JavaScript.
- **Figma**: Design and prototyping tool.

---

## Contributing

We welcome contributions from the community! If you’d like to improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your descriptive message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request on GitHub.

---

## License

This project is licensed under the [MIT License](LICENSE).

