# Jotion

Jotion is a clone of the popular note-taking application Notion. It's built with Next.js as a learning exercise,
following a tutorial on YouTube.

You can view the live version of the project [here](https://jotion-osadhi.vercel.app/).

## About This Project

This project is a fun experiment to create a functional clone of Notion, a popular note-taking and productivity
application. If you're looking to understand how to build complex applications using Next.js, then examining the code of
this project might be a good start.

## Built With

This project is built with the following technologies:

- [Next.js](https://nextjs.org/)
- [@blocknote/core and @blocknote/react](https://blocknote.net/)
- [@clerk/nextjs](https://docs.clerk.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Zod](https://github.com/colinhacks/zod)
- [Tailwind CSS](https://tailwindcss.com/)

For a complete list of the dependencies, refer to the `package.json` file.

## Getting Started

Firstly, you need Node.js and npm(you can use Yarn too) installed in your system. You can download Node.js
from https://nodejs.org/ and npm is included in the Node.js installation.

### Clone the Repository

You can clone this repository using the following command:

```bash
git clone https://github.com/Osadhi/jotion.git
```

### Installation

Navigate to the project directory and install the dependencies:

```bash
cd jotion
npm install
```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

`CONVEX_DEPLOYMENT` - You can set this value as needed for your Convex deployment.

`NEXT_PUBLIC_CONVEX_URL` - This should match the root URL of your Convex deployment.

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Your Clerk publishable key, which you can find in your Clerk dashboard.

`CLERK_SECRET_KEY` - Your Clerk secret key, which you can also find in your Clerk dashboard.

`EDGE_STORE_ACCESS_KEY` and `EDGE_STORE_SECRET_KEY` - Your Edge Store access and secret keys.

### Running Jotion

You can start the development server using:

```bash
npm run dev
```

Then open http://localhost:3000 with your browser to see Jotion working in action.

## Acknowledgements

This project is built by following a tutorial on YouTube and a GitHub repo. For more information, check out these
resources:

- [YouTube Tutorial](https://www.youtube.com/watch?v=0OaDyjB9Ib8)
- [GitHub Repository Tutorial](https://github.com/AntonioErdeljac/notion-clone-tutorial)

## License

This project is licensed under the [MIT License](./LICENSE).
