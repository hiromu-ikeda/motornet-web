import { useState } from "react"
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";
import { SubmitButton } from "../components/atoms/Buttons";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      console.log(email, password)
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      alert("正しく入力してください");
    }
  }
  return (
    <>
      <Sform onSubmit={handleSubmit}>
        <Stitle>モーターネットに登録する</Stitle>
        <Sdiv>
          <Semail>メールアドレス</Semail>
          <Sinput name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></Sinput>
        </Sdiv>
        <Sdiv>
          <Spassword>パスワード</Spassword>
          <Sinput name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Sinput>
        </Sdiv>

        <SubmitButton text="登録する"/>
      </Sform>
      <ToLogin>
        <p>すでに登録済みですか？</p>
        <Link to="/login">ログイン画面へ</Link><br />
      </ToLogin>
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

const ToLogin = styled.div`
  text-align: center;
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
