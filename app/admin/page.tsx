import React from 'react';

const JsonLdScript: React.FC<{ data: object }> = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export const metadata = {
  robots: {
    index: false,
    nocache: true,
  },
};

const AdminPage = () => {
  // Define the structured data for the administrative page
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Admin Page',
    'description': 'This is an administrative page for managing your application.',
  };

  return (
    <>
      {/* Page content */}
      <div>AdminPage</div>

      {/* Include the structured data component */}
      <JsonLdScript data={structuredData} />
    </>
  );
};

export default AdminPage;
