'use client'

import style from './style.module.scss';

export default function Login() {

  return(
    <div className="flex flex-col items-center justify-center bg-white h-full">
      <h1 className="-mt-[40px] mb-[20px]">登陆</h1>
      <form className={style['login-form']} method="post" action="/api/login" encType="multipart/form-data" >
        <label className="mb-[20px]">
          Username:
          <input className="ml-[15px] border border-solid border-black" type="text" name="username" required />
        </label>
        <label className="mb-[20px]">
          Password:
          <input className="ml-[15px] border border-solid border-black" type='password' name="password" required />
        </label>
        <input type="submit" value="提交" />
      </form>
    </div>
  );
}