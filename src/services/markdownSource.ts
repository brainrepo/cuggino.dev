import fs from 'fs'
import matter from 'gray-matter';
import path from 'path'
import R from 'ramda';
import renderToString from "next-mdx-remote/render-to-string";


interface MatterObject {
    data: any,
    content: string
}

interface Path {
    params: {
        slug: string
    }
}

export interface Markdown {
    title: string,
    subtitle: string | null,
    slug: string,
    content: string,
}

export interface Paths {
    paths: Array<Path>,
    fallback: boolean
}

type fn = (s: string) => string;



//-------------------------------------
//
// Function to get Markdown document List and MarkdownDocuments
//
// Usage: 
//
// export const getStaticPaths = getPages('contents/success-stories');
// export const getStaticProps = getPageProps("contents/success-stories", components)
//


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

export function getDocument(directory: string, slug: string): Markdown {
    const docs = getDocuments(directory);
    const filterDoc = (slug: string): Markdown[] => R.filter<Markdown>((doc: Markdown) => doc.slug === slug)(docs);
    return R.pipe<string, Markdown[], Markdown>(filterDoc, R.head)(slug);
    //TODO: add generic mdx parsing
}


//-------------------------------------
//
// Next JS internal function related to Page Component
//
// Usage: 
//
// export const getStaticPaths = getPages('contents/success-stories');
// export const getStaticProps = getPageProps("contents/success-stories", components)
//

export function getStaticPaths(documentsPath): () => Promise<Paths> {
    return async () => {
        const paths = getDocuments(documentsPath);
        return {
            paths: paths.map((doc: Markdown): Path => ({ params: { slug: doc.slug } })),
            fallback: false,
        };
    }
}

export function getStaticProps(path:string, components) {
    return async (ctx) => {
        const postData = getDocument(path, ctx.params.slug);
        const mdxSource = await renderToString(postData.content, { components });
        return {
          props: {
            postData: {
              ...postData,
              rawContent: postData.content,
              content: mdxSource,
            },
          },
        };
    }
  }
  