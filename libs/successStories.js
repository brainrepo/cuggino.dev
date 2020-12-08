import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const directory = path.join(process.cwd(), 'contents/success_stories')

export function getData() {
  const fileNames = fs.readdirSync(directory)
  const data = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(directory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {id, ...matterResult.data};
  });
  return data.sort((a, b) => (a.date < b.date)?1:-1);
}