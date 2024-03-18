import Transition from '../utils/Transition'

function Home() {
	return (
		<Transition className="flex justify-center items-center flex-col">
			<h1 className="text-5xl font-bold">Home</h1>
			<p className="text-gray-600">Welcome to the Home page</p>
		</Transition>
	)
}

export default Home
