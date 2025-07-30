# Little Lemon Restaurant App

Little Lemon is the capstone project for the Meta Front-End Developer Professional Certificate. It’s a front-end web application built with React and Vite that showcases a restaurant landing page, a client-side reservations flow with validation, responsive navigation, and component testing. Styling is done with Tailwind CSS, and forms use Formik + Yup.

**Live demo**: [https://littlelemon-vancouver.netlify.app/](https://littlelemon-vancouver.netlify.app/)

## Features

### Home Page
- **Hero section** with brand copy
- **“This Week’s Specials”** cards with images and pricing
- **Customer Testimonials**
- **About section** with chef imagery and story

### Responsive Navigation
- Top navigation with links

### Reservations
- **Formik + Yup form** with fields:
  - **Date** (`resDate`)
  - **Time** (`resTime`) from predefined options (17:00–22:00)
  - **Guests** (`guests`) with validation (min 1, max 10)
  - **Occasion** (`occasion`)
- Client-side validation and disabled submit until all fields are valid
- On submit, the app navigates to a confirmation page (`/confirmation`)

### Footer
- Contact details and social links (Facebook, Twitter, Instagram, YouTube)

### Testing
- Component tests with **Vitest** and **React Testing Library**
- Coverage includes:
  - Rendering
  - Navigation/anchor scroll behavior
  - Form validation state (enabled/disabled submit)

## Tech Stack
- **React 18** + **Vite**
- **react-router-dom** (routing)
- **Formik** (form state) + **Yup** (validation)
- **Tailwind CSS** (styling)
- **lucide-react** (icons)
- **Vitest** + **@testing-library/react** (testing)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/anexinwilson/little-lemon.git
   cd little-lemon
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Visit [http://localhost:5173](http://localhost:5173)

## Usage
- Explore the **Home page** for specials, testimonials, and the restaurant story.
- Use the **navigation**.
- Make a **reservation**:
  - Go to **Reservations**, fill the form (date, time, guests 1–10, occasion).
  - The submit button is enabled only when all validations pass.
  - On submit, you’ll be redirected to the **confirmation page**.

## Routes
- `/` — Home (Hero, Specials, Testimonials, About)
- `/reservations` — Reservation form
- `/confirmation` — Reservation confirmation
- `/order` — Work-in-progress page
- `/login` — Work-in-progress page

## Project Structure
```
src/
├─ assets/
│  └─ images/                 # Logo, hero, dishes, chef images
├─ components/
│  ├─ About.jsx
│  ├─ Footer.jsx
│  ├─ HomeContent.jsx
│  ├─ Menu.jsx
│  ├─ ReservationForm.jsx
│  └─ Testimonials.jsx
├─ pages/
│  ├─ Home.jsx
│  ├─ Layout.jsx
│  ├─ Login.jsx               # WIP placeholder
│  ├─ OrderOnline.jsx         # WIP placeholder
│  ├─ Reservations.jsx
│  └─ ReservationConfirmation.jsx
├─ App.jsx
└─ main.jsx
```

## Testing
Run the component tests:
```bash
npm test
```

**What’s covered**:
- Rendering smoke tests for pages/components
- Nav link presence
- Reservation form validation (submit disabled until valid, then enabled)

## Deployment
Since you’re using Netlify:

1. Build the project locally:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `/dist` folder to Netlify via:
   - **Netlify CLI**: Run `netlify deploy --prod` and follow the prompts to upload the `/dist` folder.
   - **Netlify Dashboard**: Drag and drop the `/dist` folder into the Netlify deploy interface.
   - **Git Integration**: Push to your connected Git repository, and Netlify will auto-deploy (ensure the build command is set to `npm run build` and the publish directory is `dist` in your Netlify settings).

This project is deployed to Netlify at: [https://littlelemon-vancouver.netlify.app/](https://littlelemon-vancouver.netlify.app/)
