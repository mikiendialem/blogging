import '../styles/tailwind.css'

export function Login(){
    return(
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">Login</h1>
        <form className="w-full max-w-md">
          <div className="mb-4">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="jhon@deo"
              className="appearance-none block w-full bg-gray-200 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-700"
            />
          </div>
          <div className="mb-4">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-xs font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="appearance-none block w-full bg-gray-200 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-700"
            />
          </div>
          <div className="flex justify-center">
            <button onSubmit={()=>{alert('You are logged in')}}className="transition-all duration-200 ease-in-out transform hover:-translate-y-1 inline-flex items-center shadow-lg rounded-md  text-base font-semibold text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
          </div>
        </form>
      </div>
    )
}