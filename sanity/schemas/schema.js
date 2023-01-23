import  schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

import project from './project'
import pageInfo from './pageInfo'
import experience from './experience'
import skill from './skill'
import social from './social'


export default createSchema ({
  name: "default",
  types: schemaTypes.concat([social, experience, skill, pageInfo, project])
})

