import api from '../../utils/api'

export default async function setHeroPost(postId: string) {
  try {
    const res = await api.delete(`/blogs/${postId}`)
    return res.data.msg
  } catch (err) {
    throw err.response.data.msg
  }
}
