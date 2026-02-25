// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support Next.js default image optimization
  },
  // Replace 'your-repo-name' with your actual repository name
  // basePath: '/your-repo-name',
};

export default nextConfig;
