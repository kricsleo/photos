export interface Photo {
  id: string
  width: number
  height: number
  urls: {
    regular: string
  }
  links: {
    html: string
  }
  user: {
    id: string
    name: string
    links: {
      html: string
    }
    profile_image: {
      medium: string
    }
  }
}
