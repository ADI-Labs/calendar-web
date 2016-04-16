import fs from 'fs'
import path from 'path'

export default function getDocument() {
  return fs.readFileSync(path.resolve(process.cwd(), 'dist/index.ejs'), 'utf8')
}
