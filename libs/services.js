import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const servicesDirectory = path.join(process.cwd(), 'contents/services')

export function getSortedServicesData() {
  const fileNames = fs.readdirSync(servicesDirectory)
  const allServicesData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(servicesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {id, ...matterResult.data};
  });
  return allServicesData.sort((a, b) => (a.date < b.date)?1:-1);
}

export function getServiceData(slug) {
  const data = getSortedServicesData();
  const service = data.filter(e => e.slug === slug);

  return service[0] || null;
}