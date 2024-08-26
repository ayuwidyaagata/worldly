# Country List Application

[Worldly](https://worldly-countries.vercel.app) is a Next.js application that displays a list of countries with authentication using NextAuth and Google Provider. The application is deployed on Vercel.

![worldly-demo](https://github.com/user-attachments/assets/8b3c4920-ee0e-4107-a83c-99e10e7d814a)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v18 or higher)
- npm or yarn (package managers)

### Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:ayuwidyaagata/worldly.git
   cd worldly
   
2. **Install the dependencies:**
    ```bash
   npm install
   # or
   yarn install
    
### Running the Development Server

1. **Environment Variables:**
   ```bash
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXT_PUBLIC_API_URL=your_backend_api_url
   
2. **Running the Development Server**
    ```bash
   npm run dev
   # or
   yarn dev

Open http://localhost:3000 with your browser to see the result.
