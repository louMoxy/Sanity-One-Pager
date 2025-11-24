//Documents
import {home} from './documents/home'
import {page} from './documents/page'
import {about} from './documents/about'
import {pageBuilder} from './documents/pageBuilder'

//Blocks
import {heroBlock} from './blocks/heroBlock'
import {aboutBlock} from './blocks/aboutBlock'
import {servicesBlock} from './blocks/servicesBlock'
import {columnsBlock} from './blocks/columnsBlock'
import {faqBlock} from './blocks/faqBlock'

//Types
import {localeString} from './custom-types/localeString'
import {localeText} from './custom-types/localeText'
import {localeBlock} from './custom-types/localeBlock'
import {localeSlug} from './custom-types/localeSlug'

const documents = [home, page, about, pageBuilder]
const blocks = [heroBlock, aboutBlock, servicesBlock, columnsBlock, faqBlock]
const types = [localeString, localeText, localeBlock, localeSlug]

export const schemaTypes = [...documents, ...blocks, ...types]
