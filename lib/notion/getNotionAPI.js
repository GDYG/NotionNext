import { NotionAPI as NotionLibrary } from 'notion-client'
import BLOG from '@/blog.config'

const notionAPI = getNotionAPI()

function getNotionAPI() {
  return new NotionLibrary({
    activeUser:
      BLOG.NOTION_ACTIVE_USER || '75db1ef8-fc17-472b-8a77-86c2226a13c4',
    authToken:
      BLOG.NOTION_TOKEN_V2 ||
      'eyJhbGciOiJkaXIiLCJraWQiOiJwcm9kdWN0aW9uOnRva2VuLXYzOjIwMjQtMTEtMDciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIn0..DF3jZgMFi-LazBG2fvADeQ.yWkQ8h51Rf9cLSxe9YbvWPiQ9cL-8LQqzfZCZ1Qj53hr5fzqTx3YDKZQ6ujPmb2jvpq6ATTOj9ShhuFgfhSRMnfxGEMcUZ1mW97hMR2IDoMg2WOshyCDl0EhTbBX9aY5PtTtqodzFuyxjYFjd5_9PJNRZpZcqnTvs8Mobk8qEGCvCDe9B_euk8iTNSd7ZAFfCsBMtYYoGeqw0HQa-g8xPIpa6w3eix56uNiWQ7F3k8siRG5W-PfSfkQ9pxQNLUuJIsKXNan2W6tdTUi42M4DgIj7hkxVXsy3RJAvnaWOONASYnulk1eiodtGHYKSiq8TmsYeLnRkLNHEdQalMmCyqM0b51e8i9HVv7JBUZJz7DI.RJgrCL55NgqJKC4JUNtMb5bJvC-GGxeI44rAEPdyqe8',
    userTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
  })
}

export default notionAPI
