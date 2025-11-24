import {StructureBuilder} from 'sanity/structure'

export const about = (S: StructureBuilder) =>
  S.listItem()
    .id('about')
    .schemaType('about')
    .title('About Section')
    .child(S.editor().id('about').schemaType('about').documentId('about'))

