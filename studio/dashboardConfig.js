export default {
  widgets: [
    {name: 'sanity-tutorials'},
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5cc82130838ce0367b5fc23e',
                  name: 'Content Studio',
                  siteId: 'a71712eb-3e1f-41f9-a5c8-ee099822974b'
                },
                {
                  buildHookId: '5cc821307d8bfb6461910b56',
                  name: 'Portfolio Website',
                  siteId: 'ced4eba8-6e42-43b2-b514-1108da698410'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mateuszbaj/sanity-gatsby-portfoliocdc',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https:&#x2F;&#x2F;sanity-gatsby-portfoliocdc.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
