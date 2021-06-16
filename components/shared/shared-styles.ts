import styled from 'styled-components'

const TagKeyValuePair = styled.div`
  display: flex;
  margin: 10px 0;
`
const TagKey = styled.div`
  margin-right: 20px;
  color: #0c4284;
  font-weight: bold;
`

const TagValue = styled.div`
  color: black;
  font-size: 16px;
`

const TagTitle = styled.div`
  color: #0c4284;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`

const TagDetails = styled.div`
  color: black;
  font-size: 16px;
`

export { TagKeyValuePair, TagKey, TagValue, TagTitle, TagDetails }
