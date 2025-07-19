import chefLogo from '../assets/images/chef.png'

function Header() {

    return (
        <header>
            <img src={chefLogo} alt='Chef Logo' />
            <h3>Chef Cerdan!</h3>
        </header>
    )
}

export default Header