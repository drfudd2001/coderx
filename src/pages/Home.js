import Nav from '../components/Nav'

const Home = () => {

    const authToken = false

    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <div className="overlay">
            <Nav minimal={false} authToken={authToken}/>
        
        <div className="home">
            <h1>Pick the Right One©</h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken ? 'SignOut': 'Create Account'}
            </button>

        </div>
        </div>
    )
}

export default Home