# Country List Application

[Worldly](https://worldly-countries.vercel.app) is a Next.js application that displays a list of countries with authentication using NextAuth and Google Provider. The application is deployed on Vercel.

<video width="500" controls>
  <source src="https://github.com/ayuwidyaagata/worldly/blob/main/public/worldly-demo.mp4" type="video/mp4">
</video>

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v14 or higher)
- npm or yarn (package managers)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/country-list-app.git
   cd country-list-app
   
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
