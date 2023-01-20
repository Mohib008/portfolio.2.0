

export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
   {
    name: "JobTitle",
    title: "JobTitle",
    type: "string"
   },
   {
    name: "companyImage",
    title: "CompanyImage",
    type: 'image',
    Options: {
      hotspot: true,
    }
   },
   {
    name: 'company',
    title: 'Conpany',
    type: 'text',
   },
   {
    name:'dateStarted',
    title: 'DateStarted',
    type: 'date',
   },
   {
    name: 'dateEnded',
    title: 'DateEnded',
    type: 'Date',
   },
   {
    name: 'isCurrentlyWorkingHere',
    title: 'IsCurrentlyWorkingHere',
    type: 'booleen',
   },
   {
    name: "technologies",
    title: "Technologies",
    type: "array",
    of: [{type: "reference", to: {type: "skill"}}],
   },
   {
    name: "points",
    title: "Points",
    type: "array",
    of: [{type: "string"}],
   }
  ]
}
