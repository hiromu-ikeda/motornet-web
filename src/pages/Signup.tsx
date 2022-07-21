import { useEffect, useRef, useState } from "react"
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passRef = useRef(null);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      alert("正しく入力してください");
    }
  }
  const [ user, setUser ] = useState<string>('');
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
    });
  }, []);
  return (
    <>
      <div>サインアップ画面です</div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Email</div>
          <input name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div>
          <div>Password</div>
          <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button>Register</button>
      </form>
    </>
  )
}
