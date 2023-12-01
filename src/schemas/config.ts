import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'config',
  title: 'Config',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
    }),
    defineField({
      name: 'keywords',
      title: 'Meta Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'hreflang',
      title: 'Hreflang',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'og',
      title: 'Open Graph',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'string',
        }),
        defineField({
          name: 'type',
          title: 'Type',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'string',
        }),
        defineField({
          name: 'card',
          title: 'Card',
          type: 'string',
        }),
      ],
    }),
  ],
})
