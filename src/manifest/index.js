const manifest = {
  title: 'AWS Services',
  sections: [
    {
      title: 'Containers',
      services: [
        {
          name: 'VPC',
          type: 'container',
          displayName: 'VPC'
        },
        {
          name: 'PublicSubnet',
          type: 'container',
          displayName: 'Public Subnet'
        },
        {
          name: 'PrivateSubnet',
          type: 'container',
          displayName: 'Private Subnet'
        }
      ]
    }
  ]
}

export default manifest;