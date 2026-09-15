import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const base='https://www.devinecdc.in'; const routes=['/','/about','/programmes','/therapies','/consultation','/resources','/faq','/team','/contact','/blog','/404']; return routes.map(route=>({url:`${base}${route}`,lastModified:new Date()})); }
