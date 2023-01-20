

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
   {
    name: "name",
    title: "name",
    type: "string"
   },
   {
    name: "role",
    title: "role",
    type: 'string'
   },
   {
    name: 'heroImage',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true,
    },
   },
   {
    name:'backgroundInformation',
    title: 'BackgroundInformation',
    type: 'string',
   },
   {
    name: 'profilePic',
    title: 'profilePic',
    type: 'image',
    option: {
      hotspot: true,
    },
   },
   {
    name: 'phoneNumber',
    title: 'PhoneNumber',
    type: 'string',
   },
   {
    name: 'email',
    title: 'Email',
    type: 'string',
   },
   {
    name: "address",
    title: "Address",
    type: 'string'
   },
   {
    name: "socials",
    title: "Socails",
    type: "array",
    of: [{type: "reference", to: {type: "social"}}],
   }
  ]
}
