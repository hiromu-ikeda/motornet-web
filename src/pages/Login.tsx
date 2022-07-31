import { Link } from "react-router-dom"
import styled from "styled-components"
import { Button } from "../components/atoms/Buttons"

export const Login = () => {
  return (
    <>
      <Sform>
        <Stitle>モーターネットにログインする</Stitle>
        <Sdiv>
          <Semail>メールアドレス</Semail>
          <Sinput name="email" type="email"></Sinput>
        </Sdiv>
        <Sdiv>
          <Spassword>パスワード</Spassword>
          <Sinput name="password" type="password"></Sinput>
        </Sdiv>
        <Button text="ログインする" href=""/>
      </Sform>
      <ToSignup>
        <p>まだ登録されていませんか？</p>
        <Link to="/signup">登録画面へ</Link><br />
      </ToSignup>
    </>
  )
}

const Sform = styled.form`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 120px;
  margin-bottom: 60px;
`

const Stitle = styled.div`
  margin-bottom: 88px;
`

const Sdiv = styled.div`
  margin-bottom: 60px;
`

const Semail = styled.label`
  margin-right: 30px;
`

const Spassword = styled.label`
  margin-right: 76px;
`

const Sinput = styled.input`
  border: none;
  border-bottom: 1.5px solid #707070;
  height: 32px;
  width: 254px;
  background-color: #F2F2F2;
`

const ToSignup = styled.div`
  text-align: center;
`
