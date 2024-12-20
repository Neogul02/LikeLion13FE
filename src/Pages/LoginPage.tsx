import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

const LoginPage = () => {
  const { isLoggedIn, logout, testLogin } = useAuthStore()

  return (
    <div>
      <h1>로그인 페이지</h1>

      {isLoggedIn ? (
        <div>
          <h2>Login Success</h2>
          <button onClick={logout}>로그아웃 할래요</button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              alert('로그인 기능 미구현 - /store/useAuthStore.ts 파일을 확인해봐요')
            }}
          >
            로그인 할래요
          </button>
          <Link to='/signup'>
            <button>회원가입 할래요</button>
          </Link>

          <br />
          <button onClick={testLogin}>테스트로그인 할래요</button>
        </div>
      )}
    </div>
  )
}

export default LoginPage
