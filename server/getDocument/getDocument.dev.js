import path from 'path'
import compiler from 'compiler'

export default function getDocument() {
  const memoryFs = compiler.outputFileSystem
  const indexPath = path.resolve(process.cwd(), 'dist/index.ejs')
  return memoryFs.readFileSync(indexPath, 'utf8')
}
