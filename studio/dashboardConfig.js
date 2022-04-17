export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '625c69e508bfe01b73998191',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5r5cutq1',
                  apiId: '3ba16e48-eca3-4994-86f0-ce6d363aa839'
                },
                {
                  buildHookId: '625c69e513f19e1cf33a4262',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t5gpbnpk',
                  apiId: 'a7146342-e237-441d-b807-0cf196f0fdf4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/petterkoding/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t5gpbnpk.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
