exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const data = []
    // Fetch data from GraphQL or other sources
    // const result = await graphql(`
    //   query {
    //     allYourData {  // Replace with your GraphQL query or data source
    //       edges {
    //         node {
    //           id
    //           // Other fields you need
    //         }
    //       }
    //     }
    //   }
    // `);
  
    // if (result.errors) {
    //   throw result.errors;
    // }
  
    // const data = result.data.allYourData.edges;
  
    // Create pages using the fetched data
    data.forEach(edge => {
      const { id } = edge.node;
  
      createPage({
        path: `/details/${id}`,  // Replace with the desired path structure
        component: require.resolve('./src/pages-templates/details.template.tsx'), // Path to your DetailsTemplate component
        context: {
          id,  // Pass any additional data you need to the template
        },
      });
    });
  };

  

  
  
  
  
  