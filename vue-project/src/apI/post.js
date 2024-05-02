const posts = [
  { id: 1, title: '제목1', content: 'test', createdAt: '2020-20-02' },

  { id: 2, title: '제목2', content: 'test2', createdAt: '2020-20-01' },
  { id: 3, title: '제목3', content: 'test3', createdAt: '2020-20-02' },
  { id: 4, title: '제목4', content: 'test4', createdAt: '2020-20-034' }
]

export function getPosts() {
  return posts
}
