export default function LoginForm(){
    return (
        <div className="flex h-screen justify-center bg-gradient-to-t from-fuchsia-900 to-red-500">
            <div className="mt-20 w-2/6">
                <h1 className="flex justify-center text-2xl text-red-900 font-bold mb-2 mt-2 ">dancesport.am</h1>
                <div className="bg-white rounded-2xl w-full">
                    <p className="flex justify-center pt-10 text-xl font-bold">Войти в профиль</p>
                    <form action="">
                        <input type="text" />
                        <input type="text" />
                        <br />
                        <a href="/#">Не помните пароль?</a>
                        <br />
                        <button>Войти</button>
                        <br />
                        <a href="/#">Создать аккаунт</a>
                    </form>
                </div>
            </div>
        </div>
    );
};