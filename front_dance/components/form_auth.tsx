export default function LoginForm() {
    return (
        <div className="flex h-screen justify-center bg-gradient-to-t from-fuchsia-900 to-red-500">
            <div className="mt-20 sm:w-3/6 lg:w-2/6">
                <h1 className="flex justify-center text-2xl text-red-900 font-bold mb-2 mt-2 ">dancesport.am</h1>
                <div className="bg-white rounded-2xl w-full">
                    <p className="flex justify-center pt-10 text-xl font-bold">Войти в профиль</p>
                    <form action="">
                        <div className="flex-col flex justify-center w-full p-6">
                            <div className="my-2 relative input__box">
                                <input required className="w-full" type="email" />
                                <label className="input__label" htmlFor="">Электронная почта</label>
                            </div>
                            <div className="my-2 relative input__box">
                                <input required className="w-full" type="password" />
                                <label className="input__label" htmlFor="">Пароль</label>
                                <i className="ri-eye-line eye__btn"></i>
                            </div>
                            <br />
                            <a className="underline" href="/#">Не помните пароль?</a>
                            <br />
                            <button className="w-full h-12 bg-blue-400 rounded-lg">Войти</button>
                            <br />
                            <a className="w-full h-12 border-2 rounded-lg flex justify-center items-center" href="/#">Создать аккаунт</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};