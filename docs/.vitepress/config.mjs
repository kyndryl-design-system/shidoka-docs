import { defineConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  // VitePress's options here...
  title: 'Shidoka',
  description: 'Shidoka Design System Documentation',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/get-started' },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/kyndryl-design-system' }],

    editLink: {
      pattern: (page) => {
        // Replace this with your own collection mapping
        const cmsPath = page.relativePath.replace('.md', '');

        return `/admin/index.html#/edit/${cmsPath}`;
      },
    },

    search: {
      provider: 'local',
    },
  },
};

const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: '/docs',
  capitalizeEachWords: true,
  hyphenToSpace: true,
  collapsed: false,
  useFolderTitleFromIndexFile: false,
  useFolderLinkFromIndexFile: true,
  sortFolderTo: 'bottom',
};

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
