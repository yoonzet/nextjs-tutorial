const API_KEY = 'f7108cb9304ec757f37227aacbe9891c';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects(){ //redirects: url이 변경되는것을 유저가 볼 수  있음
    return [
      {
        source:'/old-blog/:path*', //이 주소를 치고 들어가면
        destination:'/new-blog/:path*', // 새로운 주소로 변경되어 보여짐
        permanent:false
      }
    ]
  },
  async rewrites(){ // rewrites: 유저를 rediret시키기는 하지만 url은 변하지 않음
    return [
      {
        source:'/api/movies',
        destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source:'/api/movies/:id',
        destination:`https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      }
    ]
  }
}

module.exports = nextConfig
