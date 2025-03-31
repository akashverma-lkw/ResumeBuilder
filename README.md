# Resume Builder

## 📌 Overview
Resume Builder is a React-based web application that allows users to create, preview, and download resumes in PDF format. It features a modern and user-friendly interface with light/dark mode support, real-time data saving, and a mobile-friendly preview modal.

## 🚀 Features
- 📝 **Resume Form**: Fill in your personal, educational, and professional details.
- 👀 **Live Preview**: See real-time updates as you type.
- 📄 **PDF Download**: Download your resume in a printable PDF format.
- 💾 **Auto-Save**: Saves resume data in localStorage for persistence.
- 📱 **Mobile-Friendly**: Responsive design with a preview modal for mobile users.

## 🛠️ Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **PDF Generation**: `react-to-print`
- **Local Storage**: Persist resume data across sessions

## 📂 Folder Structure
```
📂 resume-builder
│── 📂 src
│   ├── 📂 components
│   │   ├── ResumeForm.jsx
│   │   ├── ResumePreview.jsx
│   │   ├── PreviewModal.jsx
│   ├── App.jsx
│   ├── index.js
│── 📄 package.json
│── 📄 README.md
```

## 🔧 Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/resume-builder.git
   ```
2. Navigate to the project directory:
   ```sh
   cd resume-builder
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## 🎯 Usage
1. Enter your details in the Resume Form.
2. See the live preview on the right (desktop) or in a modal (mobile).
3. Click **Download Resume PDF** to get your resume as a PDF.

## 🛠️ Troubleshooting
- If the **Download Resume PDF** button doesn't work, ensure `react-to-print` is installed and properly referenced.
- If the preview does not update, check browser console logs for errors.
- Ensure localStorage is enabled for data persistence.

## 📜 License
This project is open-source under the MIT License.

## ✨ Contributors
- **Akash Verma** ([https://github.com/akashverma-lkw])

---
💡 Feel free to contribute by submitting issues or pull requests!

