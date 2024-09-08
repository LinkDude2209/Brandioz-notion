/** @type {import('next').NextConfig} */
export default {
    images: {
        domains: ['images.unsplash.com', 'assets.aceternity.com', 'tlsgdkhnoysuuwtijxjk.supabase.co'],
    },
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
    },
};