

const AuthModal = ({ setShowModal }) => {

    const handleClick = () => {
        setShowModal(false)
    }
    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>ⓧ</div>
            AUTH MODAL
        </div>
    )
}

export default AuthModal