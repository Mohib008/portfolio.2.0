

export default {
  name: 'project',
  title: 'project',
  type: 'document',
  fields: [
   {
    name: "title",
    title: "Title",
    descritption: "title of the project",
    type: "string"
   },
   {
    name: "image",
    title: "Image",
    type: 'image',
    options: {
      hotspot: true,
    }
   },
   {
    name: 'summery',
    title: 'Summery',
    type: 'text',
   },
   {
    name:'technologies',
    title: 'Technologies',
    type: 'string',
    of: [{type: "reference", to: {type: "skill"}}],
   },
   {
    name: "linkToBuild",
    title: "LinkToBuild",
    type: "url",
   }
  ]
}
