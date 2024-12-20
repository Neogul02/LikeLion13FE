import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

const Nav = () => {
  const { isLoggedIn, logout } = useAuthStore()
  // testLogin 함수는 isLoggedIn을 true로 변경함 -> 개발용

  return (
    <div style={{ backgroundColor: 'lightgray' }}>
      <button>
        <Link to='/'>로고 - 메인페이지</Link>
      </button>

      {isLoggedIn ? (
        <button onClick={logout}>로그아웃</button>
      ) : (
        <button>
          <Link to='/login'>마이페이지</Link>
        </button>
      )}
    </div>
  )
}

export default Nav
