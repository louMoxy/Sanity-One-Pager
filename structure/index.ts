import {StructureBuilder} from 'sanity/structure'
import {pageBuilder} from './pageBuilder'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([pageBuilder(S)])
