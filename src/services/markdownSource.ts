import fs from 'fs'
import matter from 'gray-matter';
import path from 'path'
import R, { Filter } from 'ramda';

interface MatterObject {
    data: any,
    content: string
}

interface Markdown {
    title: string,
    subtitle: string | null,
    slug: string
    content: string
}

type fn = (s: string) => string;

const getFileList = (directory: string): string[] => fs.readdirSync(directory)
const readFile = (pathname: string): string => fs.readFileSync(pathname, 'utf8');
const getFullPath = (directory: string): fn => (filename: string): string => path.join(directory, filename);
const parseMatter = (contents: string): MatterObject => matter(contents);
const toMarkdownObject = (matterObj: MatterObject): Markdown => ({ ...matterObj.data, content: matterObj.content })

export function getDocuments(directory: string): Array<Markdown> {
    const getFullPathConfigured = getFullPath(directory);
    const parseFile = R.pipe(getFullPathConfigured, readFile, parseMatter, toMarkdownObject);
    return R.pipe(getFileList, R.map(parseFile))(directory);
}

export function getDocument(directory:string, slug:string):Markdown {
    const docs = getDocuments(directory);
    const filterDoc = (slug:string):Markdown[] => R.filter<Markdown>( (doc: Markdown) => doc.slug === slug)(docs);
    return R.pipe<string, Markdown[], Markdown>(filterDoc, R.head)(slug); 
    //TODO: add generic mdx parsing
}

//TODO: add generic add paths
