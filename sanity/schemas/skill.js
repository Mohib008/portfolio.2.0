

export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
   {
    name: "title",
    title: "Title",
    description: "title of skill", 
    type: "string"
   },
   {
    name: "progress",
    title: "Progress",
    type: "number",
    description: "Progress of skill from 0 to 100%",
    validation: (Rule) => Rule.min(0).max(100),
    of: [{type: "reference", to: {type: "skill"}}],
   },
   {
    name: "image",
    title: "Image",
    type: "image",
    options: {
      hotspot: true,
    }
   }
  ]
}
