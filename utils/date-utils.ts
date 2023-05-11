import { siteMetadata } from "@/configuration/site-metadata"

export const formatDate = (date: string) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const now = new Date(date).toLocaleDateString(siteMetadata.locale, options as any)

  return now
}