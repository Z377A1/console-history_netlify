exports.onCreateNode = ({ node, actions, createNodeId }) => {
    const { createNode, createNodeField } = actions;
  
    // Define a custom node type and create a node
    if (node.internal.type === 'MarkdownRemark') {
      const customNode = {
        id: createNodeId(`${node.id} >>> CustomNode`),
        parent: node.id,
        children: [],
        internal: {
          type: 'CustomNode',
          content: JSON.stringify(node.frontmatter),
          contentDigest: createContentDigest(node.frontmatter),
        },
        // Your custom fields here
      };
      createNode(customNode);
    }
  };
  