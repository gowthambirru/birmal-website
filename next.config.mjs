const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'birmal-website';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : '',
  },
  images: {
    loader: 'custom',
    loaderFile: './src/image-loader.ts',
  },
  trailingSlash: true,
};

export default nextConfig;
