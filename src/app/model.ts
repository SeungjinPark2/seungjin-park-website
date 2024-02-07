export interface Project {
  title: string,
  image: {
    imgName: string,
    imgAlt: string,
  },
  projectStatus: string,
  skills: string[],
  link: {
    href: string,
    text: string,
  }[],
  description: string,
}