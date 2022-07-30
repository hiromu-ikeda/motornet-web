import styled from "styled-components"

export const HotTopics = () => {
  return (
    <>
      <div>
        <Stitle>話題のキーワード</Stitle>
        <Srank>1　新型CX-5</Srank>
      </div>
    </>
  )
}

const Stitle = styled.div`
    font-weight: bold;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 24px;
`

const Srank = styled.div`
    text-align: center;
`
