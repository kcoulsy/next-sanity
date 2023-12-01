import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'config',
  title: 'Config',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
