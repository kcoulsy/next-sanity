import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import config from './config'

export const schemaTypes = [post, blockContent, config]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent],
}
