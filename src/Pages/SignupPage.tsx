import React from 'react'

const SignupPage = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <form>
        <input
          type='text'
          placeholder='아이디'
        />
        <input
          type='password'
          placeholder='비밀번호'
        />
        <button type='submit'>가입하기</button>
      </form>
    </div>
  )
}

export default SignupPage
